import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Page from "../page/Page";
import Table from "../table/Table";
import { toast } from "react-toastify";

const ListView = ({ children, columns, endpoint, title }) => {
  const [rows, setRows] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3333/api/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setRows(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRemoveRow = async (row) => {
    try {
      const response = await fetch(
        `http://localhost:3333/api/${endpoint}/${row.id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      await fetchData();

      toast.success(data.message);
    } catch (error) {
      toast.error("An Unexpected Error Happened");
    }
  };

  return (
    <Page title={title}>
      {children}

      <Table
        columns={[
          ...columns,
          {
            name: "actions",
            value: "Actions",
            render: (valorAtual, row) => {
              return (
                <div>
                  <Button onClick={() => onRemoveRow(row)} variant="danger">
                    Remover
                  </Button>
                </div>
              );
            },
          },
        ]}
        rows={rows}
      />
    </Page>
  );
};

export default ListView;
