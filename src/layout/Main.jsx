import React from "react";
import About from "../components/Section/About";
import Home from "../components/Section/Home";
import Pricing from "../components/Section/Pricing";
import Services from "../components/Section/Services";
import Support from "../components/Section/Support";

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

      {/* Support Section */}
      <div name="support">
        <Support />
      </div>

      {/* Pricing Section */}
      <div name="pricing">
        <Pricing />
      </div>
    </div>
  );
}

export default Main;
