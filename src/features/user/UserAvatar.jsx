/* eslint-disable react/prop-types */
export default function UserAvatar({ user }) {
  const { avatar_url } = user.user_metadata;
  return (
    <button className="ring-primary cursor-pointer rounded-full ring-3 transition-all duration-100 hover:ring-4">
      <img
        className="aspect-square w-14 rounded-full"
        src={avatar_url || "default-user.jpg"}
        alt="Rounded avatar"
      />
    </button>
  );
}
