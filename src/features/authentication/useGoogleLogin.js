import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { googleLogin as googleLoginApi } from "../../services/apiAuth";

export function useGoogleLogin() {
  const { mutate: googleLogin, isPending } = useMutation({
    mutationFn: googleLoginApi,
    onError: (error) => {
      console.error(error.message);
      toast.error(error.message);
    },
  });
  return { googleLogin, isPending };
}
