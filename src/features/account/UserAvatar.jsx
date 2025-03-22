import { useNavigate } from "react-router";
import { useUser } from "../authentication/useUser";

export default function UserAvatar() {
  const navigate = useNavigate();
  const { user } = useUser();
  const avatarUrl = user?.user_metadata?.avatar_url || "/default-user.jpg";

  function handleClick() {
    navigate("account");
  }

  return (
    <button
      onClick={handleClick}
      className="ring-primary cursor-pointer rounded-full ring-3 transition-all duration-100 hover:ring-4"
    >
      <img className="aspect-square w-14 rounded-full" src={avatarUrl} />
    </button>
  );
}
