import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css"
import Dashboard from "../pertemuan-5/pages/Dashboard";


createRoot(document.getElementById("root"))
    .render(
        <div >
      <Dashboard/>
        </div>
    )