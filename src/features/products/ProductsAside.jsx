import AsideFilter from "../../components/AsideFilter";
import { sale } from "./../../assets";
import AsideItem from "./AsideItem";
import PriceRange from "./PriceRange";

export default function ProductsAside() {
  return (
    <aside className="bg-grey-light space-y-15">
      <AsideItem title="Categories">
        <AsideFilter
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
        <AsideFilter
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
      <img src={sale} alt="super sale up to 75% off" />
    </aside>
  );
}
