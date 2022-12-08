import logo from "../../assets/img/logo.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar_logo"></img>

      <div className="navbar_right">
        <Link to="/employee" className="navbar_right__link">
          Employees
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
