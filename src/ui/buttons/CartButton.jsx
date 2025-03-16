import { useSelector } from "react-redux";
import { getCart } from "../../redux/cartSlice";
import { CartIcon } from "../icons";

export default function CartButton() {
  const cart = useSelector(getCart);
  console.log(cart);
  return (
    <div className="flex items-center">
      <button className="relative cursor-pointer">
        {cart.length > 0 && (
          <span className="leading-base bg-primary absolute -top-2 -right-4 flex aspect-square w-8 items-center justify-center rounded-full border-2 border-white text-sm leading-0 font-semibold text-white">
            {cart.length}
          </span>
        )}
        <CartIcon />
      </button>
    </div>
  );
}
