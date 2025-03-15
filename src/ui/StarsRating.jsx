/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";

export default function StarsRating({ rate }) {
  return <Rating name="size-large" defaultValue={rate} size="large" readOnly />;
}
