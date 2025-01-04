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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context/StateContext/StateContext";
import { Helmet } from "react-helmet";

export default function SignIn() {
  const { useGoogleAuth, userSignOut, userSignIn, resetUserPass } =
    React.useContext(FireBaseContext);
  const { email, setEmail } = React.useContext(StateContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const [pass, setPass] = React.useState("");
  const [signinErr, setSigninErr] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function handelGoogleSignIn(e) {
    e.preventDefault();
    useGoogleAuth()
      .then((res) => {
        toast("Sign in Succesfull");
        navigate(location.state ? location?.state?.his : "/");
      })
      .catch((err) => {
        toast.error("Something Error");
      });
  }
  function handelFormClick(e) {
    e.preventDefault();
    if (!email || !pass) {
      setSigninErr("Type all Field");
      return;
    }

    userSignIn(email, pass)
      .then(() => toast("Signin SuccessFull"))
      .catch(() => {
        setSigninErr("User Not Matched");
      });
  }

  return (
    <>
      <Helmet>
        <title>Word_By | SignIn</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h1 className="text-2xl font-bold font-RR text-center mt-10 mb-10">
        Sign In{" "}
      </h1>
      <form className="flex flex-col w-11/12 gap-4 mx-auto md:max-w-[500px] ">
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSigninErr(null);
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
              setSigninErr(null);
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
        <Link to={"/forget-password"}>
          <p className="hover:underline cursor-pointer text-sm -mt-3 text-blue-500 font-bold">
            Forget Password?
          </p>
        </Link>
        <p className=" cursor-pointer text-sm -mb-3 text-red-500 font-bold">
          {signinErr ? signinErr : ""}
        </p>
        <Button
          onClick={handelFormClick}
          style={{ color: "black" }}
          variant="outlined"
        >
          Sign In
        </Button>
        <p className=" text-center cursor-pointer text-sm font-bold">
          Don't Have an Account?{" "}
          <Link
            to={"/signup"}
            state={{ his: location?.state?.his }}
            className="hover:underline text-blue-500"
          >
            Create Account
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
