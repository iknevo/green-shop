import CartItem from "./CartItem";

/* eslint-disable react/prop-types */
export default function CartList({ cart }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
      <div className="col-span-full grid grid-cols-subgrid border-b-1 border-gray-200 py-8 font-semibold">
        <span className="col-span-2">Products</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      <div className="col-span-full mt-4 grid grid-cols-subgrid gap-y-4">
        {cart.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
