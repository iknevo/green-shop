import { Outlet } from "react-router";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  return (
    <div className="px-20 py-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
