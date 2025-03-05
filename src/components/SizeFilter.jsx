import ListItem from "../features/products/ListItem";

export default function SizeFilter() {
  const sizes = [
    { label: "Small", value: "S" },
    { label: "Medium", value: "M" },
    { label: "Large", value: "L" },
    { label: "Extra Large", value: "XL" },
  ];
  return (
    <ul className="flex flex-col gap-6">
      {sizes.map((size) => (
        <ListItem data={size} key={size.label + Math.random()} />
      ))}
    </ul>
  );
}
