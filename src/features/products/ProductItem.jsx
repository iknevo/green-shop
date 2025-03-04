import { formatCurrency } from "../../utils/helpers";
import "./ProductItem.scss";
/* eslint-disable react/prop-types */
export default function ProductItem({ product }) {
  const { price, discount } = product;
  const oldPrice = price + discount;
  const hasDiscount = discount > 0;
  const discountPercentage = Math.round((discount / oldPrice) * 100) + "%";
  return (
    <div className="product_item relative cursor-pointer space-y-10 p-4 pt-16 shadow-xs">
      {hasDiscount && (
        <div className="tag bg-primary absolute top-8 left-0 px-4 py-2 font-semibold text-white uppercase">
          {discountPercentage} Off
        </div>
      )}
      <div>
        <img
          className="aspect-square w-full object-cover object-center"
          src={product.imageUrl}
          alt={`${product.name} image`}
        />
      </div>
      <div className="px-5">
        <p className="mb-2 text-3xl font-semibold">{product.name}</p>
        <div className="flex gap-4 text-3xl">
          <span className="text-primary font-bold">
            {formatCurrency(price)}
          </span>
          {hasDiscount && (
            <span className="text-grey-light-2 font-bold line-through">
              {formatCurrency(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
