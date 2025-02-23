/* eslint-disable react/prop-types */
export default function Button({ children, className, onClick }) {
  function handleClick() {
    onClick?.();
  }
  let defaultClassName =
    "bg-primary flex cursor-pointer items-center justify-center space-x-2 px-4 py-3 leading-none text-white";
  if (className) defaultClassName += ` ${className}`;
  return (
    <button onClick={handleClick} className={defaultClassName}>
      {children}
    </button>
  );
}
