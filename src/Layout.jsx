import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";

import { Helmet } from "react-helmet";
export default function Layout() {
  return (
    <>
      <section className="max-w-[1600px] mx-auto font-RR">
        <Helmet>
          <title>Word_By | Home</title>
          <meta name="description" content="" />
        </Helmet>
        <ToastContainer />
        <Home />
      </section>
    </>
  );
}
