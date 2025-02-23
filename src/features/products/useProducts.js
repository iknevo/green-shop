import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

export function useProducts() {
  const {
    data: products,
    error,
    isLoading: isLoadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { products, isLoadingProducts, error };
}
