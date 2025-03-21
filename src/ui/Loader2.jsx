import { ripples } from "ldrs";
export default function Loader2() {
  ripples.register();
  return <l-ripples size="40" speed="2" color="#46a358"></l-ripples>;
}
