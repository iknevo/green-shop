import { LoginIcon } from "../icons";
import Button from "./Button";

export default function LoginButton() {
  return (
    <Button className="bg-primary rounded-md">
      <LoginIcon className="h-8 w-8" />
      <span>Login</span>
    </Button>
  );
}
