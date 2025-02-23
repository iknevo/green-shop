import Loader from "../../ui/Loader";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

export default function ProductsContainer() {
  const { products, isLoadingProducts } = useProducts();
  if (isLoadingProducts) {
    return <div className="col-span-3">{isLoadingProducts && <Loader />}</div>;
  }
  return (
    <div className="col-span-3 grid grid-cols-3 gap-y-10">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
