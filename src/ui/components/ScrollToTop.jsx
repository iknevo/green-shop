import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  const myRef = useRef(null);

  useLayoutEffect(() => {
    const searchParams = new URLSearchParams(search);
    if (!searchParams.has("page")) {
      myRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname, search]);

  return <div ref={myRef} />;
};

export default ScrollToTop;
