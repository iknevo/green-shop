import { Link } from "react-router";
import UserAvatar from "../../../features/account/UserAvatar";
import { useUser } from "../../../features/authentication/useUser";
import CartButton from "../../../features/cart/CartButton";
import LoginButton from "../../buttons/LoginButton";
import Loader2 from "../../Loader2";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    <header className="border-primary/50/50 border-primary/50 sticky top-0 z-50 flex h-30 items-center justify-between border-b-[0.3px] bg-white/50 py-7 backdrop-blur-3xl">
      <Link to="/">
        <Logo />
      </Link>

      <HeaderNav />

      <HeaderButtons>
        <CartButton />
        {isLoading ? (
          <Loader2 />
        ) : user ? (
          <UserAvatar user={user} />
        ) : (
          <LoginButton />
        )}
      </HeaderButtons>
    </header>
  );
}
