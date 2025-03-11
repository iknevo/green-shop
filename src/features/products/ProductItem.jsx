import { useNavigate } from "react-router";
import Button from "../../ui/buttons/Button";
import { formatCurrency } from "../../utils/helpers";
import "./ProductItem.scss";
/* eslint-disable react/prop-types */
export default function ProductItem({ product }) {
  const { price, discount } = product;
  const navigate = useNavigate();
  const oldPrice = price + discount;
  const hasDiscount = discount > 0;
  const discountPercentage = Math.round((discount / oldPrice) * 100) + "%";

  function handleAddToCart() {
    navigate(`/shop/${product.id}`);
  }

  return (
    <div
      onClick={() => navigate(`/shop/${product.id}`)}
      className="product_item group relative cursor-pointer space-y-10 self-start overflow-hidden rounded-lg px-4 pt-16 pb-12 shadow-sm transition-all duration-300 hover:shadow-md"
    >
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
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-3xl">
            <span className="text-primary font-bold">
              {formatCurrency(price)}
            </span>
            {hasDiscount && (
              <span className="text-grey-light-2 font-semibold line-through">
                {formatCurrency(oldPrice)}
              </span>
            )}
          </div>
          <span className="bg-primary-light-2 rounded-2xl px-3 py-2 font-semibold text-white lowercase">
            {product.category.split(" ").at(0)}
          </span>
        </div>
      </div>
      <Button
        onClick={handleAddToCart}
        propagation={false}
        className="bg-primary hover:bg-primary-light-1 absolute -bottom-full left-1/2 w-full -translate-x-1/2 rounded-md py-4 text-white transition-all duration-300 group-hover:bottom-0"
      >
        Buy now
      </Button>
    </div>
  );
}
