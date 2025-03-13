/* eslint-disable react/prop-types */
import { BiSolidError } from "react-icons/bi";
export default function Error({ text }) {
  return (
    <div className="flex w-full items-center justify-center gap-8 py-20 text-5xl font-semibold">
      <span>
        <BiSolidError className="text-red-500" />
      </span>
      <span>{text}</span>
    </div>
  );
}
