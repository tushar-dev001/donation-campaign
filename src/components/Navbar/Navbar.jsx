import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-orange-400 text-white font-semibold text-md underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
          <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-orange-400 text-white font-semibold text-md underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-orange-400 text-white font-semibold text-md underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
