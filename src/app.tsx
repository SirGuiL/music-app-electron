import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home";
import { Sidebar } from "./components/Sidebar";

const root = createRoot(document.body);
root.render(
  <div className="container-main">
    <Sidebar />
    <Home />
  </div>
);
