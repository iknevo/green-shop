import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Button } from "../../ui";
import LoaderMini from "../../ui/LoaderMini";

import { useUpdateUser } from "./useUpdateUser";

export default function AccountPassword() {
  const { updateUser, isUpdating } = useUpdateUser();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit({ password }) {
    updateUser(
      { password },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  }

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="col-span-3 w-1/2 space-y-16"
    >
      <div className="flex flex-col gap-10">
        <p className="text-3xl font-semibold">Password Change</p>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <FormControl variant="outlined">
              <InputLabel
                htmlFor="newPassword"
                sx={{
                  fontSize: "16px",
                  "&.Mui-focused": { color: "#46a358" },
                }}
              >
                New Password
              </InputLabel>
              <OutlinedInput
                autoComplete="current-password"
                disabled={isUpdating}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
                id="newPassword"
                type={showPassword ? "text" : "password"}
                // onChange={(e) => setPassword(e.target.value)}
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
                        showPassword
                          ? "hide the password"
                          : "display the password"
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
                label="New Password"
              />
            </FormControl>
            {errors?.password?.message && (
              <span className="text-red-700">{errors.password.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <FormControl variant="outlined">
              <InputLabel
                htmlFor="confirmPassword"
                sx={{
                  fontSize: "16px",
                  "&.Mui-focused": { color: "#46a358" },
                }}
              >
                Confirm New Password
              </InputLabel>
              <OutlinedInput
                disabled={isUpdating}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    getValues().password === value || "Passwords need to match",
                })}
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                // onChange={(e) => setPassword(e.target.value)}
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
                        showPassword
                          ? "hide the password"
                          : "display the password"
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
                label="Confirm New Password"
              />
            </FormControl>

            {errors?.passwordConfirm?.message && (
              <span className="text-red-700">
                {errors.passwordConfirm.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <Button className="bg-primary rounded-md text-white">
        {isUpdating ? <LoaderMini /> : "Save Changes"}
      </Button>
    </form>
  );
}
