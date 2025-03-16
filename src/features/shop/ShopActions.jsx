/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { addItem, getQuantityById, removeItem } from "../../redux/cartSlice";
import { Button } from "../../ui";
import SizeButton from "./SizeButton";

export default function ShopActions({ product }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(+searchParams.get("quantity") || 1);
  const [size, setSize] = useState(
    searchParams.get("size")
      ? searchParams.get("size")
      : product.sizes.includes("S")
        ? "S"
        : product.sizes.at(0),
  );
  const [isLiked, setIsLiked] = useState(false);
  const currentQuantity = useSelector(getQuantityById(product.id));
  const isInCart = currentQuantity > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    searchParams.set("quantity", quantity);
    searchParams.set("size", size);
    setSearchParams(searchParams);
  }, [quantity, searchParams, size, setSearchParams]);

  function handleSelectSize(e) {
    setSize(e.target.textContent);
  }

  function quantityInc() {
    if (quantity < product.inStock) {
      setQuantity((quantity) => quantity + 1);
    }
  }

  function quantityDec() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  }

  function handleLike() {
    setIsLiked((liked) => !liked);
  }

  function handleAddToCart() {
    const newItem = {
      id: product.id,
      name: product.name,
      sku: product.sku,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity,
      total: product.price * quantity,
      size,
    };
    if (isInCart) return;
    dispatch(addItem(newItem));
  }

  function handleRemoveFromCart() {
    if (isInCart) {
      dispatch(removeItem(product.id));
    }
  }

  return (
    <>
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
          {/*  */}
          {isInCart ? (
            <div>
              <Button
                onClick={handleRemoveFromCart}
                className="bg-primary border-primary gap-4 rounded-lg border-2 px-12 py-4 font-semibold text-white uppercase"
              >
                <span>Remove from cart</span>
                <RiDeleteBin6Line />
              </Button>
            </div>
          ) : (
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
                <Button
                  onClick={handleAddToCart}
                  className="text-primary border-primary rounded-lg border-2 px-12 py-4 font-semibold uppercase"
                >
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
          )}
          {/*  */}
        </div>
        <div className="flex flex-col gap-4 py-8 font-semibold">
          {product.sku && <span>{product.sku}</span>}
          {product.category && (
            <div>
              <span className="text-gray-500">Category : </span>
              {product.category}
            </div>
          )}
          {product.tags && (
            <div className="flex gap-2">
              <span className="text-gray-500">Tags : </span>
              <div className="flex gap-2">
                {product.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag} {i + 1 !== product.tags.length && ","}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
