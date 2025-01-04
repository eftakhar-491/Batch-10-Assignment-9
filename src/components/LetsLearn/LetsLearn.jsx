import React from "react";
import bgL from "../../assets/bgimg.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function LetsLearn() {
  return (
    <>
      <section>
        <Helmet>
          <title>Word_By | Start Learning</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <div
          className="bg-cover bg-center py-14 mb-12"
          style={{ backgroundImage: `url(${bgL})` }}
        >
          <h1 className="font-bold text-center text-2xl lg:text-5xl">
            Start Learning
          </h1>
          <p className="text-sm font-semibold text-center m-2">
            This is the best and easy way to learn french vocabulary{" "}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 w-11/12 mx-auto md:max-w-[600px]">
          <Link to={"/lets-learn/1"} state={{ his: "/lets-learn/1" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 1 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/2"} state={{ his: "/lets-learn/2" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 2 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/3"} state={{ his: "/lets-learn/3" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 3 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/4"} state={{ his: "/lets-learn/4" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 4 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/5"} state={{ his: "/lets-learn/5" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 5 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/6"} state={{ his: "/lets-learn/6" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 6 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/7"} state={{ his: "/lets-learn/7" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 7 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/8"} state={{ his: "/lets-learn/8" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 8 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/9"} state={{ his: "/lets-learn/9" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 9 | Easy to start
            </Button>
          </Link>
          <Link to={"/lets-learn/10"} state={{ his: "/lets-learn/10" }}>
            <Button
              className="hover:bg-slate-200"
              style={{
                border: "1px solid black",
                color: "black",
                width: "100%",
              }}
              variant="outlined"
            >
              Lesson no - 10 | Easy to start
            </Button>
          </Link>
        </div>
        <div
          className="bg-cover bg-center py-14 mb-12 mt-10"
          style={{ backgroundImage: `url(${bgL})` }}
        >
          <h1 className=" text-2xl font-bold text-center md:text-3xl">
            Tutorial
          </h1>
          <p className="text-sm font-semibold text-center m-2">
            This is the best and easy way to learn with video tutorial
          </p>
        </div>
        <div className="border-2 w-11/12 md:max-w-[560px] mx-auto p-4 rounded-2xl">
          <h1 className="text-xl font-bold mb-4">
            {" "}
            Learning the French Alphabet_
          </h1>
          <iframe
            className="mx-auto rounded-xl"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/-7woR4auqso?si=kTKYt46J59NEO_Qz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <Link
          state={{ his: "/tutorials" }}
          to={"/tutorials"}
          className="block mx-auto w-fit mt-10"
        >
          <Button
            style={{
              color: "black",
              borderColor: "black",
              display: "block",
              margin: "30px auto",
              padding: "10px 30px",
            }}
            className="hover:bg-slate-200"
            variant="outlined"
          >
            View More
          </Button>
        </Link>
      </section>
    </>
  );
}
