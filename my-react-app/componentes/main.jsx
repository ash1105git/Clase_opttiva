import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import Hola from ".componentes/Hola.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>Hola</StrictMode>
)