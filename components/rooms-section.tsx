import Image from "next/image";
import React from "react";
interface Irooms {
  header: string;
  para: string;
  image: string;
}
function RoomSection() {
  const rooms: Irooms[] = [
    {
      header: "Luxury redefined",
      para: "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
      image: "/images/luxury-redefined.png",
    },
    {
      header: "Leave your worries in the sand",
      para: "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
      image: "/images/beach.png",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex flex-col gap-[30px]">
        <p className="font-normal text-2xl text-center pt-[60px]">
          All our room types are including complementary breakfast
        </p>
        {rooms.map((items) => (
          <div key={items.header} className="">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center justify-between">
                <div className="w-[3px] h-[168px] bg-[#14274A]"></div>
                <div className="flex flex-col gap-2">
                  <h3
                    style={{ fontFamily: "Adobe Garamond Pro" }}
                    className="font-bold text-[25px] max-w-[300px]"
                  >
                    {items.header}
                  </h3>
                  <p className="text-[#14274A] text-sm max-w-[310px]">
                    {items.para}
                  </p>
                  <div className="w-[120px] h-[35px] bg-[#E0B973] rounded-lg flex items-center justify-center">
                    <p className="font-normal text-[14px] text-white">
                      EXPLORE
                    </p>
                  </div>
                </div>
              </div>
              <Image height={300} width={500} src={items.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomSection;
