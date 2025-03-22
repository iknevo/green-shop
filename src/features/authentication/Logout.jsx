import { HiArrowRightOnRectangle } from "react-icons/hi2";
import LoaderMini from "../../ui/LoaderMini";
import { useLogout } from "./useLogout";

export default function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <button
      className="text-primary cursor-pointer pl-8"
      onClick={logout}
      disabled={isPending}
    >
      {isPending ? (
        <LoaderMini className="h-[1.5em] w-[1.5em]" />
      ) : (
        <div className="text-primary flex items-center gap-4 text-3xl font-semibold">
          <HiArrowRightOnRectangle className="h-[1.5em] w-[1.5em]" />
          <span>Logout</span>
        </div>
      )}
    </button>
  );
}
