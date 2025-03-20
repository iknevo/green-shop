import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { getCart } from "../../redux/slices/cartSlice";
import { Button, Loader } from "../../ui";
import BreadCrumbs from "../../ui/BreadCrumbs";
import { useShopProducts } from "../shop/useShopProducts.js";
import RelatedProducts from "./../shop/RelatedProducts.jsx";
import CartList from "./CartList.jsx";
import CartTotal from "./CartTotal.jsx";

export default function Cart() {
  const { shopProducts, isLoading: isLoadingProducts } = useShopProducts();
  const cart = useSelector(getCart);
  const navigate = useNavigate();
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
      <div className="grid grid-cols-[2fr_1fr] items-start gap-x-30 py-16">
        <CartList cart={cart} />
        <CartTotal />
      </div>
      <div className="py-16">
        {isLoadingProducts ? (
          <Loader />
        ) : (
          <RelatedProducts products={shopProducts} />
        )}
      </div>
    </div>
  );
}
