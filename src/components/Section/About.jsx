import React from "react";
import { aboutCardData } from "../../config/config";

function About() {
  return (
    <div className="min-h-screen w-full bg-gray-900 py-16 p-5 md:p-16">
      <div className="flex flex-col w-full items-center">
        <h1
          className="text-5xl font-extrabold text-gray-100 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          By <span className="text-primary">Developers</span> for{" "}
          <span className="text-primary">Developers</span>
        </h1>
        <p
          className="text-center text-lg text-gray-500 mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          praesentium non, aliquid maxime quidem reiciendis eaque facere eum
          porro voluptas aut dolorum repellat ratione libero ipsa, modi dolorem
          temporibus? In!
        </p>

        {/* Cards */}
        <div
          className="mt-16 grid md:grid-cols-2 gap-12 gap-x-[270px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          {aboutCardData.map((about) => (
            <div
              key={about.id}
              className="cursor-pointer h-[280px] w-[280px] shadow-lg shadow-primary rounded-full flex flex-col items-center justify-center gap-5 odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300 ease-out"
            >
              <h1 className="text-primary text-5xl font-bold">{about.title}</h1>
              <p className="text-gray-500 text-xl">{about.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
