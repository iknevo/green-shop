/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Button from "../../ui/buttons/Button";
import "./Auth.scss";
import Login from "./Login";
import SignUp from "./SignUp";
import { useFacebookLogin } from "./useFacebookLogin";
import { useGoogleLogin } from "./useGoogleLogin";

export default function Auth({ onCloseModal }) {
  const { googleLogin } = useGoogleLogin();
  const { facebookLogin } = useFacebookLogin();
  const [form, setForm] = useState("login");

  return (
    <div className="relative flex w-[400px] flex-col items-center pt-10">
      <div className="mb-20 flex gap-4 text-4xl font-semibold">
        <button
          className="disabled:text-primary cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed"
          disabled={form === "login"}
          onClick={() => setForm("login")}
        >
          Login
        </button>
        <span>|</span>
        <button
          className="disabled:text-primary cursor-pointer transition-colors duration-300 disabled:cursor-not-allowed"
          disabled={form === "signup"}
          onClick={() => setForm("signup")}
        >
          Register
        </button>
      </div>
      {form === "login" && <Login onCloseModal={onCloseModal} />}
      {form === "signup" && <SignUp onCloseModal={onCloseModal} />}

      <div className="self-stretch pt-16 text-center">
        <span className="auth__or">
          Or {form === "login" ? "Login" : "Signup"} With
        </span>
        <div className="flex flex-col gap-6 self-stretch pt-12">
          <Button
            onClick={googleLogin}
            className="flex items-center gap-2 rounded-md border-1 border-gray-300 py-4 font-semibold"
          >
            <FcGoogle className="text-4xl" />
            <span>Continue With Google</span>
          </Button>
          <Button
            onClick={facebookLogin}
            className="flex items-center gap-2 rounded-md border-1 border-gray-300 p-4 font-semibold"
          >
            <FaFacebookF className="text-4xl text-[#1877f2]" />
            <span>Continue With Facebook</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
