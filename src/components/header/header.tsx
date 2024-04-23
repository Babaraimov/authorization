import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to="/">home</NavLink>
      <NavLink to="/addProduct">addProduct</NavLink>
      <NavLink to="/editProduct">editProduct</NavLink>
    </div>
  );
}

export default Header;
