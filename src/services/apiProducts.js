import { PRODUCTS_PER_PAGE } from "../utils/constants";
import supabase from "./supabase";

export async function getProducts({ filter, page }) {
  let query = supabase
    .from("products")
    .select("id,name,price,discount,imageUrl,category,sizes", {
      count: "exact",
    });

  if (filter) query = query.eq(filter.field, filter.value);

  // pagination
  if (page) {
    const from = (page - 1) * PRODUCTS_PER_PAGE;
    const to = from + PRODUCTS_PER_PAGE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("There was an error while getting products");
  }

  return { data, error, count };
}
