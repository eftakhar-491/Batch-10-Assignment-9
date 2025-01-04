import React from "react";
import bgt from "../../assets/bgimg.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Tutorial() {
  return (
    <>
      <section>
        <Helmet>
          <title>Word_By | Tutorial</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <div
          style={{ backgroundImage: `url(${bgt})` }}
          className="bg-cover bg-center py-10"
        >
          <h1 className="text-2xl font-bold text-center lg:text-3xl">
            Tutorials
          </h1>
          <p className="text-sm mt-2 font-semibold text-center">
            A best part of our website is a video tutorial opertunity
          </p>
        </div>
        <div className="grid w-11/12 mx-auto gap-6 lg:w-4/5 mt-20 justify-center grid-cols-1 lg:grid-cols-2 ">
          <div className=" border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/e65HNYEJIpc?si=ULQENmRUICLAaZ6b"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Jn1ClJaL0C8?si=cI8ls_ghhxyDODA1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/JyROOY4RPJg?si=HsZ3aVzvRDWOZCBo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Kq4Luegns8c?si=riW1tm9XSRt8O7tP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CEx2fPn-_UE?si=zxZ3ApHiZW5J6LTE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
          <div className="border-2 p-4 rounded-2xl w-full">
            <iframe
              className="rounded-xl"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/nVTZqR4b_Yg?si=E7GIaGVZiXoTeitD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
        <Link to={"/lets-learn"} className="block mx-auto w-fit mt-10">
          <Button
            style={{
              color: "black",
              borderColor: "black",
            }}
            variant="outlined"
          >
            Learn Vocabularies
          </Button>
        </Link>
      </section>
    </>
  );
}
