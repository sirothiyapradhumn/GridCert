import { useMemo, useState } from "react";
import { mockCertData } from "../mock/mockData";
import CertGrid from "./container/certGrid/CertGrid";
import { columnsCerts } from "./utils/columnDef";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import CertSheet from "./container/certSheet/CertSheet";
import FilterDropdown from "./components/common/FilterDropdown";
import { getUniqueOptions } from "./utils/utils";

function App() {
  const [project, setProject] = useState("project1");
  const [tables, setTables] = useState(["project1", "project2", "project3"]);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [envFilter, setEnvFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');
  const [appFilter, setAppFilter] = useState('');

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const filteredData = useMemo(() => {
    return mockCertData.filter(row => {
      const tags = row.tags.reduce((acc, tag) => {
        acc[tag.Key] = tag.Value;
        return acc;
      }, {});
      const matchesEnv = !envFilter || envFilter === "ALL" ? true :  tags.env === envFilter;
      const matchesProduct = !productFilter || productFilter === "ALL" ? true : tags.product_name === productFilter;
      const matchesApp = !appFilter || appFilter === "ALL" ? true : tags.application_name === appFilter;
      return matchesEnv && matchesProduct && matchesApp;
    });
  }, [envFilter, productFilter, appFilter]);

  return (
    <div className="m-2.5">
      <div className="flex justify-end mb-2">
        <div className="md:flex space-x-2">
          <FilterDropdown
          label="Env"
          value={envFilter}
          onChange={setEnvFilter}
          options={getUniqueOptions(mockCertData, 'env')}
        />
        <FilterDropdown
          label="Product"
          value={productFilter}
          onChange={setProductFilter}
          options={getUniqueOptions(mockCertData, 'product_name')}
        />
        <FilterDropdown
          label="Application"
          value={appFilter}
          onChange={setAppFilter}
          options={getUniqueOptions(mockCertData, 'application_name')}
        />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Project <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select Project</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={project} onValueChange={setProject}>
              {tables.map((column) => {
                return (
                  <DropdownMenuRadioItem
                    key={column}
                    value={column}
                    className="capitalize"
                  >
                    {column}
                  </DropdownMenuRadioItem>
                );
              })}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <CertGrid columns={columnsCerts(handleRowClick)} data={filteredData} />
      <CertSheet open={open} setOpen={setOpen} selectedRow={selectedRow} />
    </div>
  );
}

export default App;
