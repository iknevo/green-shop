import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from "react-router";
import Logout from "./../authentication/Logout.jsx";
import "./AccountAside.scss";

export default function AccountAside() {
  return (
    <aside className="account-aside">
      <h1 className="mb-12 pl-8 text-4xl font-semibold">My Account</h1>

      <ul>
        <li>
          <NavLink to="details">
            <HiOutlineUserCircle />
            <span>Account Details</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="password">
            <RiLockPasswordLine />
            <span>Change Password</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="orders">
            <FiShoppingCart />
            <span>My Orders</span>
          </NavLink>
        </li>
      </ul>
      <Logout />
    </aside>
  );
}
