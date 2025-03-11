// import { tailChase } from "ldrs";
import { lineSpinner } from "ldrs";

export default function Loader() {
  lineSpinner.register();

  return (
    <div className="w-full text-center">
      <l-line-spinner
        size="80"
        stroke="10"
        speed="1"
        color="#46a358"
      ></l-line-spinner>
    </div>
  );
}

// export default function Loader() {
//   tailChase.register();

//   return (
//     <div className="w-full text-center">
//       <l-tail-chase size="80" speed="1.75" color="#46a358"></l-tail-chase>
//     </div>
//   );
// }
