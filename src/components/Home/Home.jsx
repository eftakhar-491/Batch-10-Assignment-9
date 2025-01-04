import React, { useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Header/Nav";
import Success from "./Success";
import AboutSection from "./AboutSection";
import Faqs from "./Faqs";
import Price from "./Price";
import Footer from "../Footer/Footer";

import { Helmet } from "react-helmet";

export default function Home() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <>
          <Header />

          <Success />
          <AboutSection />
          <Price />
          <Faqs />
        </>
      ) : (
        <Nav />
      )}
      <Outlet />

      <Footer />
    </>
  );
}
