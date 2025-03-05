/* eslint-disable react/prop-types */
import ListItem from "./ListItem";

export default function AsideFilter({ options }) {
  return (
    <ul className="flex flex-col gap-6">
      {options.map((category) => (
        <ListItem data={category} key={category.name + Math.random()} />
      ))}
    </ul>
  );
}
