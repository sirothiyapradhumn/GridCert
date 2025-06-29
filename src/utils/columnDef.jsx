export const columnsCerts = [
  {
    header: "Name",
    id: "name",
    accessorFn: (row) => {
      return row.name.split("/").slice(-4).join("/");
      // return row.name;
    },
  },
  {
    header: () => <div className="hidden md:block">Env</div>,
    accessorFn: (row) => row.tags.find((tag) => tag.Key === "env")?.Value || "",
    id: "env",
    cell: ({ row }) => (
      <div className="hidden md:block">{row.getValue("env")}</div>
    ),
  },
  {
    header: () => <div className="hidden md:block">Product Name</div>,
    accessorFn: (row) =>
      row.tags.find((tag) => tag.Key === "product_name")?.Value || "",
    id: "product_name",
    cell: ({ row }) => (
      <div className="hidden md:block">{row.getValue("product_name")}</div>
    ),
  },
  {
    header: () => <div className="hidden md:block">Application Name</div>,
    accessorFn: (row) =>
      row.tags.find((tag) => tag.Key === "application_name")?.Value || "",
    id: "application_name",
    cell: ({ row }) => (
      <div className="hidden md:block">{row.getValue("application_name")}</div>
    ),
  },
];
