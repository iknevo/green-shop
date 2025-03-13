import { Link, useParams } from "react-router";
import Pagination from "../../ui/Pagination.jsx";
import BreadCrumbs from "./../../ui/BreadCrumbs.jsx";
import Loader from "./../../ui/Loader.jsx";
import ProductItem from "./../products/ProductItem.jsx";
import ShopItem from "./ShopItem.jsx";
import { useShopProducts } from "./useShopProducts.js";

export default function ShopContainer() {
  const { shopProducts, isLoading, count } = useShopProducts();
  let { productId } = useParams();
  if (isLoading && !productId)
    return (
      <div className="py-30">
        <Loader />
      </div>
    );
  if (!productId)
    return (
      <>
        <BreadCrumbs>
          <Link className="font-bold" to="/home">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
        </BreadCrumbs>

        <h2 className="text-primary mt-10 text-center text-9xl font-bold tracking-wider uppercase">
          Shop
        </h2>
        <div className="grid grid-cols-4 gap-x-16 gap-y-30 py-20">
          {shopProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
        <Pagination numResults={count} shop={true} />
      </>
    );

  if (productId) {
    return (
      <>
        <BreadCrumbs>
          <Link className="font-bold" to="/home">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
        </BreadCrumbs>
        <ShopItem />
      </>
    );
  }
}
