import { Outlet } from "react-router";

export default function AccoutContainer() {
  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-x-16 gap-y-30">
        <Outlet />
      </div>
    </>
  );
}
