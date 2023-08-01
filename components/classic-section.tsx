import Image from "next/image";
import React from "react";
interface Iclassic {
  image: string;
  header: string;
  para: string;
}
const ClassicSection = () => {
  const classic: Iclassic[] = [
    {
      image: "/images/coffee.png",
      header: "RESTAURANT",
      para: "Savor the finest flavors and elevate your dining experience at our exceptional restaurant.",
    },
    {
      image: "/images/spa.png",
      header: "SPA & WELLNESS",
      para: "Indulge in pure relaxation and rejuvenation at our tranquil spa oasis",
    },
    {
      image: "/images/rooms.png",
      header: "THE BEST ROOMS",
      para: "Find comfort and bliss in our elegantly designed rooms, your perfect sanctuary during your stay.",
    },
    {
      image: "/images/nescafe.png",
      header: "LOUNGE BAR",
      para: "Unwind in style and embrace the ambiance of sophistication at our inviting lounge",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex justify-between">
        {/* first part */}
        <div className="flex flex-col justify-between">
          <div>
            <h3
              style={{ fontFamily: "Inter" }}
              className="font-bold text-[#292929] text-2xl max-w-[300px] pb-4"
            >
              CLASSIC ROOMS AND INTERIOR
            </h3>
            <div className="flex flex-col gap-3">
              <figure className="flex">
                <Image
                  height={20}
                  width={20}
                  src={"/images/star.png"}
                  alt="star"
                  className="object-contain"
                />
                <Image
                  height={20}
                  width={20}
                  src={"/images/star.png"}
                  alt="star"
                />
                <Image
                  height={20}
                  width={20}
                  src={"/images/star.png"}
                  alt="star"
                />
                <Image
                  height={20}
                  width={20}
                  src={"/images/star.png"}
                  alt="star"
                />
                <Image
                  height={20}
                  width={20}
                  src={"/images/star.png"}
                  alt="star"
                />
              </figure>
              <p className="font-medium text-[#292929] text-sm">
                Excellent 5000+ reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <figure className="flex">
              <Image
                height={45}
                width={45}
                src={"/images/first.png"}
                alt="carosel"
              />
              <Image
                height={45}
                width={45}
                src={"/images/second.png"}
                alt="carosel"
                className="-ml-[12px]"
              />
              <Image
                height={45}
                width={45}
                src={"/images/third.png"}
                alt="carosel"
                className="-ml-[12px]"
              />
              <Image
                height={45}
                width={45}
                src={"/images/fourth.png"}
                alt="carosel"
                className="-ml-[12px]"
              />
              <Image
                height={45}
                width={45}
                src={"/images/fifth.png"}
                alt="carosel"
                className="-ml-[12px]"
              />
            </figure>
            <p
              style={{ fontFamily: "Inter" }}
              className="text-sm font-medium text-[#292929] max-w-[200px]"
            >
              Peoples successsfully got this dream place
            </p>
          </div>
        </div>
        {/* second part */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-8 -mt-24 pr-16">
          {classic.map((items) => (
            <div
              key={items.header}
              style={{
                boxShadow:
                  "-15.18294620513916px 26.027908325195312px 73.74573516845703px -17.351938247680664px rgba(0, 0, 0, 0.12)",
              }}
              className="flex flex-col gap-3 bg-white py-[25px] px-[15px]"
            >
              <figure>
                <Image
                  height={50}
                  width={50}
                  src={items.image}
                  alt="classic-rooms"
                />
              </figure>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-semibold text-xl text-[#292929]"
              >
                {items.header}
              </h3>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[#292929] max-w-[280px]"
              >
                {items.para}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* map */}
      <div className="w-[80%] mx-auto pt-[200px] flex flex-col items-center  relative">
        <figure className="h-[400px] w-full">
          <Image
            height={100}
            width={400}
            src={"/images/map.png"}
            alt="map"
            className="w-full h-full"
          />
        </figure>
        <div className="h-[135px] w-[70%] mx-auto bg-white rounded-md flex flex-col px-[35px] -mt-[70px] absolute bottom-[50px]">
          <h3
            style={{ fontFamily: "Inter" }}
            className="font-medium text-[#222222] text-[30px]"
          >
            Location of our Hotel
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-[#555555] text-sm font-normal max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys{" "}
            </p>

            <div className="w-full h-[60px] bg-[#FAFAFA] flex items-center justify-between rounded-[50px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enteryour email"
                className=" text-[#555555] bg-[#FAFAFA] font-sm font-medium ml-5 h-[40px] outline-none py-2 px-3 rounded-md"
              />
              <div className="font-medium text-sm bg-[#E0B973] text-white max-w-max py-5 px-8 rounded-[50px]">
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicSection;
