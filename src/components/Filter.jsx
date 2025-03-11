/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router";

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }
    setSearchParams(searchParams);
  }
  return (
    <ul className="flex flex-col gap-6">
      {options.map((option) => (
        <li key={option.value}>
          <button
            disabled={currentFilter === option.value}
            onClick={() => handleClick(option.value)}
            className={
              currentFilter === option.value
                ? "text-primary cursor-not-allowed text-3xl font-semibold"
                : "" +
                  "hover:text-primary cursor-pointer text-3xl font-semibold transition-all duration-300"
            }
          >
            <span>{option.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
