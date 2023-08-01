import React from "react";

const FirstTestimonial = () => {
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
            I recently had the most wonderful stay at Luxury Hotel. From the
            moment I stepped into the elegant lobby, I was greeted with warm
            smiles and impeccable hospitality. The hotel luxurious and
            well-appointed rooms provided the perfect retreat after a day of
            exploration in the city.
          </p>
          <p className="text-[#14274A] font-normal text-base">
            {" "}
            Mr. and Mrs. Baxter, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstTestimonial;
