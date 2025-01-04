import React, { useContext } from "react";
import bgp from "../../assets/bgimg.jpg";
import { Button } from "@mui/material";
import { StateContext } from "../../Context/StateContext/StateContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Profile() {
  const { user } = useContext(StateContext);

  const navigate = useNavigate();
  return (
    <>
      <section className="pb-14">
        <Helmet>
          <title>Word_By | My Profile</title>
          <meta name="description" content="" />
        </Helmet>
        <div
          style={{ backgroundImage: `url(${bgp})` }}
          className="mt-0 bg-cover bg-center py-10 mb-0 overflow-hidden"
        >
          <h1 className="lg:w-3/5 w-11/12 mx-auto text-3xl font-bold">
            My Profile
          </h1>
          <p className="lg:w-3/5 w-11/12 mx-auto text-sm font-bold">
            Welcome_ <span>Md Eftakharul islam khan</span>
          </p>
        </div>
        <div className="lg:w-3/5 mx-auto w-11/12 gap-5 flex-col md:flex-row flex mt-32 items-center">
          <div className="w-44 h-44">
            <img
              className="w-full h-full rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-lg font-bold">
              Name: <span className="font-semibold">{user?.displayName}</span>{" "}
            </h1>
            <h1 className="text-lg font-bold">
              Email: <span className="font-semibold">{user?.email}</span>{" "}
            </h1>
            <h1 className="text-lg font-bold">
              Phone Number:{" "}
              <span className="font-semibold">
                {user?.phoneNumber || "not found"}
              </span>{" "}
            </h1>
            <h1 className="text-lg font-bold">
              Verification:{" "}
              <span className="font-semibold">
                {user?.emailVerified ? "Verified" : "Not Verified"}
              </span>{" "}
            </h1>
            <h1 className="text-lg font-bold">
              Created Time:{" "}
              <span className="font-semibold">
                {user?.metadata?.creationTime}
              </span>{" "}
            </h1>
            <h1 className="text-lg font-bold">
              Last SignIn At:{" "}
              <span className="font-semibold">
                {user?.metadata?.lastSignInTime}
              </span>{" "}
            </h1>

            <Button
              className="py-0 "
              onClick={() => {
                navigate("/update-profile");
              }}
              style={{
                color: "black",
                borderColor: "black",
                display: "block",
                marginTop: "10px",
              }}
              variant="outlined"
            >
              Update Info
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
