import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

export default function ProductsContainer() {
  const { products, isLoading, count } = useProducts();
  if (isLoading) {
    return <div className="col-span-3">{isLoading && <Loader />}</div>;
  }
  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-x-16 gap-y-30">
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
