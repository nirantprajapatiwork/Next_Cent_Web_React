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
      <div className="max-w-[1200px] mx-auto h-24 flex items-center justify-between px-6">

        {/* Logo */}
        <img src={Logo} alt="logo" className="w-36" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-700">
          {navbarelement.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-[#4CAF4F]">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-[#4CAF4F]">Login</button>

          <button className="bg-[#4CAF4F] text-white px-5 py-2 rounded">
            Signup
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white w-full py-8 ">
          <ul className="flex flex-col items-center gap-6 text-gray-700">
            {navbarelement.map((item, index) => (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            ))}
            
            <button className="text-[#4CAF4F]">Login</button>

            <button className="bg-[#4CAF4F] text-white px-6 py-2 rounded">
              Signup
            </button>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;