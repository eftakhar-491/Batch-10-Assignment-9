import * as React from "react";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FireBaseContext } from "../../Context/FirebaseContext/FirebaseContext";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SignUp() {
  const { createUser, updateUserData, useGoogleAuth } =
    React.useContext(FireBaseContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userImg, setUserImg] = React.useState("");
  const [emails, setEmails] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [err, setErr] = React.useState(null);
  const location = useLocation();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  function validPass(p) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(p);
  }
  function handelFormClick(e) {
    e.preventDefault();

    if (!userName || !userImg || !emails || !pass) {
      setErr("Type all field Correctly");
      return;
    }
    if (!emails.includes("@")) {
      setErr("invalid Email");
      return;
    }
    const isValid = validPass(pass);
    if (!isValid) {
      setErr(`invalid passowrd (Must have an Uppercase
         a Lowercase & at least 6 character in the password) 
`);
      return;
    }
    createUser(emails, pass)
      .then(() => {
        toast.success("register succesfull");
        updateUserData({ displayName: userName, photoURL: userImg })
          .then(() => toast("Profile Update succesfull"))
          .catch(() => toast.error("Profile update fail"));
      })
      .catch(() => toast.error("This email is not available"));
  }
  function handelGoogleSignIn(e) {
    e.preventDefault();
    useGoogleAuth()
      .then(() => toast("Sign up Succesfull"))
      .catch(() => toast.error("google Sign up failed"));
  }
  return (
    <>
      <Helmet>
        <title>Word_By | SignUp</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h1 className="text-2xl font-bold text-center my-10">Sign Up</h1>
      <form className="flex flex-col w-11/12 gap-4 mx-auto md:max-w-[500px] ">
        <TextField
          type="text"
          id="outlined-error-helper-text"
          label="User Name"
          value={userName}
          onChange={(e) => {
            setErr(null);
            setUserName(e.target.value);
          }}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Photo URL"
          type="text"
          value={userImg}
          onChange={(e) => {
            setUserImg(e.target.value);
            setErr(null);
          }}
        />
        <TextField
          value={emails}
          onChange={(e) => {
            setEmails(e.target.value);
            setErr(null);
          }}
          id="outlined-error-helper-text"
          label="Email"
          type="email"
        />
        <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              setErr(null);
            }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <p className="text-sm -mb-3 text-red-500 font-bold">{err ? err : ""}</p>
        <Button
          onClick={handelFormClick}
          style={{ color: "black" }}
          variant="outlined"
        >
          Sign Up
        </Button>
        <p className=" text-center cursor-pointer text-sm font-bold">
          Have an Account?{" "}
          <Link
            to={"/signin"}
            state={{ his: location?.state?.his }}
            className="hover:underline text-blue-500"
          >
            Sign In
          </Link>
        </p>
        <hr />
        <span className="text-center">OR</span>
        <div
          onClick={handelGoogleSignIn}
          className="cursor-pointer active:scale-95 py-2 justify-center text-2xl rounded-2xl bg-[#F4F4F4] font-semibold flex items-center"
        >
          {" "}
          <img
            className="w-20 rounded-2xl"
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=600&name=image8-2.jpg"
            alt=""
          />{" "}
          Sign in with Google
        </div>
      </form>
    </>
  );
}
