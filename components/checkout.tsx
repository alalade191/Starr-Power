import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center py-[200px]">
          <p className="font-normal text-[#4F4F4F] text-xl">
            Thank You For Your Booking
          </p>
          <Image
            height={150}
            width={150}
            src={"/images/receipt.png"}
            alt="receipt"
          />
          <h3 className="text-[#0A0D13] font-bold text-xl">
            Payment #123RGR231567Y Confirmed
          </h3>

          <Link
            href="/invoice"
            className="bg-[#E0B973] text-white font-bold text-lg px-12 py-2 rounded-md text-center max-w-[470px]"
          >
            <p className="flex items-center justify-center gap-3">
              Generate Receipt
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
