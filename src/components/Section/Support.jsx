import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdSupportAgent, MdComputer } from "react-icons/md";
import AppButton from "../button/AppButton";

function Support() {
  const cardsData = [
    {
      id: 1,
      title: "Technical",
      icon: <MdComputer size={25} />,
    },
    {
      id: 2,
      title: "Sales",
      icon: <MdSupportAgent size={25} />,
    },
    {
      id: 3,
      title: "General",
      icon: <BsPersonFill size={25} />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-300 p-7 md:p-20">
      <div className="h-full gap-40 w-full flex flex-col items-center">
        <div className="text-center" data-aos="fade-down" data-aos-delay="400">
          <h1 className="md:text-5xl text-4xl font-extrabold tracking-wide">
            Support
          </h1>
          <p className="text-xl text-gray-600 mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            doloribus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 md:gap-5 gap-14 mt-[-40px]">
          {cardsData.map((card) => (
            <div
              data-aos="flip-down"
              data-aos-delay="400"
              key={card.id}
              className="bg-gray-900 rounded-xl shadow-lg shadow-primary p-7 pb-12"
            >
              <div className="bg-primary p-3 w-fit rounded-full mt-[-50px] text-secondary">
                {card.icon}
              </div>
              <h2 className="text-gray-100 font-bold text-xl md:text-2xl my-5">
                {card.title}
              </h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi aspernatur dolores odit nostrum? Nesciunt alias
                laborum culpa.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-12 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <AppButton
          title="Contact Us"
          className="py-4 w-4/5 md:w-2/5 hover:scale-105 hover:bg-primary hover:text-secondary font-bold"
        />
      </div>
    </div>
  );
}

export default Support;
