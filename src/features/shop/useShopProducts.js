import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getShopProducts } from "../../services/apiProducts";
import { PRODUCTS_PER_SHOP } from "../../utils/constants";

export function useShopProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue };

  const minPriceValue = +searchParams.get("minPrice") || null;
  const maxPriceValue = +searchParams.get("maxPrice") || null;
  let priceFilter = { minPrice: minPriceValue, maxPrice: maxPriceValue };

  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const {
    data: { data: shopProducts, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["shopProducts", page, filter, priceFilter],
    queryFn: () => getShopProducts({ filter, page, priceFilter }),
  });

  // prefetching
  const pagesCount = Math.ceil(count / PRODUCTS_PER_SHOP);
  if (page < pagesCount) {
    queryClient.prefetchQuery({
      queryKey: ["shopProducts", page + 1, filter, priceFilter],
      queryFn: () => getShopProducts({ page: page + 1, filter, priceFilter }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["shopProducts", page - 1, filter, priceFilter],
      queryFn: () => getShopProducts({ page: page - 1, filter, priceFilter }),
    });
  }

  return { shopProducts, count, isLoading, error };
}
