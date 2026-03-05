import React from "react";
import illistrate from "../images/Illustration.png";

import Logo_01 from "../images/Logo_01.png";
import Logo01 from "../images/Logo-1.png";
import Logo02 from "../images/Logo-2.png";
import Logo03 from "../images/Logo-3.png";
import Logo04 from "../images/Logo-4.png";
import Logo05 from "../images/Logo-5.png";
import Logo06 from "../images/Logo-6.png";
import icon from "../images/Icon.png";
import icon_01 from "../images/Icon_01.png";
import icon_02 from "../images/Icon_02.png";
const Dashboard = () => {
  const clientImages = [
    Logo_01,
    Logo01,
    Logo02,
    Logo03,
    Logo04,
    Logo05,
    Logo06,
  ];
  const cards = [
    {
      id: 1,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: icon,
    },
    {
      id: 2,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: icon_01,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: icon_02,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-[#F5F7FA] py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-[64px] leading-[76px] md:text-6xl font-semibold text-[#4D4D4D] ">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>

            <p className="text-[#717171] mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="mt-6 leading-6 text-[16px] font-medium bg-[#4CAF4F] text-white px-6 py-3 rounded-[4px] hover:bg-green-600 transition">
              Register
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0">
            <img
              src={illistrate}
              alt="dashboard illustration"
              className="w-[392px] h-[407px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* CLIENT SECTION */}
      <section className="w-full bg-white py-16">
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-11 text-[#4D4D4D]">
            Our Clients
          </h2>
          <p className="mt-2  leading-6 font-[16px] text-[#717171] font-light">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="max-w-[1152px] mx-auto mt-10 flex flex-col md:flex-row flex-wrap items-center justify-between px-6">
          {clientImages.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client logo"
              className="h-12 w-12 object-contain "
            />
          ))}
        </div>
      </section>

      {/*Cards Section*/}
      <section className="w-ful  bg-white py-10">
        <div className="text-center justify-center mx-auto">
          <h1 className="font-semibold font-[32px] text-[#4D4D4D] text-4xl sm:text-2xl md:text-4xl sm:text w-[542px] mx-auto leading-11">
            Manage your entire community in a single system
          </h1>
          <p className="mt-2 font-light text-[#717171] ">
            Who is Nextcent suitable for?
          </p>
        </div>

        <section className="w-full py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-lg p-6 text-center w-full md:w-[30%]"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="w-16 h-16 mx-auto "
                />

                <h2 className=" font-bold text-3xl mt-4 text-[#4D4D4D] leading-9">
                  {card.title}
                </h2>

                <p className="text-[#717171] mt-2 text-[14px]  leading-5">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
