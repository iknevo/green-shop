import { Link } from "react-router";
import UserButton from "../../../features/account/UserButton";
import CartButton from "../../../features/cart/CartButton";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="border-primary/50/50 border-primary/50 sticky top-0 z-50 flex h-30 items-center justify-between border-b-[0.3px] bg-white/50 py-7 backdrop-blur-3xl">
      <Link to="/">
        <Logo />
      </Link>

      <HeaderNav />

      <HeaderButtons>
        <CartButton />
        <UserButton />
      </HeaderButtons>
    </header>
  );
}
