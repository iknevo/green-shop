import {
  PRODUCTS_MAX_PRICE,
  PRODUCTS_MIN_PRICE,
  PRODUCTS_PER_PAGE,
  PRODUCTS_PER_SHOP,
} from "../utils/constants";
import supabase from "./supabase";

export async function getProduct(id) {
  const { data, error, isLoading } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("There was an error while getting this products");
  }

  return { data, error, isLoading };
}

export async function getProducts({
  filter,
  priceFilter,
  discountFilter,
  page,
}) {
  let query = supabase
    .from("products")
    .select("id,name,price,discount,imageUrl,category,sizes", {
      count: "exact",
    });

  // filter
  if (filter) query = query.eq(filter.field, filter.value);
  // price filter
  if (priceFilter)
    query = query
      .gte("price", priceFilter.minPrice || PRODUCTS_MIN_PRICE)
      .lte("price", priceFilter.maxPrice || PRODUCTS_MAX_PRICE);
  // discount filter
  if (discountFilter) {
    if (discountFilter === "no-discount") query = query.eq("discount", 0);
    if (discountFilter === "with-discount") query = query.gt("discount", 0);
  }

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

export async function getShopProducts({ filter, priceFilter, page }) {
  let query = supabase.from("products").select("*", {
    count: "exact",
  });

  // filter
  if (filter) query = query.eq(filter.field, filter.value);

  if (priceFilter)
    query = query
      .gte("price", priceFilter.minPrice || PRODUCTS_MIN_PRICE)
      .lte("price", priceFilter.maxPrice || PRODUCTS_MAX_PRICE);

  // pagination
  if (page) {
    const from = (page - 1) * PRODUCTS_PER_SHOP;
    const to = from + PRODUCTS_PER_SHOP - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("There was an error while getting products");
  }

  return { data, error, count };
}
