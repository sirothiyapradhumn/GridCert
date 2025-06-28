export const columnsCerts = [
  {
    header: "Name",
    accessorFn: row => {
      // return row.name.split("/").slice(-3).join("/");
      return row.name;
    }
  },
  {
    header: "Env",
    accessorFn: row => row.tags.find(tag => tag.Key === "env")?.Value || "",
    id: "env",
  },
  {
    header: "Product Name",
    accessorFn: row => row.tags.find(tag => tag.Key === "product_name")?.Value || "",
    id: "product_name",
  },
  {
    header: "Application Name",
    accessorFn: row => row.tags.find(tag => tag.Key === "application_name")?.Value || "",
    id: "application_name",
  },
];
