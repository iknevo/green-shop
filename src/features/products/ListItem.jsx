import { useSearchParams } from "react-router";
/* eslint-disable react/prop-types */

export default function ListItem({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("category", value);
    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }
    setSearchParams(searchParams);
  }
  return (
    <li>
      <button
        onClick={() => handleClick(data.name)}
        className="flex w-full cursor-pointer items-center justify-between font-medium"
      >
        <span>{data.name.toUpperCase()}</span>
        <span>({data.count})</span>
      </button>
    </li>
  );
}
