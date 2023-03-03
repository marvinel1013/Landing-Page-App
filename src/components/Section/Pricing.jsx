import React from "react";
import { pricingData } from "../../config/config";
import { FaPlusCircle } from "react-icons/fa";
import AppButton from "../button/AppButton";

function Pricing() {
  return (
    <div className="min-h-screen w-full bg-gray-900 p-5 md:p-10 flex flex-col items-center">
      <div className="mt-16 text-center md:px-18">
        <h1
          className="md:text-5xl text-4xl font-extrabold tracking-wide text-gray-100"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Pricing
        </h1>
        <p
          className="text-lg text-gray-500 mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          quibusdam debitis quas et commodi cupiditate distinctio pariatur eius
          quis minima nam, nemo unde aperiam repudiandae deserunt ratione. At,
          suscipit alias. Nam, nemo unde aperiam repudiandae deserunt ratione.
          At, suscipit alias.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-12 md:px-20 px-5 mb-10 mt-28">
        {pricingData.map((price) => (
          <div
            data-aos="flip-right"
            data-aos-delay="400"
            key={price.id}
            className="bg-slate-100 rounded-xl overflow-hidden"
          >
            <div className="bg-secondary text-center text-gray-300 text-lg p-3">
              {price.title}
            </div>
            <div className="p-8 text-gray-500 text-lg md:text-xl flex flex-col gap-8 md:gap-10">
              <h2 className="md:text-2xl text-lg text-gray-700 font-bold">
                <span className="text-gray-900 text-4xl md:text-6xl font-bold">
                  {price.price}
                </span>
                /mo
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                amet id recusandae architecto nulla doloribus rerum aliquid,
                nostrum quaerat.
              </p>
              <ul className="md:mb-14 mb-8 flex flex-col gap-5 md:gap-10">
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <FaPlusCircle size={18} />
                  </span>
                  <p>Feature One</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <FaPlusCircle size={18} />
                  </span>
                  <p>Feature Two</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">
                    <FaPlusCircle size={18} />
                  </span>
                  <p>Feature Three</p>
                </li>
              </ul>
            </div>
            <AppButton
              title="Get Started"
              className="w-full rounded-none border-none p-5 text-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
