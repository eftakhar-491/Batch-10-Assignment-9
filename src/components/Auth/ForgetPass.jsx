import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { StateContext } from "../../Context/StateContext/StateContext";
import { FireBaseContext } from "../../Context/FirebaseContext/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function ForgetPass() {
  const { email, setEmail } = useContext(StateContext);
  const { resetUserPass } = useContext(FireBaseContext);
  const [fErr, setFErr] = useState("");
  const navigate = useNavigate();
  function handelForgetPass() {
    if (!email) {
      setFErr("Field is Empty");

      return;
    }
    if (!email.includes("@")) {
      setFErr("invalid Email");
      return;
    }
    resetUserPass(email)
      .then((res) => {
        navigate("/signin");
        window.open(
          "https://mail.google.com/mail/u/0/",
          "_blank",
          "noopener,noreferrer"
        );
      })
      .catch((err) => setFErr("invalid Email"));
  }
  return (
    <>
      <Helmet>
        <title>Word_By | Reset Password</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <section>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-center mt-24">
            Reset Your Account
          </h1>
        </div>
        <div className="flex flex-col w-11/12 mx-auto gap-5 mt-10 h-[200px] md:max-w-[500px] ">
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFErr("");
            }}
            id="outlined-error-helper-text"
            label="Email"
            type="email"
          />
          <p className=" cursor-pointer text-sm -mb-3 text-red-500 font-bold">
            {fErr ? fErr : ""}
          </p>
          <Button
            onClick={handelForgetPass}
            style={{ color: "black" }}
            variant="outlined"
          >
            Reset Password
          </Button>
        </div>
      </section>
    </>
  );
}
