import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-[1fr_500px] py-14">
          <div className="bg-[#121212] h-[500px] flex flex-col gap-5 pl-[150px] justify-center">
            <div className="flex flex-col gap-3">
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-bold text-4xl text-white"
              >
                ABOUT US
              </h3>
              <div className="w-[140px] h-[3px] rounded-md bg-[#E0B973]"></div>
            </div>
            <p
              style={{ fontFamily: "Inter" }}
              className="font-medium text-base text-white max-w-[350px]"
            >
              Step into a world of opulence as you enter our meticulously
              designed lobby, adorned with exquisite artwork and breathtaking
              decor. Our beautifully appointed rooms and suites offer a fusion
              of contemporary design and traditional charm, providing the utmost
              in comfort and style. From indulgent bedding to state-of-the-art
              amenities, every detail has been carefully curated to elevate your
              stay to new heights.
            </p>
            <button className=" max-w-max bg-[#E0B973] flex items-center rounded-3xl justify-center">
              <p className="font-normal text-[14px] text-white  py-3 px-8">
                Explore
              </p>
            </button>
          </div>
          <figure className="h-[500px]">
            <Image
              height={600}
              width={6000}
              src={"/images/lounge.png"}
              alt="lounge"
              className="w-full h-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
