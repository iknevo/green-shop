import { LoginIcon } from "../icons";
import Button from "./Button";

export default function LoginButton() {
  return (
    <Button className="bg-primary hover:bg-primary-light-1 rounded-md transition-all duration-200">
      <LoginIcon className="h-8 w-8" />
      <span>Login</span>
    </Button>
  );
}
