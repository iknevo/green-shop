/* eslint-disable react/prop-types */
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth({ onCloseModal }) {
  const [form, setForm] = useState("login");
  return (
    <div className="flex w-[500px] flex-col items-center py-10">
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
    </div>
  );
}
