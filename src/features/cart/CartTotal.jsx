import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../../redux/slices/cartSlice";
import Button from "../../ui/buttons/Button";
import LoaderMini from "../../ui/LoaderMini";
import { formatCurrency } from "../../utils/helpers";
import { useCoupon } from "./useCoupon";

export default function CartTotal() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const couponInputRef = useRef(null);

  const shippingCost = 30;
  const [couponCode, setCouponCode] = useState("");
  const { coupon, isLoading: isLoadingDiscount } = useCoupon(couponCode);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setDiscount(
      coupon ? (totalCartPrice + shippingCost) * (coupon.value / 100) : 0,
    );
  }, [coupon, totalCartPrice]);

  async function handleApplyCoupon(e) {
    e.preventDefault();
    const newCoupon = couponInputRef.current.value.trim();
    if (!newCoupon) return;
    setCouponCode(newCoupon);
  }
  return (
    <div>
      <div className="col-span-full grid grid-cols-subgrid border-b-1 border-gray-200 py-8 font-semibold">
        <span>Cart Totals</span>
      </div>

      <div className="py-4">
        <p className="mb-2 text-gray-400">Coupon</p>
        <form
          onSubmit={handleApplyCoupon}
          className="focus-within:ring-primary mb-9 rounded-lg transition-all duration-300 focus-within:ring-1"
        >
          <div className="border-primary flex overflow-hidden rounded-lg border-1">
            <input
              disabled={isLoadingDiscount}
              className="flex-1 bg-white p-4 shadow-sm focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
              type="text"
              placeholder="Enter your coupon ..."
              ref={couponInputRef}
            />
            <Button className="font-second bg-primary w-40 px-11 text-2xl font-bold tracking-wider text-white">
              <div>
                <span>{isLoadingDiscount ? <LoaderMini /> : "Apply"}</span>
              </div>
            </Button>
          </div>
        </form>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Subtotal</span>
            <span className="text-3xl font-semibold text-gray-600">
              {formatCurrency(totalCartPrice)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Shipping</span>
            <span className="text-3xl font-semibold text-gray-600">
              {formatCurrency(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-500">Coupon Discount</span>
            <span className="text-3xl font-semibold text-gray-600">
              (-) {formatCurrency(discount)}
            </span>
          </div>
          <div className="mt-8 flex justify-between">
            <span className="text-3xl font-bold text-gray-800">Total</span>
            <span className="text-primary text-3xl font-semibold">
              {formatCurrency(totalCartPrice + shippingCost - discount)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
