import { NavLink } from "react-router";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import "./HeaderNav.scss";

export default function HeaderNav() {
  const scrollTop = useScrollToTop();
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink onClick={scrollTop} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={scrollTop} to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink onClick={scrollTop} to="/blogs">
            Blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
