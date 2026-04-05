import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="backgroundContainer min-h-screen flex flex-col">
      <Router>
        <div className="navbarMainApp">
          {/* <Navbar /> */}
          <Navbar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
