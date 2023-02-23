import React from "react";
import { MdClose } from "react-icons/md";
import AppButton from "../button/AppButton";
import { links } from "../../config/config";
import { FaFacebook, FaTwitch, FaTwitter, FaLinkedin } from "react-icons/fa";

function Menu(props) {
  const { menuOpen, toggleMenu } = props;
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
    <div
      className={
        menuOpen
          ? "fixed w-full h-full left-0 top-0 bg-gray-900/70 backdrop-blur duration-500 ease-in"
          : ""
      }
    >
      {/* Content Menu Section */}
      <div
        className={
          menuOpen
            ? "fixed top-0 left-0 bg-gray-900 p-8 h-full w-4/5 shadow-lg shadow-primary duration-500 ease-in"
            : "fixed top-0 left-[-100%] bg-gray-900 p-5 h-full w-4/5 shadow-lg shadow-primary duration-500 ease-in"
        }
      >
        <div className="flex items-center justify-between">
          <h1
            onClick={toggleMenu}
            className=" font-extrabold text-2xl cursor-pointer"
          >
            marvineL
          </h1>
          <span className=" cursor-pointer" onClick={toggleMenu}>
            <MdClose size={28} />
          </span>
        </div>

        {/* Button */}
        <AppButton title="Sign In" className="w-full py-3 mt-20" />

        {/*List of Links */}
        <ul className="flex flex-col gap-3 mt-12 text-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize tracking-wider text-xl cursor-pointer font-semibold"
            >
              {link}
            </li>
          ))}
        </ul>

        {/*Social Med Links  */}

        <ul className="grid grid-cols-2 gap-5 mt-10">
          {icons.map(({ id, icon }) => (
            <li
              key={id}
              className="shadow-md shadow-primary p-5 flex justify-center rounded-md cursor-pointer"
            >
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
