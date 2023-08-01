import Image from "next/image";
import React from "react";
interface Ifeatures {
  image: string;
  text: string;
}
const Features = () => {
  const items = [
    { image: "/images/drink.png", text: "Welcome Drinks" },
    { image: "/images/car.png", text: "Car Rental" },
    { image: "/images/resort.png", text: "Resort & Spa" },
    { image: "/images/wifi.png", text: "Free WIFI" },
  ];
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex items-center justify-between pt-10">
        {items.map((list) => (
          <div key={list.text}>
            <div className="flex items-center">
              <Image height={70} width={70} src={list.image} alt="features" />
              <p
                style={{ fontFamily: "Inter" }}
                className="text-[20px] font-medium text-[#565656]"
              >
                {list.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {}
    </div>
  );
};

export default Features;
