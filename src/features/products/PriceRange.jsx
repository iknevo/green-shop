import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Button } from "../../ui";
import { getNumFromText } from "../../utils/helpers";

export default function PriceRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(+searchParams.get("minPrice") || 20);
  const [maxPrice, setMaxPrice] = useState(
    +searchParams.get("maxPrice") || 500,
  );

  // useEffect(() => {
  //   if (searchParams.get("minPrice"))
  //     setMinPrice(+searchParams.get("minPrice"));
  //   if (searchParams.get("maxPrice"))
  //     setMaxPrice(+searchParams.get("maxPrice"));
  // }, [searchParams]);

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

  return (
    <>
      <Box sx={{ width: 250, color: "#46a358" }}>
        <Slider
          getAriaLabel={() => "Price Range"}
          value={[minPrice, maxPrice]}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          min={20}
          max={500}
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
        Filter
      </Button>
    </>
  );
}

function valuetext(value) {
  return `price ${value}`;
}
