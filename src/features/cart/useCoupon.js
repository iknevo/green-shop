import { useQuery } from "@tanstack/react-query";
import { getCoupon } from "../../services/apiCoupones";

export function useCoupon(couponCode) {
  const {
    data: { data: coupon } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coupon", couponCode],
    queryFn: () => getCoupon(couponCode),
    enabled: !!couponCode,
  });

  return { coupon, error, isLoading };
}
