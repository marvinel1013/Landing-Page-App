import React from "react";
import AppButton from "../components/button/AppButton";
import { FaFacebook, FaTwitch, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  const icons = [
    {
      id: 1,
      icon: <FaFacebook size={25} />,
    },
    {
      id: 2,
      icon: <FaTwitter size={25} />,
    },
    {
      id: 3,
      icon: <FaTwitch size={25} />,
    },
    {
      id: 4,
      icon: <FaLinkedin size={25} />,
    },
  ];
  return (
    <div className="min-h-full w-full bg-gray-900 border-t-2 border-primary md:p-20 p-12 md:px-28 py-20 flex flex-col md:flex-row items-center justify-center gap-16">
      <div className="w-full h-full">
        <ul className="grid grid-cols-2 gap-10">
          {icons.map(({ id, icon }) => (
            <li
              data-aos="zoom-out-down"
              data-aos-delay="400"
              key={id}
              className="p-4 flex justify-center rounded-md shadow-md shadow-primary cursor-pointer text-gray-100 duration-300 hover:scale-105"
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full flex flex-col gap-10">
        <h1
          className="font-semibold text-primary text-center md:text-start text-lg md:text-xl"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <div
          className="flex flex-col md:flex-row items-center gap-5"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input
            type="text"
            placeholder="Daily newsletter..."
            className="w-full p-3 outline-none px-5 rounded-xl"
          />
          <AppButton title="Subscribe" className="p-2.5 w-full md:w-32" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
