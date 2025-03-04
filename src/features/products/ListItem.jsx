/* eslint-disable react/prop-types */
export default function ListItem({ data }) {
  return (
    <li className="flex items-center justify-between font-medium">
      <span>{data.name.toUpperCase()}</span>
      <span>({data.count})</span>
    </li>
  );
}
