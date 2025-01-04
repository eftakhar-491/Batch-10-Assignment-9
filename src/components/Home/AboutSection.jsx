import React from "react";
import bgImg from "../../assets/bgimg.jpg";
import img1 from "../../assets/img11.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";

export default function AboutSection() {
  AOS.init();
  return (
    <>
      <section className="overflow-hidden mb-16">
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-8"
        >
          <h1
            data-aos="fade-up"
            className="text-2xl lg:text-3xl font-bold text-center"
          >
            Who We Are?
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm font-semibold text-center mx-auto w-11/12 lg:max-w-[600px]"
          >
            We are a dedicated team passionate about helping learners of all
            ages expand their vocabulary and enhance their language skills
            through interactive, engaging, and personalized learning
            experiences.
          </p>
        </div>
        <div className="lg:w-4/5 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 mt-10">
          <div data-aos="fade-up" className="flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl font-bold">Words define us.</h1>
            <p className="pr-5 mt-3">
              Language has the power to open doors and close gaps. Building a
              strong vocabulary empowers students with the knowledge and skills
              they need to be successful in the classroom and beyond.
            </p>
            <p className="text-sm font-semibold mt-1">
              You can learn Vocabularies very Easyly.Just Start With A click.
            </p>
            <Link
              to={"/lets-learn"}
              className="text-blue-900 hover:underline w-fit cursor-pointer text-sm font-bold"
            >
              Let's Start_
            </Link>
          </div>
          <div data-aos="fade-up-left">
            <img
              src="https://st4.depositphotos.com/4285885/40339/i/450/depositphotos_403391408-stock-photo-vocabulary-text-black-blue-grungy.jpg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-down-right"
            className="flex justify-center items-center"
          >
            <img className="h-80" src={img1} alt="" />
          </div>
          <div data-aos="fade-up" className="flex flex-col justify-center">
            <h1 className="text-2xl lg:text-3xl font-bold"> Our Mission</h1>
            <ul className="mt-5">
              <li>
                <strong>Personalized Learning: </strong>Tailored vocabulary
                exercises and quizzes that adapt to the user's skill level and
                progress, ensuring a customized learning experience.
              </li>
              <li>
                <strong>Interactive Tools: </strong> Fun and engaging
                activities, such as flashcards, games, and challenges, that
                encourage active participation and make learning enjoyable.
              </li>
              <li>
                <strong>Accessible Anywhere: </strong>A user-friendly platform
                accessible on any device, enabling learners to practice and
                expand their vocabulary anytime and anywhere.
              </li>
              <li>
                <strong>Consistent Updates: </strong>Regularly updated content
                and features, ensuring that users have access to the latest
                trends, words, and learning techniques.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
