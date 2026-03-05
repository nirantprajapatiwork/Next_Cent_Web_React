import React from "react";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const navbarelement = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  return (
    <section className="w-full">
      <div className="w-full bg-[#F5F7FA] h-24 flex items-center justify-between px-8 lg:px-20">

        {/* Logo */}
        <img
          src={Logo}
          alt="company logo"
          className="w-36"
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700 font-light">
          {navbarelement.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-[#4CAF4F] transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#4CAF4F] font-medium">
            Login
          </button>

          <button className="bg-[#4CAF4F] text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
            Signup
          </button>
        </div>

      </div>
    </section>
  );
};

export default Navbar;