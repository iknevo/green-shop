import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
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
    if (searchParams.get("minPrice"))
      setMinPrice(+searchParams.get("minPrice"));
    if (searchParams.get("maxPrice"))
      setMaxPrice(+searchParams.get("maxPrice"));
  }, [searchParams]);

  function handleChange(_, newValue) {
    setMinPrice(newValue.at(0));
    setMaxPrice(newValue.at(1));
  }

  function handleFilter() {
    searchParams.set("minPrice", minPrice);
    setSearchParams(searchParams);
    searchParams.set("maxPrice", maxPrice);
    setSearchParams(searchParams);
  }

  function handleReset() {
    searchParams.set("minPrice", PRODUCTS_MIN_PRICE);
    searchParams.set("maxPrice", PRODUCTS_MAX_PRICE);
    setSearchParams(searchParams);
  }

  return (
    <>
      <Box sx={{ width: 250, color: "#46a358" }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={[minPrice, maxPrice]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={1}
          max={1000}
          color="#46a358"
        />
        <span className="font-semibold text-black">
          Price:{" "}
          <span className="text-primary">
            {minPrice}$ &mdash; {maxPrice}$
          </span>
        </span>
      </Box>
      <Button onClick={handleFilter} className="mt-10 w-full rounded-xl pt-4">
        Filter Price
      </Button>
      <Button onClick={handleReset} className="mt-4 w-full rounded-xl pt-4">
        Reset Price
      </Button>
    </>
  );
}

function valuetext(value) {
  return `price ${value}`;
}
