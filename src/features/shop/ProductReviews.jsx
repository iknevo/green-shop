/* eslint-disable react/prop-types */
import { BsArrow90DegLeft } from "react-icons/bs";
export default function ProductReviews({ reviews }) {
  return (
    <div className="py-12">
      <h3 className="text-primary text-center text-5xl font-semibold uppercase">
        Reviews ( {reviews.length} )
      </h3>
      <div className="grid grid-cols-3 p-14">
        {reviews.map((review, i) => (
          <div className="flex flex-col gap-2 px-4 py-6" key={i}>
            <h4 className="text-3xl font-bold text-gray-500">
              {i + 1}. {review.name}
            </h4>
            <p className="flex gap-4 pl-10 font-semibold">
              <BsArrow90DegLeft className="rotate-180 text-3xl" />
              <span>{review.review}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
