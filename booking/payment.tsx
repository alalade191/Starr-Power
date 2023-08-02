import Date from "@/components/date-input";
import Image from "next/image";
import React from "react";
import { TimeInput } from "@mantine/dates";
import { Select } from "@mantine/core";
import Time from "@/components/time-input";
import Link from "next/link";

const Payment = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
          <div className="flex flex-col">
            <div className="flex gap-2 items-center pt-[50px]">
              <figure>
                <Image
                  height={20}
                  width={20}
                  src={"/images/arrow.png"}
                  alt="arrow"
                />
              </figure>
              <h3 className="font-semibold text-[40px] text-[#222222]">
                Book Room
              </h3>
            </div>
            <p className="font-normal text-sm text-[#4F4F4F] pl-[30px]">
              <span className="text-[#E0B973]">Rooms </span>/{" "}
              <span className="text-[#E0B973]">Single Room</span> / Book Room
            </p>
          </div>
          {/* Client Information */}
          <div className="flex flex-col gap-12">
            <div>
              <h4
                style={{ fontFamily: "Inter" }}
                className="font-medium text-[#4F4F4F] text-[25px] py-6"
              >
                Contact Information
              </h4>
              <div className="flex flex-col gap-4">
                <div className="w-[350px] flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-[#14274A] text-xl">
                      First Name
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
                    <label htmlFor="name" className="text-[#14274A] text-xl">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      placeholder="Last Name e.g John, Mary"
                      className=" font-sm font-normal h-[40px] outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
                    />
                  </div>
                </div>

                <div className="w-[350px] flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-[#14274A] text-xl">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email@gmail.com"
                      className=" font-sm font-normal h-[40px] outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-[#14274A] text-xl">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      placeholder="+1-(0000 000 0000)"
                      className=" font-sm font-normal h-[40px] outline-none border-[2px] py-2 px-3 rounded-md border-[rgba(20, 39, 74, 0.15)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4
                style={{ fontFamily: "Inter" }}
                className="font-medium text-[#4F4F4F] text-[25px] py-6"
              >
                Other Information
              </h4>
              <div className="flex flex-col gap-4">
                <div className="w-[350px] flex items-center gap-6">
                  <div className="w-[350px] flex flex-col gap-3">
                    <label htmlFor="date" className="text-[#14274A] text-xl">
                      Check in date
                    </label>
                    <Date />
                  </div>

                  <div className="w-[350px] flex flex-col gap-3">
                    <label htmlFor="date" className="text-[#14274A] text-xl">
                      Check out date
                    </label>
                    <Date />
                  </div>
                </div>

                <div className="w-[350px] flex items-center gap-6">
                  <div className="w-[350px] flex flex-col gap-3">
                    <label htmlFor="date" className="text-[#14274A] text-xl">
                      Convenient Time
                    </label>
                    <Time />
                  </div>

                  <div className="w-[350px] flex flex-col gap-3">
                    <label htmlFor="date" className="text-[#14274A] text-xl">
                      Guest
                    </label>
                    <Select
                      label=""
                      placeholder="Select number of guests"
                      style={{ width: "220px" }}
                      data={[
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="checkout"
              className="bg-[#E0B973] text-white font-bold text-lg px-3 py-2 rounded-md text-center max-w-[470px]"
            >
              <span className="flex items-center justify-center gap-3">
                Pay with{" "}
                <Image
                  height={80}
                  width={80}
                  src={"/images/paypal.png"}
                  alt=""
                />{" "}
              </span>
            </Link>
          </div>
        </div>
        {/* selection */}
        <div>
          <div className="max-w-[470px]">
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-[#4F4F4F] text-[25px] py-2"
            >
              Selected Room
            </h4>
            <div className="h-[5px] w-full bg-[#EFE7EC]"></div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between py-3">
                <h4
                  style={{ fontFamily: "Inter" }}
                  className="font-semibold text-lg text-[#4F4F4F]"
                >
                  Single Room
                </h4>
                <Image
                  height={20}
                  width={20}
                  src={"/images/delete.png"}
                  alt="delete"
                />
              </div>
              <figure>
                <Image
                  height={350}
                  width={200}
                  src={"/images/payment-room.png"}
                  alt="double-room"
                  className="w-full h-[200px] overflow-hidden rounded-lg"
                />
              </figure>
              <p className="max-w-[500px] font-normal text-base text-[#000000] py-3">
                Escape to a world of serenity and elegance with our Single Room.
                Embrace the warmth of our hospitality and experience a memorable
                stay in our hotel. Book your room today and embark on a journey
                of relaxation and rejuvenation. We look forward to welcoming you
                with open arms.
              </p>
              <div className="flex items-center justify-between pb-3">
                <p
                  style={{ fontFamily: "Inter" }}
                  className="font-semibold text-base text-[#4F4F4F]"
                >
                  Avg/Night
                </p>
                <h4 className="font-bold text-xl text-[#4F4F4F]">$200.00</h4>
              </div>
              <div className="h-[4px] w-full bg-[#EFE7EC]"></div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-semibold text-base text-[#4F4F4F]"
                  >
                    Sub Total
                  </p>
                  <h4 className="font-bold text-base text-[#4F4F4F]">
                    $654.00
                  </h4>
                </div>

                <div className="flex items-center justify-between">
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-semibold text-base text-[#4F4F4F]"
                  >
                    Damages
                  </p>
                  <h4 className="font-bold text-base text-[#4F4F4F]">
                    $064.00
                  </h4>
                </div>

                <div className="flex items-center justify-between">
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-semibold text-base text-[#4F4F4F]"
                  >
                    VAT
                  </p>
                  <h4 className="font-bold text-base text-[#4F4F4F]">
                    $064.00
                  </h4>
                </div>
              </div>
              <div className="h-[4px] w-full bg-[#EFE7EC]"></div>
              <div className="flex items-center justify-between pt-3">
                <h4
                  style={{ fontFamily: "Inter" }}
                  className="font-bold text-xl text-[#4F4F4F]"
                >
                  Total
                </h4>
                <h4 className="font-bold text-xl text-[#4F4F4F]">$778.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
