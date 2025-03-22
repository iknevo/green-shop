import AccoutContainer from "./AccountContainer";
import AccountAside from "./AccoutAside";

export default function AccountLayout() {
  return (
    <div className="mt-30 mb-10 grid grid-cols-4 items-start gap-x-10 gap-y-40">
      <AccountAside />
      <AccoutContainer />
    </div>
  );
}
