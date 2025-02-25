// import { useEffect } from "react";
// import supabase from "../services/supabase";
// import { products } from "../data/data";
import { Products } from "../features";
import { Hero } from "../ui";

export default function Home() {
  // !for development only
  // useEffect(() => {
  //   async function upload() {
  //     await supabase.from("products").insert(products);
  //   }
  //   upload();
  // }, []);
  return (
    <section className="my-10">
      <Hero />
      <Products />
    </section>
  );
}
