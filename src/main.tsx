import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Router>
    <ToastContainer position="top-left" />
  </StrictMode>
);
