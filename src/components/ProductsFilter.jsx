/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router";
import Button from "../ui/buttons/Button";

export default function ProductsFilter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("discount") || options.at(0).value;
  function handleClick(value) {
    searchParams.set("discount", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <div className="border-grey-light-1 flex items-center gap-2 rounded-md border-1 p-2">
      {options.map((option) => (
        <Button
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          className={`hover:not-disabled:bg-primary rounded-md transition-all duration-300 hover:not-disabled:text-white ${currentFilter === option.value ? "bg-primary text-white" : "bg-white text-black"}`}
          key={option.value}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
