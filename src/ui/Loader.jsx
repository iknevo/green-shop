import { tailChase } from "ldrs";
export default function Loader() {
  tailChase.register();

  return (
    <div className="w-full text-center">
      <l-tail-chase size="80" speed="1.75" color="#46a358"></l-tail-chase>;
    </div>
  );
}

// Default values shown
