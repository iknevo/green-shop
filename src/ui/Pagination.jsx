/* eslint-disable react/prop-types */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useSearchParams } from "react-router";
import { PRODUCTS_PER_PAGE } from "../utils/constants";
import PaginationButton from "./buttons/PaginationButton";

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
  if (pagesCount <= 1) return null;

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
      <div className="flex items-center gap-8">
        <PaginationButton onClick={prev} disabled={currentPage === 1}>
          <HiChevronLeft className="text-4xl" />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={next} disabled={currentPage === pagesCount}>
          <span>Next</span>
          <HiChevronRight className="text-4xl" />
        </PaginationButton>
      </div>
    </div>
  );
}
