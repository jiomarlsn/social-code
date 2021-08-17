import { Table } from "react-bootstrap";

const TableComponent = ({ columns, rows }) => {
  return (
    <Table bordered hover striped>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.value}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => {
              const value = row[column.name];

              if (column.render && typeof column.render === "function") {
                return <td key={column.value}>{column.render(value, row)}</td>;
              }

              return <td key={column.value}>{value}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
