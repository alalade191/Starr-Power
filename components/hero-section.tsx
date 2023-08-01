import React from "react";
import Header from "./header";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const handleScroll = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const footer = document.getElementById("bottom") as HTMLElement;
    footer.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full bg-no-repeat bg-cover h-screen bg-[center] relative grad">
      <Header />
      <div className="flex flex-col w-[80%] mx-auto pt-[140px] ">
        <div className="py-3">
          <h3 className="font-medium text-white text-2xl">WELCOME TO </h3>
          <h2
            style={{ fontFamily: "Adobe Garamond Pro" }}
            className="font-bold text-white text-[80px] text-6xl"
          >
            LUXURY
          </h2>
          <h3 className="font-bold text-white text-2xl">HOTELS</h3>
          <p className="font-medium text-base text-white max-w-[330px]">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
      </div>
      <div className="w-[180px] h-[50px] rounded-lg bg-[#E0B973] text-white flex items-center justify-center mx-auto mt-[120px]">
        <div className="flex gap-2">
          <Image
            height={30}
            width={30}
            src={"/images/booking.png"}
            alt="booking"
          />
          <p className="font-bold text-lg">BOOK NOW</p>
        </div>
      </div>
      <Link
        href="#bottom"
        onClick={handleScroll}
        className="flex flex-col items-center justify-center pt-16 "
      >
        <p className="text-center font-bold text-xl text-white">Scroll</p>
        <Image height={40} width={40} src={"/images/scroll.png"} alt="scroll" />
      </Link>
    </div>
  );
};

export default HeroSection;
