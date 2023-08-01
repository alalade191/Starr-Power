import React from "react";

const ThirdTestimonial = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3
            style={{ fontFamily: "Adobe Garamond Pro" }}
            className="text-[#14274A] text-[40px] font-bold"
          >
            Testimonials
          </h3>
          <p className="text-[#14274A] text-[20px] font-semibold max-w-[600px] mx-auto">
            The staff went above and beyond to ensure every aspect of my stay
            was delightful. Their attention to detail and willingness to
            accommodate any request made me feel like a valued guest throughout
            my visit.
          </p>
          <p className="text-[#14274A] font-normal text-base">
            {" "}
            Mr. and Mrs. Eric, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdTestimonial;
