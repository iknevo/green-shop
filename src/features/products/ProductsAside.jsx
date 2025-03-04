import { getCategories, getSizes } from "../../utils/helpers";
import saleImage from "./../../assets/images/sale.png";
import Loader from "./../../ui/Loader";
import AsideItem from "./AsideItem";
import ListItem from "./ListItem";
import { useProducts } from "./useProducts";

export default function ProductsAside() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Loader />;
  const categories = getCategories(products);
  const sizes = getSizes(products);

  return (
    <aside className="bg-grey-light space-y-15 rounded-xl">
      <AsideItem title="Categories">
        <ul className="flex flex-col gap-6">
          {categories.map((category) => (
            <ListItem data={category} key={category.name + Math.random()} />
          ))}
        </ul>
      </AsideItem>
      <AsideItem title="Price Range">price range</AsideItem>
      <AsideItem title="Size">
        <ul className="flex flex-col gap-6">
          {sizes.map((size) => (
            <ListItem data={size} key={size.name + Math.random()} />
          ))}
        </ul>
      </AsideItem>
      <div>
        <img src={saleImage} alt="" />
      </div>
    </aside>
  );
}

// function CategoryItem({ category }) {
//   return (
//     <li className="flex items-center justify-between font-medium">
//       <span>{category.name}</span>
//       <span>({category.count})</span>
//     </li>
//   );
// }
