import { useState } from "react";
import Navbar  from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="backgroundContainer">
      {/* <Router> */}
      <div className="navbarMainApp">
        {/* <Navbar /> */}
       <Navbar/>
      </div>
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
