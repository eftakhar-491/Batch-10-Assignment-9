import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { FireBaseContext } from "../../Context/FirebaseContext/FirebaseContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function UpdateProfile() {
  const [uName, setUName] = useState("");
  const [uImg, setUImg] = useState("");
  const [updateErr, setUpdateErr] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useContext(FireBaseContext);

  function handelUndate() {
    if (!uName || !uImg) {
      setUpdateErr("Field is Empty");
      return;
    }

    updateUserData({ displayName: uName, photoURL: uImg })
      .then((res) => {
        navigate("/my-profile");
      })
      .catch((err) => setUpdateErr("Something is Not ok Try Again"));
  }
  return (
    <>
      <section>
        <Helmet>
          <title>Word_By | Update Profile</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <div>
          <h1 className="text-2xl font-bold text-center mt-14 md:text-3xl">
            Update Profile Info_
          </h1>
        </div>
        <div className="flex flex-col w-11/12 mx-auto mt-14 gap-5 md:max-w-[500px]">
          <TextField
            value={uName}
            onChange={(e) => {
              setUpdateErr("");
              setUName(e.target.value);
            }}
            id="outlined-error-helper-text"
            label="Update Name"
            type="text"
          />
          <TextField
            value={uImg}
            onChange={(e) => {
              setUpdateErr("");
              setUImg(e.target.value);
            }}
            id="outlined-error-helper-text"
            label="Update Image Url"
            type="email"
          />
          <p className=" cursor-pointer text-sm -mb-3 text-red-500 font-bold">
            {updateErr ? updateErr : ""}
          </p>
          <Button
            className="py-0 "
            onClick={() => {
              handelUndate();
            }}
            style={{
              color: "black",
              borderColor: "black",
              display: "block",
              marginTop: "10px",
            }}
            variant="outlined"
          >
            Update
          </Button>
        </div>
      </section>
    </>
  );
}
