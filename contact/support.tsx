import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-3 pt-[30px]">
          <h3
            style={{ fontFamily: "Inter" }}
            className="font-bold text-[#14274A] text-3xl"
          >
            We are here for you.
          </h3>
          <p className="font-normal text-lg text-[#14274A] max-w-[840px]">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </div>
        {/* input */}
        <div className="flex items-center justify-between pt-[50px]">
          <div className="w-[300px] text-lg font-medium flex flex-col gap-5">
            {/* <Input /> */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[#14274A] text-xl">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your name"
                className=" font-sm font-normal h-[40px] outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#14274A] text-xl">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className=" font-sm font-normal h-[40px] outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[#14274A] text-xl">
                Message
              </label>
              <textarea
                name="area"
                id="area"
                cols={26}
                rows={7}
                className="font-sm font-normal outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
              ></textarea>
            </div>
            <div className="bg-[#E0B973] text-white font-bold text-lg px-3 py-2 rounded-md text-center">
              Submit
            </div>
          </div>
          {/* location map */}
          <div className="flex flex-col gap-6">
            <figure>
              <Image
                height={400}
                width={400}
                src={"/images/location.png"}
                alt="company location"
              />
            </figure>
            <p className="font-normal text-lg max-w-[400px]">
              497 Evergreen Rd. Roseville, CA 95673 Phone: +44 345 678 903
              Email: luxury_hotels@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
