import ListView from "../components/list-view/ListView";

const Category = () => (
  <ListView
    columns={[
      {
        name: "id",
        value: "#",
      },
      {
        name: "name",
        value: "Name",
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
    title="Categories"
    endpoint="category"
  />
);

export default Category;
