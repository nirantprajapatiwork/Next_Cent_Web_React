import React from "react";
import Logo from "../images/Logo_White.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#263238] text-white py-16">
      <div className="max-w-300 mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Container */}
        <div className="space-y-6">
          <img src={Logo} alt="logo" className="w-40" />

          <p className="text-sm text-white">
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
        </div>

        {/* Right Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay up to date</h3>

            <div className="flex bg-[#455A64] rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-4 py-2 text-sm outline-none w-full"
              />
              <button className="px-4 bg-[#4CAF4F]">→</button>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;