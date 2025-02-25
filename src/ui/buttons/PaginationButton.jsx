/* eslint-disable react/prop-types */
export default function PaginationButton({ onClick, children, disabled }) {
  function handleClick() {
    onClick?.();
  }
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="hover:text-primary flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-3xl font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:text-black"
    >
      {children}
    </button>
  );
}
