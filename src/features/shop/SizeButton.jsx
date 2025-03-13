/* eslint-disable react/prop-types */
export default function SizeButton({ size, disabled, active, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`size_button text-primary ${active ? "border-primary bg-primary text-white" : ""} focus:border-primary focus:bg-primary focus:ring-primary aspect-square w-14 cursor-pointer rounded-full border-2 border-gray-300 text-3xl leading-0 font-semibold transition-all duration-150 focus:text-white focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300`}
      >
        {size}
      </button>
    </div>
  );
}
