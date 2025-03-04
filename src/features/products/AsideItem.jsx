/* eslint-disable react/prop-types */
export default function AsideItem({ title, children }) {
  return (
    <div className="p-8">
      <h3 className="mb-6 text-[18px] font-bold">{title}</h3>
      <div className="p-6">{children}</div>
    </div>
  );
}
