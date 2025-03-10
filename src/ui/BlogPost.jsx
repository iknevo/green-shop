/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
export default function BlogPost({ img, read, title, text }) {
  return (
    <div className="bg-grey-light space-y-2 overflow-hidden rounded-md">
      <img className="w-full" src={img} alt="plant image" />
      <div className="space-y-2 p-4">
        <p className="text-primary font-medium">{read}</p>
        <h3 className="text-[25px] font-bold">{title}</h3>
        <p className="text-grey-dark-2 text-2xl">{text}</p>
        <button className="hover:text-primary mt-4 flex items-center gap-4 font-semibold transition-all duration-300 hover:cursor-pointer">
          <span>Read More</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
