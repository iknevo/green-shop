import { NavLink } from "react-router";
import Logout from "./../authentication/Logout.jsx";

export default function AccountAside() {
  return (
    <aside className="bg-grey-light space-y-15">
      <h1>My Account</h1>

      <ul>
        <li>
          <NavLink to="details">Account Details</NavLink>
        </li>
        <li>
          <NavLink to="address">Billing Address</NavLink>
        </li>
        <li>
          <NavLink to="orders">My Orders</NavLink>
        </li>
      </ul>
      <Logout />
    </aside>
  );
}
