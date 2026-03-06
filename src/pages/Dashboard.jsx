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

import rafiki from "../images/rafiki.png";

import Cards from "../images/Cards.png";
import Click from "../images/Click.png";
import Hands from "../images/Hands.png";
import Members from "../images/Members.png";

import Pana from "../images/pana.png";

import Tesla from "../images/Tesla.png";
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
  const clientImages2 = [Logo_01, Logo01, Logo02, Logo03, Logo04, Logo05];

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

  const helpingData = [
    {
      id: 1,
      icon: Members,
      number: "2,245,341",
      label: "Members",
    },
    {
      id: 2,
      icon: Hands,
      number: "46,328",
      label: "Clubs",
    },
    {
      id: 3,
      icon: Click,
      number: "828,867",
      label: "Event Bookings",
    },
    {
      id: 4,
      icon: Cards,
      number: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-[#F5F7FA] py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#4D4D4D] leading-tight">
              Lessons and insights <br />
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>

            <p className="text-[#717171] mt-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="mt-6 text-[16px] font-medium bg-[#4CAF4F] text-white px-6 py-3 rounded hover:bg-green-600 transition">
              Register
            </button>
          </div>

          <div>
            <img
              src={illistrate}
              alt="dashboard illustration"
              className="w-[300px] sm:w-[350px] md:w-[400px] mx-auto"
            />
          </div>
        </div>
      </section>
     <section className="w-full flex justify-center items-center bg-[#F5F7FA] pb-3 gap-2">
  <div className="bg-[#4CAF4F] rounded-full h-2.5 w-2.5"></div>
  <div className="bg-[#4CAF4F] rounded-full h-2.5 w-2.5 opacity-50"></div>
  <div className="bg-[#4CAF4F] rounded-full h-2.5 w-2.5 opacity-50"></div>
</section>

      {/* CLIENT SECTION */}
      <section className="w-full bg-white py-16">
        <div className="text-center px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="mt-2 text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 place-items-center px-6">
          {clientImages.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="client logo"
              className="h-10 w-10 object-contain"
            />
          ))}
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="w-full bg-white py-16">
        <div className="text-center px-4">
          <h1 className="font-semibold text-[#4D4D4D] text-2xl sm:text-3xl md:text-4xl max-w-[542px] mx-auto">
            Manage your entire community in a single system
          </h1>

          <p className="py-2 text-[#717171]">Who is Nextcent suitable for?</p>
        </div>

        <div className="max-w-[1200px] mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <img src={card.icon} alt="" className="w-16 h-16 mx-auto" />

              <h2 className="font-bold text-xl md:text-2xl mt-4 text-[#4D4D4D]">
                {card.title}
              </h2>

              <p className="text-[#717171] mt-2 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PIXELGRADE SECTION */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          <div className="flex justify-center">
            <img
              src={rafiki}
              alt="illustration"
              className="max-w-[442px] w-full"
            />
          </div>

          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-[36px] leading-snug text-[#4D4D4D]">
              The unseen of spending three years at Pixelgrade
            </h1>

            <p className="text-[#717171] mt-4 text-sm sm:text-base leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            </p>

            <button className="text-white mt-6 bg-[#4CAF4F] px-6 py-3 rounded-md hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* HELPING LOCAL SECTION */}
      <section className="w-full bg-[#F5F7FA] py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
          <div>
            <h1 className="font-semibold text-3xl md:text-[36px] text-[#4D4D4D]">
              Helping a local <br />
              <span className="text-[#4CAF4F]">business reinvent itself</span>
            </h1>

            <p className="text-[#717171] mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {helpingData.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.icon} alt="" className="w-10 h-10" />

                <div>
                  <h2 className="text-xl font-bold text-[#4D4D4D]">
                    {item.number}
                  </h2>

                  <p className="text-[#717171] text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          <div className="flex justify-center">
            <img
              src={Pana}
              alt="illustration"
              className="max-w-[442px] w-full"
            />
          </div>

          <div>
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-[36px] leading-snug text-[#4D4D4D]">
              How to design your site footer like we did
            </h1>

            <p className="text-[#717171] mt-4 text-sm sm:text-base leading-6">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>

            <button className="text-white mt-6 bg-[#4CAF4F] px-6 py-3 rounded-md hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/*Design Footer Like This Section */}

      <section className="w-full bg-[#F5F7FA] py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
          <div className="flex justify-center">
            <img
              src={Tesla}
              alt="illustration"
              className="max-w-[442px] w-full"
            />
          </div>

          <div>
            <p className="text-[#717171] mt-4 text-sm sm:text-base leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h1 className="font-semibold text-[#4CAF4F] mt-4">Tim Smith</h1>
            <p className="text-[#717171] mt-4 text-sm sm:text-base leading-6">
              British Dragon Boat Racing Association
            </p>

            <div className="flex flex-row justify-between items-center mt-8">
              {clientImages2.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="client logo"
                  className="h-10 w-10 object-contain"
                />
              ))}
              <button className="text-[#4CAF4F] font-semibold">
                Meet all the customer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
