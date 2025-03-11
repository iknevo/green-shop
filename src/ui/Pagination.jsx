/* eslint-disable react/prop-types */

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useSearchParams } from "react-router";
import { PRODUCTS_PER_PAGE } from "../utils/constants";
import Button from "./buttons/Button";

export default function Pagination({ numResults }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pagesCount = Math.ceil(numResults / PRODUCTS_PER_PAGE);

  function prev() {
    const prevPage = currentPage === 1 ? 1 : currentPage - 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  function next() {
    const nextPage = currentPage === pagesCount ? currentPage : currentPage + 1;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  function move(page) {
    // const nextPage = currentPage === pagesCount ? currentPage : page;
    console.log(currentPage, pagesCount);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  if (pagesCount <= 1)
    return (
      <div className="flex items-center justify-between">
        <p className="text-primary text-3xl font-bold">
          showing <span>{(currentPage - 1) * PRODUCTS_PER_PAGE + 1}</span> to{" "}
          <span>
            {currentPage === pagesCount
              ? numResults
              : currentPage * PRODUCTS_PER_PAGE}
          </span>{" "}
          of <span>{numResults}</span> products
        </p>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <p className="text-primary text-3xl font-bold">
        showing <span>{(currentPage - 1) * PRODUCTS_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pagesCount
            ? numResults
            : currentPage * PRODUCTS_PER_PAGE}
        </span>{" "}
        of <span>{numResults}</span> products
      </p>
      <div className="flex items-center gap-3">
        <Button
          className={`h-14 w-14 rounded-md ${currentPage === 1 ? "bg-grey-light-2 cursor-not-allowed" : "bg-primary"}`}
          onClick={prev}
          disabled={currentPage === 1}
        >
          <HiOutlineArrowLeft />
        </Button>
        {[...Array(pagesCount)].map((_, i) => (
          <Button
            onClick={() => move(i + 1)}
            className={`h-14 w-14 rounded-md border border-gray-200 ${i + 1 === currentPage ? "bg-primary text-white" : "bg-white"}`}
            key={i}
          >
            <span
              className={`${i + 1 === currentPage ? "text-white" : "text-black"} `}
            >
              {i + 1}
            </span>
          </Button>
        ))}
        <Button
          className={`h-14 w-14 rounded-md ${currentPage === pagesCount ? "bg-grey-light-2 cursor-not-allowed" : "bg-primary"}`}
          onClick={next}
          disabled={currentPage === pagesCount}
        >
          <HiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
}
