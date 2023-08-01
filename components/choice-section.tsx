import Image from "next/image";
import React from "react";

const ChoiceSection = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col justify-center items-center pt-[120px] pb-[50px]">
          <p className="text-[#292929] font-bold text-[18px]">Our Room</p>
          <h4 className="font-bold text-[#292929] text-[35px]">
            A World of <span className="text-[#E0B973]">Choice</span>
          </h4>
          <p className="text-[16px] text-[#292929] font-medium max-w-[520px] text-center">
            Welcome to our exquisite Deluxe Single Room, where comfort, luxury,
            and modern amenities await you. Whether you are traveling for
            business or leisure, our hotel promises a memorable and rejuvenating
            stay in this thoughtfully designed and well-appointed space.
          </p>
        </div>
        {/* image-grid */}
        <div className="flex justify-between items-center pb-12">
          <div className="flex flex-col gap-3">
            <div>
              <Image
                height={400}
                width={400}
                src={"/images/room-views.png"}
                alt="rooms"
              />
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-base text-[#292929]"
              >
                3 GUESTS
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-semibold text-[20px] text-[#292929]"
              >
                Room with View
              </p>
            </div>

            <div>
              <Image
                height={400}
                width={400}
                src={"/images/small-rooms.png"}
                alt="small-room"
              />
              <p className="font-medium text-base text-[#292929]">1 GUESTS</p>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-semibold text-[20px] text-[#292929]"
              >
                Small Room
              </p>
            </div>
          </div>

          <div>
            <Image width={476} height={476} src={"/images/luxury.png"} alt="" />
            <p
              style={{ fontFamily: "Inter" }}
              className="font-medium text-base text-[#292929]"
            >
              6 GUESTS
            </p>
            <p
              style={{ fontFamily: "Inter" }}
              className="font-semibold text-[20px] text-[#292929]"
            >
              Luxury
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <Image
                height={400}
                width={400}
                src={"/images/apartment.png"}
                alt="rooms"
              />
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-base text-[#292929]"
              >
                5 GUESTS
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-semibold text-[20px] text-[#292929]"
              >
                Appartment
              </p>
            </div>

            <div>
              <Image
                height={400}
                width={400}
                src={"/images/small-rooms.png"}
                alt="small-room"
              />
              <p className="font-medium text-base text-[#292929]">4 GUESTS</p>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-semibold text-[20px] text-[#292929]"
              >
                Medium Room
              </p>
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[35px] bg-[#E0B973] rounded-lg flex items-center justify-center mx-auto">
          <p className="font-normal text-[14px] text-white">SEE ROOMS</p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceSection;
