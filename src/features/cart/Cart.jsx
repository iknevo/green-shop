import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { getCart } from "../../redux/slices/cartSlice";
import { Button } from "../../ui";
import BreadCrumbs from "../../ui/BreadCrumbs";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  console.log(cart);

  if (!cart.length)
    return (
      <div className="py-8">
        <BreadCrumbs>
          <Link className="font-bold" to="/home">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>Shopping Cart</span>
        </BreadCrumbs>
        <div className="flex flex-col items-center gap-10 py-16">
          <h1 className="text-primary text-center text-6xl font-semibold">
            Your Shopping Cart Is Empty!
          </h1>
          <Button
            onClick={() => navigate("/shop")}
            className="text-primary border-primary rounded-lg border-2 px-8 py-4 font-semibold"
          >
            Go To Shop
          </Button>
        </div>
      </div>
    );
  return (
    <div className="py-8">
      <BreadCrumbs>
        <Link className="font-bold" to="/home">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>Shopping Cart</span>
      </BreadCrumbs>
      <div className="grid grid-cols-[2fr_1fr] gap-x-16 py-16">
        <div className="">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            <div className="col-span-full grid grid-cols-subgrid border-b-1 border-gray-200 py-2 font-semibold">
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
        </div>
        <div className="bg-blue-500">s</div>
      </div>
    </div>
  );
}
