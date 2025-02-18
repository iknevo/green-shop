/* eslint-disable react/prop-types */
export default function HeaderButtons({ children }) {
  return (
    <div className="flex items-center justify-center space-x-10">
      {children}
    </div>
  );
}
