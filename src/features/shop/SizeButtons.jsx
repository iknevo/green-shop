/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import SizeButton from "./SizeButton";

export default function SizeButtons({ product }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [size, setSize] = useState(
    searchParams.get("size")
      ? searchParams.get("size")
      : product.sizes.includes("S")
        ? "S"
        : product.sizes.at(0),
  );

  useEffect(() => {
    searchParams.set("size", size);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, size]);

  function handleSelectSize(e) {
    setSize(e.target.textContent);
  }

  return (
    <div className="py-4">
      <span className="mb-6 block text-2xl font-semibold">Available Sizes</span>
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
  );
}
