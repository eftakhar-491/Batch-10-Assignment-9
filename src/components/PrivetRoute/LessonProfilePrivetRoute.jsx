import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StateContext } from "../../Context/StateContext/StateContext";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function LessonProfilePrivetRoute({ children }) {
  const { user, loading } = useContext(StateContext);
  const { state } = useLocation();

  if (loading) {
    return (
      <Box
        sx={{
          margin: "60px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate to={"/signin"} state={state}></Navigate>;
  }
}
