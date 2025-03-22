/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import Loader from "./Loader.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/home", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );

  if (isAuthenticated) return children;
}
