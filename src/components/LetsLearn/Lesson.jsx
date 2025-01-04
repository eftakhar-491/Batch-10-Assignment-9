import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StateContext } from "../../Context/StateContext/StateContext";
import bgLT from "../../assets/bgimg.jpg";

import CategoryNotFound from "../Error/CategoryNotFound";
import { Helmet } from "react-helmet";

export default function Lesson() {
  const { id } = useParams();
  const { allData } = useContext(StateContext);
  const [lesson, setLesson] = useState([]);
  const [modal, setModal] = useState({});
  useEffect(() => {
    const filterdata = allData?.filter(
      (item) => parseInt(id) === item.lesson_no
    );

    setLesson(filterdata);
  }, [allData]);

  function pronounceWord(word) {
    const msz = new SpeechSynthesisUtterance();
    msz.lang = "fn-FN";
    msz.voice = speechSynthesis.getVoices()[0];
    msz.text = word;
    speechSynthesis.speak(msz);
  }
  return (
    <>
      <div>
        <Helmet>
          <title>
            Word_By | Lesson-{parseInt(id) > 0 && parseInt(id) < 11 ? id : ""}
          </title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <div>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg flex items-center gap-3">
                Word_: <span className="text-sm">{modal.word}</span>
              </h3>
              <h3 className="font-bold text-lg flex items-center gap-3">
                Meaning_: <span className="text-sm">{modal.meaning}</span>
              </h3>
              <p className="py-1">
                <span className="tex-lg font-semibold">When To Say :</span>{" "}
                {modal.when_to_say}
              </p>
              <p className="py-1">
                {" "}
                <span className="tex-lg font-semibold">Example :</span>{" "}
                {modal.example}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <section className="mt-0">
          <div
            style={{ backgroundImage: `url(${bgLT})` }}
            className="mt-0 bg-cover bg-center py-10 mb-0 overflow-hidden"
          >
            <h1 className="lg:w-3/5 w-11/12 mx-auto text-3xl font-bold">
              Lesson No:{" "}
              {parseInt(id) > 0 && parseInt(id) < 11 ? id : "Not Found"}{" "}
            </h1>
            <p className="lg:w-3/5 w-11/12 mx-auto text-sm font-bold">
              Learn With Easy-
            </p>
          </div>
          {parseInt(id) > 0 && parseInt(id) < 11 ? (
            <div className=" lg:w-3/5 w-11/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2  ">
              {lesson?.map((item, i) => (
                <div
                  key={i + i + 5}
                  className={`mt-10 rounded-xl p-5 w-full bg-gradient-to-t ${
                    item.difficulty === "easy" && "from-green-300 via-green-50"
                  } ${
                    item.difficulty === "medium" &&
                    "from-orange-300 via-orange-50"
                  } ${
                    item.difficulty === "difficult" && "from-red-300 via-red-50"
                  } to-white`}
                >
                  <h1 className="text-xl font-semibold">
                    Word_: {item?.word}{" "}
                  </h1>
                  <h4 className="text-lg font-semibold">
                    Meaning_: {item?.meaning}
                  </h4>
                  <h2 className="text-lg font-semibold">
                    Pronunciation_: {item?.pronunciation}{" "}
                  </h2>
                  <h3 className="text-lg font-semibold">
                    Part Of Speech_: {item.part_of_speech}
                  </h3>

                  <div className="flex gap-3">
                    <Button
                      className="py-0"
                      onClick={() => {
                        setModal(item);
                        document.getElementById("my_modal_5").showModal();
                      }}
                      style={{
                        color: "black",
                        borderColor: "black",
                        display: "block",
                        marginTop: "10px",
                      }}
                      variant="outlined"
                    >
                      When to Say
                    </Button>
                    <Button
                      className="py-0"
                      onClick={() => {
                        pronounceWord(item?.word);
                      }}
                      style={{
                        color: "black",
                        borderColor: "black",
                        display: "block",
                        marginTop: "10px",
                      }}
                      variant="outlined"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <CategoryNotFound />
          )}
          <Link to={"/Lets-learn"}>
            <div className="mx-auto w-fit mt-10">
              <Button
                style={{
                  color: "black",
                  borderColor: "black",
                }}
                variant="outlined"
              >
                Go Back to Lesson
              </Button>
            </div>
          </Link>
        </section>
      </div>
    </>
  );
}
