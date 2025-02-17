import { Link } from "react-router";
import { LoginIcon } from "../icons";
import Button from "./Button";
import CartButton from "./CartButton";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-primary/50 flex items-center justify-between border-b-[0.3px] pb-4">
      <Link to="/">
        <Logo />
      </Link>
      <HeaderNav />
      <div className="flex items-center justify-center space-x-10">
        <CartButton />
        <Button>
          <LoginIcon className="h-5 w-5" />
          <span>Login</span>
        </Button>
      </div>
    </header>
  );
}
