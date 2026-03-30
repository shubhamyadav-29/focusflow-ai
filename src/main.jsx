import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary"
ReactDom.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);

