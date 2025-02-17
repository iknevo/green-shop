import { NavLink } from "react-router";
import "./HeaderNav.scss";

export default function HeaderNav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </ul>
    </nav>
  );
}
