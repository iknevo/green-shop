import supabase from "./supabase";
// import { PRODUCTS_PER_PAGE } from "./../utils/constants";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,price,discount,imageUrl");

  if (error) {
    console.error(error);
    throw new Error("There was an error while getting products");
  }

  return data;
}
