import { HiArrowRightOnRectangle } from "react-icons/hi2";
import LoaderMini from "../../ui/LoaderMini";
import { useLogout } from "./useLogout";

export default function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <button onClick={logout} disabled={isPending}>
      {isPending ? <LoaderMini /> : <HiArrowRightOnRectangle />}
    </button>
  );
}
