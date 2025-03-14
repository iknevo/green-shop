import { Outlet } from "react-router";
import { Footer, Header } from "../ui";
import ScrollToTop from "../ui/components/ScrollToTop";

export default function DefaultLayout() {
  return (
    <div className="px-30">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
