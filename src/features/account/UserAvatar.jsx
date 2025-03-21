/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";

export default function UserAvatar({ user }) {
  const navigate = useNavigate();
  const { avatar_url } = user.user_metadata;

  function handleClick() {
    navigate("account");
  }
  return (
    <button
      onClick={handleClick}
      className="ring-primary cursor-pointer rounded-full ring-3 transition-all duration-100 hover:ring-4"
    >
      <img
        className="aspect-square w-14 rounded-full"
        src={avatar_url || "default-user.jpg"}
        alt="user avatar"
      />
    </button>
  );
}
