import { Products } from "../features";
import { Hero } from "../ui";

export default function Home() {
  return (
    <section className="my-10">
      <Hero />
      <Products />
    </section>
  );
}
