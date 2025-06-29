import { useState } from "react";
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

function App() {
  const [project, setProject] = useState("project1");
  const [tables, setTables] = useState(["project1", "project2", "project3"]);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  return (
    <div className="m-2.5">
      <div className="flex justify-end mb-2">
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
      <CertGrid columns={columnsCerts(handleRowClick)} data={mockCertData} />
      <CertSheet open={open} setOpen={setOpen} selectedRow={selectedRow} />
    </div>
  );
}

export default App;
