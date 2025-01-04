import React from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import bgf from "../../assets/bgimg.jpg";
import flogo from "../../assets/logo.png";
export default function Footer() {
  AOS.init();
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgf})` }}
        className="mt-24 bg-cover bg-center py-10 mb-0 overflow-hidden"
      >
        <footer
          data-aos="fade-up"
          className="lg:w-4/5 w-11/12 mx-auto footer text-base-content p-10"
        >
          <aside data-aos="fade-right">
            <img src={flogo} alt="" />
            <p data-aos="fade-right">
              <span className="text-xl font-bold">Word_By</span>
              <br />
              <span className="font-bold"> Address:</span> 87/A UTX Road, Dhaka,{" "}
              <br />
              <span className="font-bold"> Email:</span> contact@wordby.com
            </p>
          </aside>
          <nav data-aos="fade-up">
            <h6 data-aos="fade-up" className="footer-title">
              Services
            </h6>
            <Link data-aos="fade-up" className="link link-hover">
              French Language
            </Link>
            <Link data-aos="fade-up" className="link link-hover">
              French vocabulary
            </Link>
          </nav>
          <nav data-aos="fade-up">
            <h6 data-aos="fade-up" className="footer-title">
              Social Link's
            </h6>
            <Link data-aos="fade-up" className="link link-hover">
              FaceBook
            </Link>
            <Link data-aos="fade-up" className="link link-hover">
              Instagram
            </Link>
            <Link data-aos="fade-up" className="link link-hover">
              YouTube
            </Link>
          </nav>
          <nav data-aos="fade-up">
            <h6 data-aos="fade-up" className="footer-title">
              Legal
            </h6>
            <Link data-aos="fade-up" className="link link-hover">
              Terms of use
            </Link>
            <Link data-aos="fade-up" className="link link-hover">
              Privacy policy
            </Link>
            <Link data-aos="fade-up" className="link link-hover">
              Cookie policy
            </Link>
          </nav>
        </footer>
        <hr />
        <p className="text-center mt-4 font-bold">
          All Rights Reserve @Word_By
        </p>
      </section>
    </>
  );
}
