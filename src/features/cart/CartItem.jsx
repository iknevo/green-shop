import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

import {
  HiMiniMinusCircle,
  HiMiniPlusCircle,
  HiOutlineTrash,
} from "react-icons/hi2";

import toast from "react-hot-toast";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "../../redux/slices/cartSlice";

/* eslint-disable react/prop-types */
export default function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleQuantityInc() {
    dispatch(increaseItemQuantity(product.id));
  }
  function handleQuantityDec() {
    dispatch(decreaseItemQuantity(product.id));
  }
  function handleDeleteItem() {
    dispatch(removeItem(product.id));
    toast.success("Removed");
  }

  return (
    <div className="col-span-full grid grid-cols-subgrid items-center rounded-md bg-gray-50">
      <div className="col-span-2 flex items-center gap-8">
        <img
          className="w-30"
          src={product.imageUrl}
          alt={`${product.name} image`}
        />
        <div>
          <h2 className="text-3xl font-[500]">{product.name}</h2>
          <p className="text-gray-500">{product.sku}</p>
        </div>
      </div>

      <span className="font-semibold text-gray-500">
        {formatCurrency(product.price)}
      </span>

      <div className="flex items-center gap-4">
        <button
          onClick={handleQuantityDec}
          disabled={product.quantity === 1}
          className="cursor-pointer disabled:cursor-not-allowed"
        >
          <HiMiniMinusCircle className="text-primary text-5xl" />
        </button>
        <div className="flex w-5 justify-center text-3xl font-semibold text-gray-500">
          <span>{product.quantity}</span>
        </div>
        <button
          onClick={handleQuantityInc}
          disabled={product.quantity === product.inStock}
          className="cursor-pointer disabled:cursor-not-allowed"
        >
          <HiMiniPlusCircle className="text-primary text-5xl" />
        </button>
      </div>
      <div className="flex items-center justify-between pr-12">
        <span className="font-semibold text-gray-500">
          {formatCurrency(product.total)}
        </span>
        <button className="cursor-pointer" onClick={handleDeleteItem}>
          <HiOutlineTrash className="text-4xl text-red-900" />
        </button>
      </div>
    </div>
  );
}
