import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactLenis } from "lenis/react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import myRouter from "./Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ duration: 1 }}>
        <RouterProvider router={myRouter} />
        <Toaster
          position="top-left"
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
