/* eslint-disable react/prop-types */
export default function Button({
  children,
  className,
  onClick,
  disabled = false,
}) {
  function handleClick() {
    onClick?.();
  }

  let defaultClassName =
    "flex cursor-pointer disabled:cursor-not-allowed items-center justify-center space-x-2 px-4 py-3 leading-none text-white";
  if (className) defaultClassName += ` ${className}`;

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={defaultClassName}
    >
      {children}
    </button>
  );
}
