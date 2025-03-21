/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { useUser } from "../features/authentication/useUser";
import Loader from "./Loader.jsx";

export default function ProtectedRoute({ children }) {
  const [, setSearchParams] = useSearchParams();
  // 1. load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) setSearchParams({ modal: "login" });
  }, [isAuthenticated, isLoading, setSearchParams]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}
