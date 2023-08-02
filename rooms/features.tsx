import Sliding from "@/components/carousel";
import DoubleRoom from "@/components/double-carousel";
import TwinsRoom from "@/components/twins";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Iroom {
  image: string;
  header: string;
  button: string;
  slider: any;
}
const RoomFeatures = () => {
  const room: Iroom[] = [
    {
      image: "bg-[url(/images/single-room.png)]",
      slider: <Sliding />,
      header: "SINGLE ROOM",
      button: "$147  Avg/night",
    },
    {
      image: "bg-[url(/images/double-room.png)]",
      slider: <DoubleRoom />,
      header: "DOUBLE ROOM",
      button: "$168  Avg/night",
    },
    {
      image: "bg-[url(/images/twin-room.png)]",
      slider: <TwinsRoom />,
      header: "TWIN ROOM",
      button: "$200 Avg/night",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto pt-8">
        <div className="flex flex-col gap-2 py-7 items-center justify-center">
          <h3 className="font-bold text-[#14274A] text-3xl">Rooms and Rates</h3>
          <p className="font-normal text-xl text-[#14274A] max-w-[920px] text-center">
            Each of our bright, light-flooded rooms come with everything you
            could possibly need for a comfortable stay. And yes, comfort isn’t
            our only objective, we also value good design, sleek contemporary
            furnishing complemented by the rich tones of nature’s palette as
            visible from our rooms’ sea-view windows and terraces.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {room.map((list) => (
            <div key={list.header} className="flex flex-col">
              <div
                className={`${list.image} bg-no-repeat bg-cover h-[870px] w-full bg-[center] flex flex-col items-center justify-end`}
              >
                {/* <Slider /> */}

                <span className="font-bold text-2xl text-white bg-[#14274A] w-full h-[70px] flex items-center justify-center">
                  {list.header}
                </span>
              </div>
              <div className="w-full h-[90px] border-b-[2px] border-x-[2px] border-[rgba(20, 39, 74, 0.30)] flex items-center justify-between px-6 rounded-b-md">
                <div className="flex items-center gap-2">
                  <Link href="booking-room">
                    <Image
                      height={25}
                      width={25}
                      src={"/images/select.png"}
                      alt="view"
                    />
                  </Link>
                  <p className="font-bold text-lg text-[#14274A]">
                    VIEW ROOM DETAILS
                  </p>
                </div>
                <div className="bg-[#E0B973] text-white font-bold text-lg max-w-max px-3 py-2 rounded-md">
                  {list.button}
                </div>
              </div>
              <div className="">{list.slider}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomFeatures;
