import React from "react";
import { servicesData } from "../../config/config";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Services() {
  return (
    <div className="w-full min-h-screen bg-slate-300">
      <div className="w-full h-full flex flex-col items-center gap-5 md:p-20 p-5 py-10">
        <h1 className="md:text-5xl text-4xl font-extrabold tracking-wide">
          Services
        </h1>
        <p className="md:text-xl text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maxime aliquam quos culpa nesciunt commodi ducimus!
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-16 md:mt-20">
          {servicesData.map((service) => (
            <div key={service.id} className="h-40 bg-gray-900 p-5 rounded-lg">
              <div className="text-primary flex items-center gap-5">
                <IoIosArrowDroprightCircle size={28} />
                <p className="font-bold text-lg">{service.title}</p>
              </div>
              <div className="md:p-4 p-2 md:px-12 text-gray-100 md:text-lg">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
