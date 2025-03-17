/* eslint-disable react/prop-types */
export default function Empty({ resourceName }) {
  return (
    <p className="text-primary text-center text-3xl font-bold">
      No {resourceName} could be found!
    </p>
  );
}
