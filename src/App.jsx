import React from "react";
import NavBar from "./layout/NavBar";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <div className="grid grid-rows-[80px_auto_300px] ">
      {/* NavBar Layout */}
      <div>
        <NavBar />
      </div>

      {/* Main Layout */}
      <div>
        <Main />
      </div>

      {/* Footer Layout */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
