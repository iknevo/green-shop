import { CartIcon } from "../icons";

export default function CartButton() {
  return (
    <div className="flex items-center">
      <button className="relative cursor-pointer">
        <span className="leading-base bg-primary absolute -top-2 -right-4 flex aspect-square w-8 items-center justify-center rounded-full border-2 border-white text-sm leading-0 font-semibold text-white">
          6
        </span>
        <CartIcon />
      </button>
    </div>
  );
}
