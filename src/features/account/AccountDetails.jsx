import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { Button } from "../../ui";
import LoaderMini from "../../ui/LoaderMini";
import { useUser } from "../authentication/useUser";
import { useUpdateUser } from "./useUpdateUser";

export default function AccountDetails() {
  const { updateUser, isUpdating } = useUpdateUser();
  const {
    user: { email, user_metadata: { full_name: currentFullName } = {} },
  } = useUser();
  const [firstName, setFirstName] = useState(
    currentFullName?.split(" ").at(0) || "",
  );
  const [lastName, setLastName] = useState(
    currentFullName?.split(" ").at(1) || "",
  );
  const [avatar, setAvatar] = useState(null);
  const full_name = [firstName, lastName].join(" ");
  function handleSubmit(e) {
    e.preventDefault();
    if (!full_name) return;
    updateUser({ full_name, avatar });
  }
  return (
    <form onSubmit={handleSubmit} className="col-span-3 space-y-16">
      <div className="flex flex-col gap-10">
        <p className="text-3xl font-semibold">Personal Information</p>
        <div className="grid grid-cols-2 items-start gap-10">
          <FormControl variant="outlined">
            <InputLabel
              htmlFor="firstName"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              First Name
            </InputLabel>
            <OutlinedInput
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              inputlabelprops={{ shrink: Boolean(firstName) || undefined }}
              id="firstName"
              type="text"
              label="First Name"
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
              htmlFor="LastName"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              Last Name
            </InputLabel>
            <OutlinedInput
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              inputlabelprops={{ shrink: Boolean(lastName) || undefined }}
              id="lastName"
              type="text"
              label="Last Name"
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              htmlFor="email"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              Email Address
            </InputLabel>
            <OutlinedInput
              value={email}
              inputlabelprops={{
                shrink: Boolean(email) || undefined,
              }}
              id="email"
              type="email"
              label="Email Address"
              disabled={true}
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </FormControl>

          <div className="relative">
            <span className="absolute -top-5 left-4 block bg-white px-2">
              Avatar
            </span>
            <input
              className="text-md block w-full cursor-pointer rounded-lg border border-gray-400 bg-white px-2 py-6 text-gray-900 focus:outline-none"
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <Button className="bg-primary rounded-md text-white">
        {isUpdating ? <LoaderMini /> : "Save Changes"}
      </Button>
    </form>
  );
}
