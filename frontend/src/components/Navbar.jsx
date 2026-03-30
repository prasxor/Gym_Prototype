import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-bold">My App</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-500">Pages</li>
          <li className="cursor-pointer hover:text-blue-500">Account</li>

          {/* Dropdown */}
          <li className="relative group">
            <span className="cursor-pointer">Blocks ▾</span>

            <ul className="absolute left-0 top-6 hidden group-hover:block bg-white shadow-lg rounded p-2 w-40">
              <li className="p-2 hover:bg-gray-100">Hero</li>
              <li className="p-2 hover:bg-gray-100">Features</li>
              <li className="p-2 hover:bg-gray-100">Testimonials</li>
              <li className="p-2 hover:bg-gray-100">Ecommerce</li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-blue-500">Docs</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-2">
          <button className="px-3 py-1 bg-blue-500 text-white rounded">
            Get Started
          </button>
          <button className="px-3 py-1 border rounded">Log In</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-3 md:hidden">
          <span>Pages</span>
          <span>Account</span>
          <span>Blocks</span>
          <span>Docs</span>

          <div className="flex gap-2 mt-2">
            <button className="w-full bg-blue-500 text-white py-1 rounded">
              Get Started
            </button>
            <button className="w-full border py-1 rounded">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}