import { useParams } from "react-router";
import Error from "../../ui/Error.jsx";
import StarsRating from "../../ui/StarsRating.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import { useProduct } from "../products/useProduct";
import { Loader } from "./../../ui";
import ProductReviews from "./ProductReviews.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import ShopActions from "./ShopActions.jsx";
import SizeButtons from "./SizeButtons.jsx";
import { useShopProducts } from "./useShopProducts.js";

export default function ShopItem() {
  const { shopProducts, isLoading: isLoadingProducts } = useShopProducts();
  const { productId } = useParams();
  const { product, isLoading: isLoadingProduct, error } = useProduct(productId);

  if (error) {
    return <Error text={error.message} />;
  }
  if (isLoadingProduct || isLoadingProducts) return <Loader />;
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
              <StarsRating rate={product.stars} />
            </div>
          </div>
          <div className="py-4">
            <span className="mb-2 block text-2xl font-semibold">
              Description :
            </span>
            <p className="text-gray-500">{product.description}</p>
          </div>

          <SizeButtons product={product} />
          <ShopActions product={product} />
        </div>
      </div>
      <ProductReviews reviews={product.reviews} />
      <RelatedProducts shopProducts={shopProducts} currentProduct={product} />
    </div>
  );
}
