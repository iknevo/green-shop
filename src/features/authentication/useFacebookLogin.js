import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { facebookLogin as facebookLoginApi } from "../../services/apiAuth";

export function useFacebookLogin() {
  const { mutate: facebookLogin, isPending } = useMutation({
    mutationFn: facebookLoginApi,
    onError: (error) => {
      console.error(error.message);
      toast.error(error.message);
    },
  });
  return { facebookLogin, isPending };
}
