import Filter from "../../components/Filter";
import saleImage from "./../../assets/images/sale.png";
import AsideItem from "./AsideItem";
import PriceRange from "./PriceRange";

export default function ProductsAside() {
  return (
    <aside className="bg-grey-light space-y-15 rounded-xl">
      <AsideItem title="Categories">
        <Filter
          filterField="category"
          options={[
            { label: "ALL PLANTS", value: "all" },
            { label: "OUTDOOR PLANTS", value: "Outdoor Plants" },
            { label: "POTTER PLANTS", value: "Potter Plants" },
            { label: "INDOOR PLANTS", value: "Indoor Plants" },
          ]}
        />
      </AsideItem>
      <AsideItem title="Price Range">
        <PriceRange />
      </AsideItem>
      <AsideItem title="Size">
        <Filter
          filterField="size"
          options={[
            { label: "All", value: "all" },
            { label: "Small", value: "S" },
            { label: "Medium", value: "M" },
            { label: "Large", value: "L" },
            { label: "Extra Large", value: "XL" },
          ]}
        />
      </AsideItem>
      <div className="">
        <img src={saleImage} alt="super sale up to 75% off" />
      </div>
    </aside>
  );
}
