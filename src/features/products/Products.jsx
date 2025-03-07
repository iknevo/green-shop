import ProductsAside from "./ProductsAside";
import ProductsContainer from "./ProductsContainer";

export default function Products() {
  return (
    <>
      <h2 className="text-primary mt-10 text-center text-9xl font-bold tracking-wider uppercase">
        Our products
      </h2>
      <div className="mt-30 mb-10 grid grid-cols-4 gap-x-10 gap-y-40">
        <ProductsAside />
        <ProductsContainer />
      </div>
    </>
  );
}
