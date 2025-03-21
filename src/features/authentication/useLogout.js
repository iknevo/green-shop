import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/home", { replace: true });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { logout, isPending };
}
