import { Link } from "react-router-dom";
import MainNav from "./MainNav";
const Header = () => {
  return (
    <div className="border-b-2 border-b-slate-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="tracking-tight text-3xl font-bold text-slate-500"
        >
          Bikewise
        </Link>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
