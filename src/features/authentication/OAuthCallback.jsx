import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "../../services/supabase";
import Loader from "../../ui/Loader";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Handle the OAuth callback
    const handleAuthCallback = async () => {
      // Get the session from Supabase
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error getting session:", error.message);
        navigate("/home", { replace: true });
        return;
      }

      if (data?.session) {
        // We have a session, get the user data
        const { data: userData, error: userError } =
          await supabase.auth.getUser();

        if (userError) {
          console.error("Error getting user:", userError.message);
          navigate("/home", { replace: true });
          return;
        }

        if (userData?.user) {
          // Update the React Query cache with the user
          queryClient.setQueryData(["user"], userData.user);

          // Navigate to the account page or home
          navigate("/home", { replace: true });
        }
      } else {
        // No session found, go back to home
        navigate("/home", { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate, queryClient]);

  // Show a loader while processing
  return (
    <div className="flex h-dvh items-center justify-center bg-gray-50">
      <Loader />
    </div>
  );
}
