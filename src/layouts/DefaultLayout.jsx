import { Outlet } from "react-router";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  return (
    <div className="px-30 pt-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
