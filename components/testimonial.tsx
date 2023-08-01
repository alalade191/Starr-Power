import Image from "next/image";
import React from "react";
import { useState } from "react";
import FirstTestimonial from "./first-testimonial";
import SecondTestimonial from "./second-testimonial";
import ThirdTestimonial from "./third-tetimonial";

const Testimonial = () => {
  // eslint-disable-next-line react/jsx-key
  const list = [
    // eslint-disable-next-line react/jsx-key
    <FirstTestimonial />,
    // eslint-disable-next-line react/jsx-key
    <SecondTestimonial />,
    // eslint-disable-next-line react/jsx-key
    <ThirdTestimonial />,
  ];
  const [testimonial, setTestimonial] = useState(0);
  const add = () => {
    if (testimonial < list.length - 1) {
      setTestimonial((prev) => prev + 1);
    }
  };

  const sub = () => {
    if (testimonial > 0) {
      setTestimonial((prev) => prev - 1);
    }
    return;
  };
  return (
    <div className="w-full pt-[100px]">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          {/* <h3
            style={{ fontFamily: "Adobe Garamond Pro" }}
            className="text-[#14274A] text-[40px] font-bold"
          >
            Testimonials
          </h3>
          <p className="text-[#14274A] text-[20px] font-semibold">
            Calm, Serene, Retro – What a way to relax and enjoy
          </p>
          <p className="text-[#14274A] font-normal text-base">
            {" "}
            Mr. and Mrs. Baxter, UK
          </p> */}
          {list[testimonial]}
        </div>
        <div className="flex gap-3 items-center justify-center pt-2">
          <figure onClick={sub}>
            <Image
              height={30}
              width={30}
              src={"/images/pag-left.png"}
              alt="pagination"
            />
          </figure>
          <Image
            onClick={add}
            height={30}
            width={30}
            src={"/images/pag-right.png"}
            alt="pagination"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
