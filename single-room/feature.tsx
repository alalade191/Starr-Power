import Image from "next/image";
import React from "react";

const SingleFeature = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center gap-2">
          <figure>
            <Image
              width={20}
              height={20}
              src={"/images/arrow.png"}
              alt="arrow"
            />
          </figure>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-[30px] text-[#222222]">
              View Room
            </h3>
          </div>
        </div>
        <p className="font-normal text-sm text-[#4F4F4F] pl-[30px]">
          <span className="text-[#E0B973]">Rooms</span> / Single Room
        </p>

        {/* main section */}
        <section className="flex items-center justify-between pt-[40px]">
          <figure>
            <Image
              height={600}
              width={600}
              src={"/images/single.png"}
              alt="single-room"
            />
          </figure>
          <article className="flex flex-col gap-3">
            <h3>Single Room</h3>
            <p>$200 Avg/Night</p>
            <p className="max-w-[520px]">
              Whether you are a solo traveler or seeking a cozy and comfortable
              space for your stay, our Deluxe Single Room is the perfect choice.
              Immerse yourself in luxury and experience the epitome of
              hospitality during your time with us. Step into your private oasis
              where tranquility and relaxation await you. The Deluxe Single Room
              offers a serene ambiance, providing you the perfect escape from
              the hustle and bustle of everyday life. Sink into the plush
              king-sized bed adorned with premium linens, ensuring a restful
              night sleep.
            </p>
            <div className="bg-[#E0B973] text-white font-bold text-lg px-3 py-2 rounded-md text-center">
              Submit
            </div>
          </article>
        </section>

        {/* sub images */}
        <section className="-mt-[30px] pl-[40px]">
          <div className="flex items-center gap-3  max-w-max">
            <Image
              height={170}
              width={170}
              src={"/images/first-mask.png"}
              alt="mask"
            />
            <Image
              height={170}
              width={170}
              src={"/images/second-mask.png"}
              alt="mask"
            />
            <Image
              height={170}
              width={170}
              src={"/images/third-mask.png"}
              alt="mask"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleFeature;
