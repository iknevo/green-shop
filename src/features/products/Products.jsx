import ProductsAside from "./ProductsAside";
import ProductsContainer from "./ProductsContainer";

export default function Products() {
  return (
    <div className="my-10 grid grid-cols-4 gap-x-10">
      <ProductsAside />
      <ProductsContainer />
    </div>
  );
}
