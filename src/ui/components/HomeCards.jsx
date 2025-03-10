import { FaArrowRightLong } from "react-icons/fa6";
import home1 from "../../assets/images/home-1.png";
import home2 from "../../assets/images/home-2.png";
import Button from "../buttons/Button";
import "./HomeCards.scss";
export default function HomeCards() {
  return (
    <div className="flex items-center gap-16 py-30">
      <div className="home_card bg-grey-light flex flex-1 items-center justify-between rounded-xl px-12">
        <img className="" src={home1} alt="plant image" />
        <div className="flex flex-col items-end text-right">
          <h2 className="mb-8 text-4xl font-bold text-black uppercase">
            Summer cactus <br /> & succulents
          </h2>
          <p className="text-grey-dark-2 mb-8 text-[14px]">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <Button className="bg-primary gap-4 rounded-md px-6 py-4 font-semibold">
            Find more
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
      <div className="bg-grey-light home_card flex flex-1 items-center justify-between px-12">
        <img className="" src={home2} alt="plant image" />
        <div className="flex flex-col items-end text-right">
          <h2 className="mb-8 text-4xl font-bold text-black uppercase">
            Styling trends <br /> & much more
          </h2>
          <p className="text-grey-dark-2 mb-8 text-[14px]">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <Button className="bg-primary gap-4 rounded-md px-6 py-4 font-semibold">
            Find more
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
}
