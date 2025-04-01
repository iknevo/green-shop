// import { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi2";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { getCart, setCart } from "../../redux/slices/cartSlice";
import useCartStore from "../../zustand/CartStore";

export default function CartButton() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const cart = useSelector(getCart);
  const cart = useCartStore((state) => state.cart);
  // console.log(cart);
  // const [, setStorageCart] = useLocalStorage([], "cart");

  // useEffect(() => {
  //   dispatch(setCart(cart));
  //   setStorageCart(cart);
  // }, [cart, dispatch, setStorageCart]);

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
