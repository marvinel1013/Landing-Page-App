import React, { useState } from "react";
import AppButton from "../components/button/AppButton";
import { links } from "../config/config";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../components/Menu/Menu";
import { Link } from "react-scroll";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
  };
  return (
    <div className="w-full fixed z-20 h-20 bg-gray-900 text-gray-100 px-5">
      <div className="w-full h-full flex items-center justify-between">
        {/* LOGO Section */}

        <h1 className=" font-extrabold text-3xl duration-300 hover:text-primary cursor-pointer">
          <Link to="home" duration={500} smooth={true}>
            marvineL
          </Link>
        </h1>

        {/* Links Section */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-12">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" capitalize cursor-pointer hover:text-primary duration-300 hover:scale-105"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button Section */}
        <div className="hidden md:flex">
          <AppButton title="Sign In" className="px-10 py-3" />
        </div>

        {/* Menu Icon Section */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          <GiHamburgerMenu size={30} />
        </div>
      </div>

      {/* Menu for Mobile Section */}

      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default NavBar;
