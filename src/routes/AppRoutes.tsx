import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SuspenseFallback from "@/components/feedback/SuspenseFallback";
import SearchBikesPage from "@/pages/SearchBikesPage";
import Layout from "@/layouts/Layout";
import HomePage from "@/pages/HomePage";
// pages
// const MainLayout = lazy(() => import("@/layouts/Layout"));
// const Login = lazy(() => import("@/pages/Login"));
// const AddAdmin = lazy(() => import("@/pages/AddAdmin"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bikes" element={<SearchBikesPage />} />
        {/* if page not found */}
        <Route path="*" />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
