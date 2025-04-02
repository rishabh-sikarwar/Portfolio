import React from "react";
import Header from "./components/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div id="main">
        <div className="bg-[#0a0a0a]">
          <div id="home">
            <Page1 />
          </div>
              
          <Page2 />

          <div id="about">
            <Page6 />
          </div>

          <Page3 />

          <div id="tools">
            <Page5 />
          </div>
          <div id="work">
            <Page4 />
          </div>

          <div id="contact">
            <Page7 />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
