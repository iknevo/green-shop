import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

export default function ProductsContainer() {
  const { products, isLoadingProducts, count } = useProducts();
  if (isLoadingProducts) {
    return <div className="col-span-3">{isLoadingProducts && <Loader />}</div>;
  }
  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-y-10">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        <div className="col-span-3 mt-16">
          <Pagination numResults={count} />
        </div>
      </div>
    </>
  );
}
