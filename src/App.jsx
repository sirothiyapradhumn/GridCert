import { mockCertData } from "../mock/mockData";
import CertGrid from "./container/certGrid/CertGrid";
import { columnsCerts } from "./utils/columnDef";

function App() {
  return (
    <div className="m-2.5">
      <CertGrid columns={columnsCerts} data={mockCertData}/>
    </div>
  );
}

export default App;
