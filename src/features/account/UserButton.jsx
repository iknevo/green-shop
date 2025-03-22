import { LoginButton } from "../../ui";
import Loader2 from "../../ui/Loader2";
import { useUser } from "../authentication/useUser";
import UserAvatar from "./UserAvatar";

export default function UserButton() {
  const { user, isLoading } = useUser();
  if (isLoading)
    return (
      <div>
        <Loader2 />
      </div>
    );
  return <div>{user ? <UserAvatar /> : <LoginButton />}</div>;
}
