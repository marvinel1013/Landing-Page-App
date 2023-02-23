import React from "react";
import NavBar from "./layout/NavBar";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="grid grid-rows-[80px_auto_200px]">
      {/* NavBar Layout */}
      <div>
        <NavBar />
      </div>

      {/* Main Layout */}
      <div>
        <Main />
      </div>

      {/* Footer Layout */}
      <div className="bg-blue-300">
        <Footer />
      </div>
    </div>
  );
}

export default App;
