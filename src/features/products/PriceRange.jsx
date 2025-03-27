import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useSearchParams } from "react-router";
import { Button } from "../../ui";
import { PRODUCTS_MAX_PRICE, PRODUCTS_MIN_PRICE } from "../../utils/constants";

export default function PriceRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(
    +searchParams.get("minPrice") || PRODUCTS_MIN_PRICE,
  );
  const [maxPrice, setMaxPrice] = useState(
    +searchParams.get("maxPrice") || PRODUCTS_MAX_PRICE,
  );

  useEffect(() => {
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");

    if (minPriceParam) setMinPrice(+minPriceParam);
    if (maxPriceParam) setMaxPrice(+maxPriceParam);
  }, [searchParams]);

  function handleChange(_, newValue) {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  }

  function handleFilter() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("minPrice", minPrice);
    newParams.set("maxPrice", maxPrice);

    newParams.set("preventScroll", true);
    setSearchParams(newParams);
  }

  function handleReset() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("minPrice", PRODUCTS_MIN_PRICE);
    newParams.set("maxPrice", PRODUCTS_MAX_PRICE);
    newParams.set("preventScroll", true);
    setSearchParams(newParams);

    setMinPrice(PRODUCTS_MIN_PRICE);
    setMaxPrice(PRODUCTS_MAX_PRICE);
  }

  function handlePrice(direction) {
    if (direction === "inc") {
      setMinPrice((price) => price + 1);
    }
    if (direction === "dec") {
      setMinPrice((price) => price - 1);
    }
  }

  // The JSX return remains unchanged as requested
  return (
    <>
      <Box sx={{ width: 250, color: "#46a358" }}>
        <div className="mb-6 flex items-center gap-4">
          <button onClick={() => handlePrice("dec")}>
            <FaMinusCircle className="w-8 cursor-pointer text-5xl" />
          </button>
          <Slider
            getAriaLabel={() => "Price Range"}
            value={[minPrice, maxPrice]}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            min={1}
            max={1000}
            color="#46a358"
          />
          <button onClick={() => handlePrice("inc")}>
            <FaPlusCircle className="w-8 cursor-pointer text-5xl" />
          </button>
        </div>
        <span className="text-primary block w-full text-center text-3xl font-bold">
          {minPrice}$ &mdash; {maxPrice}$
        </span>
      </Box>
      <Button
        onClick={handleFilter}
        className="bg-primary mt-10 w-full rounded-xl pt-4 text-white"
      >
        Filter Price
      </Button>
      <Button
        onClick={handleReset}
        className="bg-primary mt-4 w-full rounded-xl pt-4 text-white"
      >
        Reset Price
      </Button>
    </>
  );
}

function valuetext(value) {
  return `$${value}`;
}
