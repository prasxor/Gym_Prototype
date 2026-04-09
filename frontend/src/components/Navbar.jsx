import { useState } from "react";
import whatsappIcon from "../assets/whatsappIcon.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-5 rounded-4xl px-5 border w-2/3 z-50 border-gray-400 backdrop-blur-md bg-white/30 h-16 ">
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-bold">BeastMode Fitness</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <a href="#HomePage">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
          </a>
          <a href="#featuresSection">
            <li className="cursor-pointer hover:text-blue-500">Features</li>
          </a>
          <a href="#PricingSection">
            <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          </a>
          <a href="#LocationSection">
            <li className="cursor-pointer hover:text-blue-500">Location</li>
          </a>
          {/* <li className="cursor-pointer hover:text-blue-500">Account</li> */}

          {/* Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer">More ▾</span>

            <ul className="absolute left-0 top-8  opacity-0 group-hover:opacity-100 transition shadow-lg rounded-3xl p-2 w-40 bg-white  border-gray-400">
              {/* <li className="p-2 hover:bg-gray-100">Trainers</li> */}
              <a href="#TrainerSection">
                <li className="p-2 cursor-pointer hover:text-blue-500">
                  Trainers
                </li>
              </a>
              <a href="#gallery">
                <li className="p-2 cursor-pointer hover:text-blue-500">
                  Gallery
                </li>
              </a>
              <a href="#testimonialsSection">
                <li className="p-2 cursor-pointer hover:text-blue-500">
                  Testimonials
                </li>
              </a>
            </ul>
          </li>
        </ul>

        {/* Buttons */}
        <a href="https://wa.me/91xxxxxxxxxxx?text=I%20want%20to%20join%20your%20gym" target="_blank" className="flex px-4 gap-2 flex-row h-12 bg-[#25d366] text-black rounded-3xl justify-evenly items-center">
          <img src={whatsappIcon} alt="" className="w-7" />
          <button className="py-1 flex flex-row">Join Now</button>
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-300">
          <a href="#HomePage" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Home</span>
          </a>
          <a href="#featuresSection" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Features</span>
          </a>
          <a href="#PricingSection" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Pricing</span>
          </a>
          <a href="#LocationSection" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Location</span>
          </a>
          <a href="#TrainerSection" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Trainers</span>
          </a>
          <a href="#gallery" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Gallery</span>
          </a>
          <a href="#testimonialsSection" onClick={() => setOpen(false)}>
            <span className="cursor-pointer hover:text-blue-500">Testimonials</span>
          </a>

          <a
            href="https://wa.me/91xxxxxxxxxxx?text=I%20want%20to%20join%20your%20gym"
            target="_blank"
            className="mt-2 flex px-4 gap-2 flex-row h-12 bg-[#25d366] text-black rounded-3xl justify-center items-center"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
