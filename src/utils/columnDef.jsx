export const columnsCerts = (onRowClick) => [
  {
    header: "Name",
    id: "name",
    accessorFn: (row) => {
      return row.name.split("/").slice(-4).join("/");
      // return row.name;
    },
    cell: ({ row }) => (
      <>
        <div
          className="block md:hidden text-blue-600 hover:underline cursor-pointer"
          onClick={() => {
            const rowData = row.original;
            console.log("Row Data:", rowData);
            onRowClick(rowData);
          }}
        >
          {row.getValue("name")}
        </div>
        <div className="hidden md:block">{row.getValue("name")}</div>
      </>
    ),
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
