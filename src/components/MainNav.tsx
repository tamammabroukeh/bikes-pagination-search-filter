import { bikesRoute } from "@/routes/routes";
import { Link } from "react-router-dom";
const MainNav = () => {
  const linkClasses = "text-slate-500 text-lg font-semibold hover:bg-white";
  return (
    <span>
      <Link to={bikesRoute} className={linkClasses}>
        Search bikes
      </Link>
    </span>
  );
};

export default MainNav;
