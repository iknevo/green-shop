import { HiShoppingCart } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getCart } from "../../redux/slices/cartSlice";

export default function CartButton() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/shop/cart")}
      className="relative cursor-pointer"
    >
      {cart.length > 0 && (
        <span className="leading-base bg-primary absolute -top-2 -right-4 flex aspect-square w-8 items-center justify-center rounded-full border-2 border-white text-sm leading-0 font-semibold text-white">
          {cart.length}
        </span>
      )}
      <HiShoppingCart className="text-primary text-5xl" />
    </button>
  );
}
