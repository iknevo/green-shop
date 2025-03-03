import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductItem from "./ProductItem";
// import ProductsContainer from "./ProductsContainer";
import { useProducts } from "./useProducts";

export default function Products() {
  const { products, isLoadingProducts, count } = useProducts();
  if (isLoadingProducts) {
    return <div className="col-span-3">{isLoadingProducts && <Loader />}</div>;
  }
  return (
    <>
      <h2 className="text-primary mt-10 text-center text-9xl font-bold tracking-wider uppercase">
        Our products
      </h2>
      <div className="mt-30 mb-10 grid grid-cols-4 gap-x-10 gap-y-40">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
        <div className="col-span-4">
          <Pagination numResults={count} />
        </div>
      </div>
    </>
  );
}
