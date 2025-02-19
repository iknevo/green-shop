import { HeroImage } from "./assets";
import Button from "./../../buttons/Button.jsx";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="bg-grey-light grid grid-cols-2 items-center gap-40 px-[3.2rem]">
      <div>
        <p className="mb-4 text-[1.4rem] uppercase">Welcome to green shop</p>
        <h1 className="font-second mb-4 text-[7rem] leading-32 font-extrabold uppercase">
          Let’s Make a Better <span className="text-primary">Planet</span>
        </h1>
        <p className="text-grey-dark-2 mb-16 text-[14px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button className="hover:bg-primary-light-1 rounded-xl px-12 py-6 text-2xl font-semibold transition-all duration-300">
          <Link to="/shop">Shop Now</Link>
        </Button>
      </div>
      <div className="relative">
        <img className="w-full" src={HeroImage} alt="green plant hero image" />
      </div>
    </div>
  );
}
