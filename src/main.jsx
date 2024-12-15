import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./vendor/fonts/DMSans-Regular.ttf";
import "./vendor/fonts/DMSans-Italic.ttf";
import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
