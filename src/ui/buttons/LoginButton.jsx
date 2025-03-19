import { HiOutlineLogin } from "react-icons/hi";
import Auth from "../../features/authentication/Auth";
import Modal from "../Modal";
import Button from "./Button";

export default function LoginButton() {
  return (
    <Modal>
      <Modal.Open opens="login">
        <Button className="bg-primary hover:bg-primary-light-1 rounded-md text-white transition-all duration-200">
          <span className="font-semibold">Login</span>
          <HiOutlineLogin className="rotate-180 text-4xl" />
        </Button>
      </Modal.Open>
      <Modal.Window name="login">
        <Auth />
      </Modal.Window>
    </Modal>
  );
}
