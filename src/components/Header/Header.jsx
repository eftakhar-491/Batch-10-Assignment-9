import React, { useContext } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import bgImg from "../../assets/bgimg.jpg";
import { StateContext } from "../../Context/StateContext/StateContext";

export default function Header() {
  const { user, w, setW } = useContext(StateContext);

  return (
    <>
      {user && (
        <div
          className={`flex items-centers justify-between py-[1px] text-center font-semibold text-lg w-11/12 lg:max-w-[600px] mx-auto ${
            user && w ? "block" : "hidden"
          }`}
        >
          <h1>Welcome_ {user?.displayName ? user.displayName : ""}</h1>
          <svg
            onClick={() => {
              setW(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 active:scale-95 cursor-pointer `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      )}
      <header
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, .5), rgba(0,0,0, .1)),
    url(${bgImg})`,
        }}
        className="md:h-screen pb-10 md:pb-0 bg-cover bg-center bg-no-repeat"
      >
        <Nav />
        <Hero />
      </header>
    </>
  );
}
