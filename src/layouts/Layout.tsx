import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 py-10">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
