import { Link } from "react-router";
import CartButton from "../../buttons/CartButton";
import HeaderNav from "./HeaderNav";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import LoginButton from "../../buttons/LoginButton";

export default function Header() {
  return (
    <header className="border-primary/50 flex items-center justify-between border-b-[0.3px] pb-7">
      <Link to="/">
        <Logo />
      </Link>

      <HeaderNav />

      <HeaderButtons>
        <CartButton />
        <LoginButton />
      </HeaderButtons>
    </header>
  );
}
