import React, { useContext } from "react";
import { StateContext } from "../../Context/StateContext/StateContext";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function PrivetRoute({ children }) {
  const { user, loading } = useContext(StateContext);

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
    return <Navigate to={"/"}></Navigate>;
  }
  if (!user) {
    return children;
  }
}
