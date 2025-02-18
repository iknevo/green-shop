/* eslint-disable react/prop-types */
export default function Button({ children, className }) {
  let defaultClassName =
    "bg-primary flex cursor-pointer items-center justify-center space-x-2 px-4 py-3 leading-none text-white";
  if (className) defaultClassName += ` ${className}`;
  return <button className={defaultClassName}>{children}</button>;
}
