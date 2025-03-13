import { useLayoutEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { Footer, Header } from "../ui";

export default function DefaultLayout() {
  const myRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    myRef.current.scrollIntoView(true);
  }, [pathname]);

  return (
    <div className="px-30" ref={myRef}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
