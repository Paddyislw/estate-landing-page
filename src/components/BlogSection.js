import React from "react";
import blogImage1 from "../static/blogImage1.png";
import blogImage2 from "../static/blogImage2.png";
import blogImage3 from "../static/blogImage3.png";
import BlogCard from "./BlogCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BlogSection = () => {
  return (
    <div className="mt-16]">
      <p className="text-primary font-bold text-2xl mx-auto text-center border-b-[4px] border-primary pb-1 mb-6 w-24">
        Blogs
      </p>
      {/* <div className="flex justify-between  md:flex-col md:items-center md:space-y-4 lg:flex-wrap lg:gap-4 lg:items-center  md:flex"> */}
      <div className="flex justify-center">
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
                gap: "0rem",
                width: "80%",
              },
              1280:{
                perPage: 2,
                gap: "0rem",
              }
            },
            width: "80%",
            rewind: true,
            arrows: true,
            autoplay: true,
            interval: 2000,
            mediaQuery: "max",
          }}
        >
          {blogData.map((e, i) => (
            <SplideSlide key={i}>
              <BlogCard image={e.image} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

const blogData = [
  { image: blogImage1 },
  { image: blogImage2 },
  { image: blogImage3 },
  { image: blogImage1 },
  { image: blogImage2 },
];

export default BlogSection;
