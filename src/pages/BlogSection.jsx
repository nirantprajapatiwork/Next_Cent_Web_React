import React from "react";

import blog1 from "../images/image 18.png";
import blog2 from "../images/image 19.png";
import blog3 from "../images/image 20.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      id: 2,
      image: blog2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      id: 3,
      image: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
  <section className="w-full bg-white py-20">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-[600px] mx-auto">
      <h2 className="text-2xl md:text-[36px] font-semibold text-[#4D4D4D]">
        Caring is the new marketing
      </h2>

      <p className="text-[#717171] mt-4 text-sm leading-6">
        The Nexcent blog is the best place to read about the latest
        membership insights, trends and more. See who's joining the
        community, read about how our community are increasing their
        membership income and lot's more.
      </p>
    </div>

    {/* Blog Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative pb-28">

          {/* Image */}
          <img
            src={blog.image}
            alt=""
            className="rounded-lg w-full h-[240px] md:h-[260px] object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute left-1/2 bottom-12 -translate-x-1/2 
                          bg-[#F5F7FA] rounded-lg shadow-lg p-6 
                          w-[90%] sm:w-[85%] text-center">

            <h3 className="text-[#717171] font-semibold text-base md:text-lg leading-7">
              {blog.title}
            </h3>

            <p className="text-[#4CAF4F] mt-4 font-semibold cursor-pointer">
              Readmore →
            </p>

          </div>

        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default Blog;
