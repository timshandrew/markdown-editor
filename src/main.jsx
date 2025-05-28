import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { initLocalStorage } from "./utils/localStorageUtils";

// Side effect import
import "./twMergeConfig.js";

// Done here rather than in useEffect of 'App' so we don't have to handle case of
// first render having no data in local storage.
initLocalStorage();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
