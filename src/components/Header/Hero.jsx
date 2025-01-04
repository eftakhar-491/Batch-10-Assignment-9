import { Controller, EffectCreative, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/slide1.png";
import slide3 from "../../assets/slide3.jpg";

import slide21 from "../../assets/l1.jpg";
import slide22 from "../../assets/l2.jpg";
import slide23 from "../../assets/l3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Typewriter from "typewriter-effect";
import { useContext, useRef } from "react";
import ButtonCOM from "./ButtonCOM";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../Context/StateContext/StateContext";
export default function Hero() {
  AOS.init();
  const navigate = useNavigate();

  const { user } = useContext(StateContext);
  return (
    <>
      <section className="w-11/12 lg:w-4/5 mx-auto">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div
                data-aos="fade-up"
                className={`${
                  isActive ? AOS.refreshHard() : "hidden"
                } flex flex-col md:flex-row  items-center justify-between gap-4 md:h-[600px]`}
              >
                {/* details */}
                <div className="mt-9 md:mt-0 flex flex-col justify-center lg:w-[60%] w-full h-full">
                  <h1 className="text-5xl font-RR font-bold">
                    Learn French with_
                    <span className="font-RR text-[#004689] block">
                      <Typewriter
                        style={{ display: "inline" }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              `<span style="color: #004699;">Vocabulary</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                              `<span style="color: #004686;">Example</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                              `<span style="color: #054698;">when it use</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                              `<span style="color: #054689;">pronancution</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()

                            .start();
                        }}
                        options={{ loop: true, autoStart: true }}
                      />
                    </span>
                  </h1>

                  <p className="font-semibold max-w-[500px]">
                    Learn French easily with vocabulary examples and practical
                    usage in everyday phrases.
                  </p>
                  <Button
                    onClick={() => navigate("/lets-learn")}
                    style={{
                      marginTop: "16px",
                      color: "black",
                      border: "1px solid black",
                      width: "fit-content",
                    }}
                    variant="outlined"
                  >
                    Start Learning
                  </Button>
                  <ButtonCOM />
                </div>
                <div
                  onClick={() => navigate("/lets-learn")}
                  className=" cursor-pointer rounded-3xl shadow-xl hover:scale-95"
                >
                  <img
                    className=" rounded-3xl cursor-pointer shadow-2xl"
                    src={slide1}
                    alt="slide pic 1"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div
                data-aos="fade-up"
                className={`${
                  isActive ? AOS.refreshHard() : "hidden"
                } flex flex-col md:flex-row  items-center justify-between gap-4 md:h-[600px]`}
              >
                {/* details */}
                <div className="mt-9 md:mt-0 flex flex-col justify-center lg:w-[60%] w-full h-full">
                  <h1 className="text-5xl font-RR font-bold">
                    Our Lesson Category With_
                    <span className="font-RR text-[#004689] block">
                      <Typewriter
                        style={{ display: "inline" }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              `<span style="color: #006A67;">Easy</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                              `<span style="color: #FA812F;">Medium</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(
                              `<span style="color: #FA4032;">Difficult</span>`
                            )
                            .pauseFor(1000)
                            .deleteAll()

                            .start();
                        }}
                        options={{ loop: true, autoStart: true }}
                      />
                    </span>
                  </h1>

                  <p className="font-semibold max-w-[500px]">
                    Our lesson's have difficult category level...
                  </p>
                  <Button
                    onClick={() => navigate("/lets-learn")}
                    style={{
                      marginTop: "16px",
                      color: "black",
                      border: "1px solid black",
                      width: "fit-content",
                    }}
                    variant="outlined"
                  >
                    Start Learning
                  </Button>
                  <ButtonCOM />
                </div>
                <div
                  onClick={() => navigate("/lets-learn")}
                  className="space-y-3 cursor-pointer rounded-3xl w-full md:w-1/2 "
                >
                  <img
                    className="w-72 ml-auto rounded-3xl hover:scale-95 cursor-pointer shadow-2xl"
                    src={slide21}
                    alt="slide pic 1"
                  />
                  <img
                    className="w-72 mx-auto rounded-3xl hover:scale-95 cursor-pointer shadow-2xl"
                    src={slide22}
                    alt="slide pic 1"
                  />

                  <img
                    className="w-72 rounded-3xl hover:scale-95 cursor-pointer shadow-2xl"
                    src={slide23}
                    alt="slide pic 1"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
          {!user && (
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  data-aos="fade-up"
                  className={`${
                    isActive ? AOS.refreshHard() : "hidden"
                  } flex flex-col md:flex-row  items-center justify-between gap-4 md:h-[600px]`}
                >
                  {/* details */}
                  <div className="mt-9 md:mt-0 flex flex-col justify-center lg:w-[60%] w-full h-full">
                    <h1 className="text-5xl font-RR font-bold">
                      Easy With SignIn_
                      <span className="font-RR text-[#004689] block">
                        <Typewriter
                          style={{ display: "inline" }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(
                                `<span style="color: #006A67;">Free Access </span>`
                              )
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString(
                                `<span style="color: #FA812F;">Dashbord</span>`
                              )
                              .pauseFor(1000)
                              .deleteAll()

                              .start();
                          }}
                          options={{ loop: true, autoStart: true }}
                        />
                      </span>
                    </h1>

                    <p className="font-semibold max-w-[500px]">
                      Our lesson's have difficult category level...
                    </p>
                    <Button
                      onClick={() => navigate("/lets-learn")}
                      style={{
                        marginTop: "16px",
                        color: "black",
                        border: "1px solid black",
                        width: "fit-content",
                      }}
                      variant="outlined"
                    >
                      Start Learning
                    </Button>
                    <ButtonCOM />
                  </div>
                  <div
                    onClick={() => navigate("/signin")}
                    className="space-y-3 cursor-pointer rounded-3xl w-full md:w-1/2 "
                  >
                    <img
                      className="rounded-2xl shadow-xl active:scale-95"
                      src={slide3}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          )}
        </Swiper>
      </section>
    </>
  );
}
