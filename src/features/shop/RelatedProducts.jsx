/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { Button } from "../../ui";
import { formatCurrency } from "../../utils/helpers";

export default function RelatedProducts({ shopProducts, currentProduct }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(scrollAmount) {
    const newPosition = scrollPosition + scrollAmount;
    setScrollPosition(newPosition);
    scrollRef.current.scrollLeft = newPosition;
  }
  return (
    <div className="pt-8 pb-20">
      <h5 className="text-primary text-center text-5xl font-semibold uppercase">
        Products you may also like
      </h5>
      <div
        ref={scrollRef}
        className="flex flex-nowrap items-center gap-4 overflow-hidden scroll-smooth pt-8"
      >
        {shopProducts.map((item) => (
          <div
            onClick={() => navigate(`/shop/${item.id}`)}
            key={item.id}
            className={`${item.id === currentProduct.id ? "cursor-not-allowed" : "cursor-pointer"} grid w-[350px] shrink-0 grid-rows-[85%_15%] items-center justify-start self-stretch`}
          >
            <img src={item.imageUrl} alt={`${item.name} image`} />
            <div className="text-center">
              <h6 className="mb-2 text-3xl font-semibold">{item.name}</h6>
              <span className="text-primary text-3xl font-bold">
                {formatCurrency(item.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8 pt-8">
        <Button
          disabled={scrollPosition === 0}
          className="bg-primary rounded-md px-6 py-2 text-4xl text-white"
          onClick={() => handleScroll(-350)}
        >
          <FaArrowLeftLong />
        </Button>
        <Button
          disabled={scrollPosition === (shopProducts.length - 4) * 350}
          className="bg-primary rounded-md px-6 py-2 text-4xl text-white"
          onClick={() => handleScroll(350)}
        >
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
}
