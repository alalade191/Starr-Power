import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="bottom" className="w-full bg-[#14274A] mt-10">
      <div className="w-[80%] mx-auto flex items-center h-[200px] justify-between">
        <div className="flex flex-col gap-6">
          <figure>
            <Image
              height={80}
              width={100}
              src={"/images/footer.svg"}
              alt="footer-logo"
              className="object-contain"
            />
          </figure>
          <p className="font-normal text-sm text-white max-w-[264px]">
            497 Evergreen Rd. Roseville, CA 95673 +44 345 678 903
            luxury_hotels@gmail.com
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-normal text-sm text-white">Contact</p>
          <p className="font-normal text-sm text-white">Policies</p>
          <p className="font-normal text-sm text-white">Terms & Condition</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center">
            <Image
              height={10}
              width={10}
              src={"/images/facebook.png"}
              alt="facebook"
            />
            <p className="font-normal text-sm text-white">Facebook</p>
          </div>

          <div className="flex gap-3 items-center">
            <Image
              height={20}
              width={20}
              src={"/images/twitter.png"}
              alt="facebook"
            />
            <p className="font-normal text-sm text-white">Twitter</p>
          </div>

          <div className="flex gap-3 items-center">
            <Image
              height={20}
              width={20}
              src={"/images/instagram.png"}
              alt="facebook"
            />
            <p className="font-normal text-sm text-white">Instagram</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-normal text-sm text-white">
            Subscribe to our newsletter
          </p>
          <div className="flex items-center">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="text-white font-sm font-normal h-[40px] outline-none border-[3px] py-2 px-3 rounded-md border-[#E0B973] bg-[#14274A]"
              />
            </div>
            <div className="h-[40px] px-6 bg-[#E0B973] max-w-max border border-[#E0B973] rounded-e-lg flex items-center justify-center -ml-[3px]">
              <p className="font-medium text-base text-[#14274A] cursor-pointer">
                OK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
