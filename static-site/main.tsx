import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CompressorLab } from "../app/components/CompressorLab";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompressorLab />
  </StrictMode>,
);
