import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import reportWebVitals from "./reportWebVitals";
import { AxiosProvider } from "./context/AxiosContext";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";  

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AxiosProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AxiosProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
