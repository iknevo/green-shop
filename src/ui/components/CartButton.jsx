import { CartIcon } from "../icons";

export default function CartButton() {
  return (
    <div className="flex items-center">
      <button className="relative cursor-pointer">
        <span className="bg-primary leading-base absolute -top-2 -right-4 flex aspect-square w-8 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white">
          6
        </span>
        <CartIcon />
      </button>
    </div>
  );
}
