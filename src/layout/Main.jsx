import React from "react";
import About from "../components/Section/About";
import Home from "../components/Section/Home";
import Services from "../components/Section/Services";

function Main() {
  return (
    <div>
      {/* Home Section */}
      <div name="home">
        <Home />
      </div>

      {/* Services Section */}
      <div name="services">
        <Services />
      </div>

      {/* About Section */}
      <div name="about">
        <About />
      </div>
    </div>
  );
}

export default Main;
