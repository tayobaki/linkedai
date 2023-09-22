import { timeline } from "@/constants/data";
import React from "react";

export default function Timeline() {
  return (
    <section id="timeline" className="py-10 border-t border-white/10  bg-indigo">
      <h1
        className=" text-center text-3xl font-bold
      "
      >
        Timeline
      </h1>
      <p className=" text-center mt-3 max-w-xs mx-auto text-sm leading-6">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>

      <div className="mt-10 lg:px-10 relative space-y-6 max-w-6xl mx-auto ">
        {timeline.map((item) => (
          <div
            key={item.title}
            className="flex items-end h-full lg:gap-36 gap-5"
          >
            <div className=" lg:order-1 order-2 max-w-md lg:text-right ">
              <h1
                className=" md:text-3xl text-xs font-bold text-violet
            "
              >
                {item.title}
              </h1>
              <p className="mt-2 md:text-sm  text-xs">{item.p}</p>
              <div className="lg:hidden block lg:order-3">
                <span className=" text-xs  font-bold md:text-2xl text-violet">
                  {item.date}
                </span>
              </div>
            </div>

            <div className="flex lg:order-2  flex-col gap-2  items-center w-fit flex-shrink-0">
              <div className=" bg-violet rounded-full  h-[77px] gap-2 w-0.5" />
              <div className="">
                <span className=" w-5 h-5 bg-violet rounded-full flex justify-center items-center">
                  {item.number}
                </span>
              </div>
            </div>

            <div className="hidden order-1 lg:block lg:order-3">
              <span className="  font-bold text-2xl text-violet">
                November 18, 2023
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


