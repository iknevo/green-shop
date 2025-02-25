import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
export default function ProductItem({ product }) {
  return (
    <div className="space-y-10">
      <img
        className="aspect-square w-full object-cover object-center"
        src={product.imageUrl}
        alt={`${product.name} image`}
      />
      <div className="px-5">
        <p className="text-2xl font-semibold">{product.name}</p>
        <span className="text-primary font-bold">
          {formatCurrency(product.price)}
        </span>
      </div>
    </div>
  );
}
