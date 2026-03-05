import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navbarelement = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <section className="w-full bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <img src={Logo} alt="logo" className="w-32 md:w-36" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          {navbarelement.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#4CAF4F] transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="text-[#4CAF4F] font-medium">Login</button>

          <button className="bg-[#4CAF4F] text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
            Signup
          </button>
        </div>

        {/* Mobile / Tablet Menu Icon */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden bg-white w-full transition-all duration-300 ${
          menu ? "max-h-[400px] py-8" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium">

          {navbarelement.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#4CAF4F]">
              {item}
            </li>
          ))}

          <button className="text-[#4CAF4F]">Login</button>

          <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded-md">
            Signup
          </button>

        </ul>
      </div>
    </section>
  );
};

export default Navbar;