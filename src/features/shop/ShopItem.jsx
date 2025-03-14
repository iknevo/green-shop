import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useParams } from "react-router";
import Error from "../../ui/Error.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useProduct } from "../products/useProduct";
import { Button, Loader } from "./../../ui";
import SizeButton from "./SizeButton.jsx";

export default function ShopItem() {
  const { productId } = useParams();
  const { product, isLoading, error } = useProduct(productId);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (product) {
      setSize(product.sizes.includes("S") ? "S" : product.sizes.at(0));
    }
  }, [product]);

  function handleSelectSize(e) {
    setSize(e.target.textContent);
  }

  function quantityInc() {
    if (quantity < product.inStock) setQuantity((quantity) => quantity + 1);
  }

  function quantityDec() {
    if (quantity > 1) setQuantity((quantity) => quantity - 1);
  }

  function handleLike() {
    setIsLiked((liked) => !liked);
  }

  if (error) {
    return <Error text={error.message} />;
  }
  if (isLoading) return <Loader />;

  const discountPercentage =
    Math.round((product.discount / (product.price + product.discount)) * 100) +
    "%";

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
          <h2 className="flex items-center gap-8 text-5xl font-bold">
            <span>{product.name}</span>

            {product.discount > 0 && (
              <span className="text-primary text-3xl font-semibold uppercase">
                {discountPercentage} Off
              </span>
            )}
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <span className="text-primary text-4xl font-bold">
                {formatCurrency(product.price)}
              </span>

              {product.discount > 0 && (
                <span className="text-grey-light-2 text-3xl font-semibold line-through">
                  {formatCurrency(product.price + product.discount)}
                </span>
              )}
            </div>
            <Rating
              name="size-large"
              defaultValue={product.stars}
              size="large"
              readOnly
            />
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
        <div className="pt-8">
          <p className="text-3xl font-bold text-gray-600">
            {product.inStock} items available in stock.
          </p>
          <div className="py-8">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-6">
                <Button
                  onClick={quantityDec}
                  className="bg-primary aspect-square w-14 rounded-full leading-0 text-white"
                >
                  <TiMinus className="text-3xl font-bold" />
                </Button>
                <div className="flex w-5 justify-center text-3xl font-bold">
                  <span>{quantity}</span>
                </div>
                <Button
                  onClick={quantityInc}
                  className="bg-primary aspect-square w-14 rounded-full leading-0 text-white"
                >
                  <TiPlus className="text-3xl font-bold" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-primary border-primary rounded-lg border-2 px-12 py-4 font-semibold text-white uppercase">
                  Buy Now
                </Button>
                <Button className="text-primary border-primary rounded-lg border-2 px-12 py-4 font-semibold uppercase">
                  Add To Cart
                </Button>
                <Button
                  onClick={handleLike}
                  className="text-primary border-primary rounded-lg border-2 text-4xl font-bold"
                >
                  {isLiked ? <FaHeart /> : <FaRegHeart />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
