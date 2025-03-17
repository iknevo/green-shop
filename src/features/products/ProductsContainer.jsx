import { useSearchParams } from "react-router";
import Empty from "../../components/Empty";
import ProductsFilter from "../../components/ProductsFilter";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";

export default function ProductsContainer() {
  const [searchParams] = useSearchParams();
  const sizeValue = searchParams.get("size") || "all";

  const { products, isLoading, count } = useProducts();
  if (isLoading) {
    return <div className="col-span-3 pt-30">{isLoading && <Loader />}</div>;
  }
  let displayProducts =
    sizeValue === "all"
      ? products
      : products?.filter((product) => product.sizes.includes(sizeValue));

  if (!displayProducts?.length) return <Empty resourceName="products" />;
  return (
    <>
      <div className="col-span-3 grid grid-cols-3 gap-x-16 gap-y-30">
        <div className="col-span-3 -mb-20 flex items-center justify-end">
          <ProductsFilter
            options={[
              { value: "all", label: "All" },
              { value: "no-discount", label: "No discount" },
              { value: "with-discount", label: "With discount" },
            ]}
          />
        </div>
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
