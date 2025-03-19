/* eslint-disable react/prop-types */
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useState } from "react";
import Button from "../../ui/buttons/Button";
import LoaderMini from "./../../ui/LoaderMini.jsx";
import { useLogin } from "./useLogin";

export default function Login({ onCloseModal }) {
  const { login, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  function handleResetPassword(e) {
    e.preventDefault();
  }

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }
  return (
    <form className="flex w-full flex-col gap-8" onSubmit={handleLogin}>
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="email"
          sx={{
            fontSize: "16px",
            "&.Mui-focused": { color: "#46a358" },
          }}
        >
          Email
        </InputLabel>
        <OutlinedInput
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          sx={{
            fontSize: "16px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#46a358", // Default border color
            },
          }}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel
          htmlFor="password"
          sx={{
            fontSize: "16px",
            "&.Mui-focused": { color: "#46a358" },
          }}
        >
          Password
        </InputLabel>

        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            fontSize: "16px",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#46a358", // Default border color
            },
          }}
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "1rem" }}>
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                // onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? (
                  <FaRegEye className="text-4xl" />
                ) : (
                  <FaRegEyeSlash className="text-4xl" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <button
        onClick={handleResetPassword}
        className="text-primary cursor-pointer self-end"
      >
        Forgot Password?
      </button>

      <Button className="bg-primary mt-10 rounded-md py-6 text-3xl font-semibold text-white">
        {isPending ? <LoaderMini /> : "Login"}
      </Button>
    </form>
  );
}
