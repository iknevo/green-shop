import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import myRouter from "./Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

// Lenis scroll configuration component
function SmoothScrollConfig() {
  const lenis = useLenis();

  useEffect(() => {
    // Stop scrolling when window is resized for better performance
    function handleResize() {
      if (lenis) lenis.stop();

      // Resume scrolling after resize completes
      setTimeout(() => {
        if (lenis) lenis.start();
      }, 100);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [lenis]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Improved easing function
          smoothTouch: false, // Disable on touch devices for better performance
          touchMultiplier: 2,
          wheelMultiplier: 1.2,
          infinite: false,
        }}
      >
        <SmoothScrollConfig />
        <RouterProvider router={myRouter} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ marginLeft: "50px" }}
          toastOptions={{
            success: {
              duration: 3 * 1000,
            },
            error: {
              duration: 5 * 1000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "700px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-light)",
              color: "var(--color-grey-dark)",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactLenis>
    </QueryClientProvider>
  );
}
