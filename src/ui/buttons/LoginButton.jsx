import { LoginIcon } from "../icons";
import Button from "./Button";

export default function LoginButton() {
  return (
    <Button className="rounded-md">
      <LoginIcon className="h-8 w-8" />
      <span>Login</span>
    </Button>
  );
}
