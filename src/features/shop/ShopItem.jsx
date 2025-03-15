import { Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useNavigate, useParams } from "react-router";
import Error from "../../ui/Error.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useProduct } from "../products/useProduct";
import { Button, Loader } from "./../../ui";
import SizeButton from "./SizeButton.jsx";
import { useShopProducts } from "./useShopProducts.js";

export default function ShopItem() {
  const { shopProducts, isLoading: isLoadingProducts } = useShopProducts();
  const { productId } = useParams();
  const { product, isLoading: isLoadingProduct, error } = useProduct(productId);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(scrollAmount) {
    const newPosition = scrollPosition + scrollAmount;
    setScrollPosition(newPosition);
    scrollRef.current.scrollLeft = newPosition;
  }

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
  if (isLoadingProduct || isLoadingProducts) return <Loader />;
  // console.log(product.reviews);

  const discountPercentage =
    Math.round((product.discount / (product.price + product.discount)) * 100) +
    "%";

  return (
    <div>
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
        </div>
      </div>
      <div className="py-12">
        <h3 className="text-primary text-center text-5xl font-semibold uppercase">
          Reviews ( {product.reviews.length} )
        </h3>
        <div className="grid grid-cols-3 p-14">
          {product.reviews.map((review, i) => (
            <div className="flex flex-col gap-2 px-4 py-6" key={i}>
              <h4 className="text-3xl font-bold text-gray-500">
                {i + 1}. {review.name}
              </h4>
              <p className="pl-8 font-semibold">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8 pb-20">
        <h5 className="text-primary text-center text-5xl font-semibold uppercase">
          Products you may also like
        </h5>
        <div
          ref={scrollRef}
          className="flex flex-nowrap items-center gap-4 overflow-hidden scroll-smooth pt-8"
        >
          {shopProducts.map((item) => (
            <div
              onClick={() => navigate(`/shop/${item.id}`)}
              key={item.id}
              className={`${item.id === product.id ? "cursor-not-allowed" : "cursor-pointer"} grid w-[350px] shrink-0 grid-rows-[85%_15%] items-center justify-start self-stretch`}
            >
              <img src={item.imageUrl} alt={`${item.name} image`} />
              <div className="text-center">
                <h6 className="mb-2 text-3xl font-semibold">{item.name}</h6>
                <span className="text-primary text-3xl font-bold">
                  {formatCurrency(item.price)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-8 pt-8">
          <Button
            disabled={scrollPosition === 0}
            className="bg-primary rounded-md px-6 py-2 text-4xl text-white"
            onClick={() => handleScroll(-350)}
          >
            <FaArrowLeftLong />
          </Button>
          <Button
            disabled={scrollPosition === (shopProducts.length - 4) * 350}
            className="bg-primary rounded-md px-6 py-2 text-4xl text-white"
            onClick={() => handleScroll(350)}
          >
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
}
