import React from "react";
import HeroImage from "../../image/hero.jpg";
import AppButton from "../button/AppButton";

function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-900 md:p-24 p-10 py-14">
      <div className="h-full w-full flex flex-col md:flex-row justify-evenly items-center md:gap-0 gap-16">
        <div className="text-center md:text-start">
          <p className="text-gray-400 font-semibold text-lg mb-4 md:text-2xl">
            Cheapest Hosting in the World.
          </p>
          <h1 className="md:text-7xl text-5xl font-extrabold text-white tracking-tight">
            <span className="text-primary">MARVINEL</span> Web Services
          </h1>
          <p className="text-gray-400 md:w-[80%] mt-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            facilis alias ut obcaecati dolore dicta aut sequi, repudiandae est
            provident.
          </p>
          <AppButton
            title="Sign Up"
            className="font-semibold py-3 md:w-2/4 w-full mt-10"
          />
        </div>
        <img
          src={HeroImage}
          alt="hero image"
          className="md:w-[450px] md:h-[450px] w-[300px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Home;
