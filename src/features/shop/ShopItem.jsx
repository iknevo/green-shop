import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Error from "../../ui/Error.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useProduct } from "../products/useProduct";
import Loader from "./../../ui/Loader.jsx";
import SizeButton from "./SizeButton.jsx";

export default function ShopItem() {
  const { productId } = useParams();
  const { product, isLoading, error } = useProduct(productId);
  const [size, setSize] = useState("S");

  useEffect(() => {
    if (product) {
      setSize(product.sizes.includes("S") ? "S" : product.sizes.at(0));
    }
  }, [product]);

  function handleSelectSize(e) {
    setSize(e.target.textContent);
  }

  console.log(product);
  if (error) {
    return <Error text={error.message} />;
  }
  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-2 items-start py-12">
      <div className="flex items-start justify-center">
        <img
          className="aspect-square w-[80%] object-cover object-center"
          src={product.imageUrl}
          alt={`${product.name} image`}
        />
      </div>
      <div>
        <div className="flex flex-col gap-4 border-b-1 border-gray-300 pb-4">
          <h2 className="text-5xl font-bold">{product.name}</h2>
          <div className="flex justify-between">
            <span className="text-primary text-4xl font-bold">
              {formatCurrency(product.price)}
            </span>
            <span>stars</span>
          </div>
        </div>
        <div className="py-4">
          <span className="mb-2 block text-2xl font-semibold">
            Description :
          </span>
          <p className="text-gray-500">{product.description}</p>
        </div>
        <div className="py-4">
          <span className="mb-6 block text-2xl font-semibold">
            Available Sizes
          </span>
          <div className="flex items-center gap-3">
            <SizeButton
              size="S"
              active={size === "S"}
              disabled={!product.sizes.includes("S")}
              onClick={handleSelectSize}
            />
            <SizeButton
              size="M"
              active={size === "M"}
              disabled={!product.sizes.includes("M")}
              onClick={handleSelectSize}
            />
            <SizeButton
              size="L"
              active={size === "L"}
              disabled={!product.sizes.includes("L")}
              onClick={handleSelectSize}
            />
            <SizeButton
              size="XL"
              active={size === "XL"}
              disabled={!product.sizes.includes("XL")}
              onClick={handleSelectSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
