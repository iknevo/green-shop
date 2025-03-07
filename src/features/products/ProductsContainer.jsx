import { useSearchParams } from "react-router";
import Empry from "../../components/Empry";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

export default function ProductsContainer() {
  const [searchParams] = useSearchParams();
  const sizeValue = searchParams.get("size") || "all";

  const { products, isLoading, count } = useProducts();
  if (isLoading) {
    return <div className="col-span-3">{isLoading && <Loader />}</div>;
  }
  const displayProducts =
    sizeValue === "all"
      ? products
      : products?.filter((product) => product.sizes.includes(sizeValue));

  if (!displayProducts?.length) return <Empry resourceName="products" />;
  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-x-16 gap-y-30">
        {displayProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}

        <div className="col-span-3">
          <Pagination numResults={count} />
        </div>
      </div>
    </>
  );
}
