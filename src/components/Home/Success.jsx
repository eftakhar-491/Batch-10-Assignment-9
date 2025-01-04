import React from "react";
import CountUp from "react-countup";

export default function Success() {
  return (
    <>
      <section className="my-20 overflow-x-hidden">
        <h1
          data-aos="fade-up"
          className=" text-2xl lg:text-4xl font-bold text-center"
        >
          Success History
        </h1>
        <p
          data-aos="fade-up"
          className="mt-1 text-center text-sm font-semibold"
        >
          This is our success with our best performance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-11/12 mx-auto lg:w-4/5 gap-6 mt-8">
          <div data-aos="fade-right" className="flex-1 w-fit stats shadow">
            <div className="stat">
              <div className="stat-title">Total User</div>
              <div className="stat-value">
                <CountUp enableScrollSpy={true} start={0} end={3450} />
              </div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <div data-aos="zoom-in" className="stats shadow flex-1 w-fit">
            <div className="stat">
              <div className="stat-title">Total Lesson</div>
              <div className="stat-value">
                <CountUp enableScrollSpy={true} start={0} end={10}></CountUp>
              </div>
              <div className="stat-desc">we updating Lesson in every month</div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex-1 w-fit stats shadow">
            <div className="stat">
              <div className="stat-title">Total vocabulary</div>
              <div className="stat-value">
                <CountUp
                  enableScrollSpy={true}
                  suffix="+"
                  start={0}
                  end={200}
                />
              </div>
              <div className="stat-desc">We add new word's continusly</div>
            </div>
          </div>
          <div data-aos="fade-left" className="w-fit flex-1 stats shadow">
            <div className="stat">
              <div className="stat-title">Tutorial Count</div>
              <div className="stat-value">
                <CountUp
                  enableScrollSpy={true}
                  suffix="+"
                  start={0}
                  end={500}
                />
              </div>
              <div className="stat-desc">we add new tutorial in every week</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
