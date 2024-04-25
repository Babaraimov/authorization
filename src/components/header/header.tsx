import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavLink to="/">home</NavLink>
      <NavLink to="/addProduct">addProduct</NavLink>
      <NavLink to="/editProduct">editProduct</NavLink>
    </div>
  );
}

export default Header;
