import React from "react";
interface Ifeatures {
  image: string;
  text: string;
}
const Features = () => {
  const features: Ifeatures[] = [
    { image: "bg-[url(/images/gym.png)]", text: "THE GYM" },
    { image: "bg-[url(/images/pool-side.png)]", text: "POOL SIDE BAR" },
    { image: "bg-[url(/images/spaa.png)]", text: "THE SPA" },
    { image: "bg-[url(/images/swimming-pool.png)]", text: "SWIMMING POOL" },
    { image: "bg-[url(/images/restaurant.png)]", text: "RESTAURANT" },
    { image: "bg-[url(/images/laundry.png)]", text: "LAUNDRY" },
  ];
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-2 py-7 items-center justify-center">
          <h3 className="font-bold text-[#14274A] text-2xl">Facilities</h3>
          <p className="font-normal text-xl text-[#14274A] max-w-[900px] text-center">
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite uniquw. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* features */}
          {features.map((item) => (
            <div
              key={item.text}
              className={`${item.image} bg-no-repeat bg-cover h-[500px] w-full bg-[center] flex flex-col items-center justify-end`}
            >
              <span className="font-bold text-lg w-[200px] h-[30px] bg-white text-[#14274A] flex items-center justify-center">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
