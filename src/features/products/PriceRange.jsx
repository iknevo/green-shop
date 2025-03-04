import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function PriceRange() {
  const [value, setValue] = useState([50, 200]);
  const [min, max] = value;

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200, color: "#46a358" }}>
      <Slider
        getAriaLabel={() => "Price Range"}
        value={value}
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
          {min}$ &mdash; {max}$
        </span>
      </span>
    </Box>
  );
}

function valuetext(value) {
  return `${value}°C`;
}
