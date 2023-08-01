import React from "react";

const Slider = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex gap-2 items-center justify-center pb-4">
        <div className="w-[10px] h-[10px] borde border rounded-[50%] border-white bg-white"></div>
        <div className="w-[10px] h-[10px] borde border rounded-[50%] border-white"></div>
        <div className="w-[10px] h-[10px] borde border rounded-[50%] border-white"></div>
      </div>
    </div>
  );
};

export default Slider;
