import { Outlet } from "react-router";
import useScrollToTop from "../hooks/useScrollToTop";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  useScrollToTop();
  return (
    <div className="px-30">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
