/* eslint-disable react/prop-types */
export default function Button({ children }) {
  return (
    <button className="bg-primary flex justify-center items-center space-x-2 px-4 cursor-pointer text-white leading-none py-3 rounded-md">
      {children}
    </button>
  );
}
