import ListView from "../../components/list-view/ListView";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

const Actors = () => {
  const router = useRouter();

  return (
    <ListView
      columns={[
        {
          name: "id",
          value: "#",
        },
        {
          name: "first_name",
          render: (firstName, row) => (
            <Link href={`/actor/${row.id}`}>{firstName}</Link>
          ),
          value: "First Name",
        },
        {
          name: "last_name",
          value: "Last Name",
        },
        {
          name: "createdAt",
          value: "Created At",
        },
        {
          name: "updatedAt",
          value: "Updated At",
        },
      ]}
      title="Actors"
      endpoint="actor"
    >
      <Button className="mb-3" onClick={() => router.push("/actor/new")}>
        New Actor
      </Button>
    </ListView>
  );
};

export default Actors;
