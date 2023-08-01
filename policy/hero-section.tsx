import React from "react";

const PolicyHeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <h3 className="font-bold text-2xl text-[#14274A] pt-[20px]">
          Privacy Policy
        </h3>
        <div className="flex flex-col gap-5 pt-[30px]">
          <h3 className="font-bold text-lg text-[#14274A]">
            Personal Information
          </h3>
          <div className="flex flex-col gap-2 text-xl text-[#14274A]">
            <p>
              Contact information, such as your name, email address, and phone
              number.
            </p>
            <p>
              Demographic information, such as your age, gender, and location.
            </p>
            <p>
              Booking information, such as your reservation number, arrival and
              departure dates, and room type.
            </p>
            <p>
              Payment information, such as your credit card number and
              expiration date.
            </p>
            <p>
              Usage information, such as the pages you visit on our website and
              the apps you use.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-[30px]">
          <h3 className="font-bold text-lg text-[#14274A]">
            Cancellation Policy
          </h3>
          <div className="flex flex-col gap-2 text-xl text-[#14274A]">
            <p>
              Cancellations made 60 days or more prior to the arrival date: No
              fee
            </p>
            <p>
              Cancellations made 30 to 59 days prior to the arrival date: 50% of
              the total reservation
            </p>
            <p>
              Cancellations made 29 days or less prior to the arrival date: 100%
              of the total reservation
            </p>
            <p className="max-w-[450px]">
              Reservations cancelled due to extenuating circumstances (such as a
              death in the family or a serious illness) may be cancelled without
              penalty.
            </p>
            <p>
              To cancel a reservation, please contact Luxury Hotel at
              +2348078313642 or at alalade191@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeroSection;
