import React from "react";

const SecondTestimonial = () => {
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
          <p className="text-[#14274A] text-[20px] font-semibold max-w-[600px] text-center">
            I can confidently say that Luxury Hotel exceeded all my
            expectations, and I cannot wait to return for another unforgettable
            experience. If you are looking for a luxurious and unforgettable
            hotel stay.
          </p>
          <p className="text-[#14274A] font-normal text-base">
            {" "}
            Mr. and Mrs. George, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondTestimonial;
