import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getProducts } from "../../services/apiProducts";
import { PRODUCTS_PER_PAGE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };

  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const {
    data: { data: products, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", page, filter],
    queryFn: () => getProducts({ filter, page }),
  });

  // prefetching
  const pagesCount = Math.ceil(count / PRODUCTS_PER_PAGE);
  if (page < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProducts({ page: page - 1 }),
    });
  }

  return { products, count, isLoading, error };
}
