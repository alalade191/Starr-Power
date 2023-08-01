import Image from "next/image";
import React from "react";

const Invoice = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <header className="flex items-center justify-between h-[170px]">
          <figure>
            <Image
              height={48}
              width={115}
              src={"/images/invoice.png"}
              alt="invoice"
            />
          </figure>
          <figure>
            <Image
              height={460}
              width={186}
              src={"/images/invoice-header.png"}
              alt="invoice"
            />
          </figure>
        </header>

        <div className="grid grid-cols-3 border-y-[2px] border-[rgba(213, 219, 229, 1)] py-2">
          <div className="flex flex-col gap-4 border-r-[2px] border-[rgba(213, 219, 229, 1)]">
            <div className="flex flex-col gap-2">
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Issued
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
              >
                01 Apr, 2023
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Due
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
              >
                15 Apr, 2023
              </h3>
            </div>
          </div>

          {/* second */}
          <div className="flex pl-5 flex-col gap-3 border-r-[2px] border-[rgba(213, 219, 229, 1)]">
            <div>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Billed to
              </h3>
            </div>
            <div>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
              >
                Alalade Damilola
              </p>

              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(90, 99, 118, 1)]"
              >
                adamilola@gmail.com
              </p>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(90, 99, 118, 1)]"
              >
                +0 (234) 810-6567-980
              </p>
            </div>
          </div>
          {/* third */}
          <div className="flex flex-col gap-3 pl-5">
            <div>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                From
              </h3>
            </div>
            <div>
              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
              >
                Luxury Hotels
              </p>

              <p
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(90, 99, 118, 1)] max-w-[200px]"
              >
                #SW/234, Oyinade House, Iwo-road, Ibadan, Oyo State, Nigeria.
              </p>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-5 pt-[40px] pb-[30px]">
          <div className="flex items-center justify-between">
            <div
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
            >
              Single Room
            </div>
            <div className="flex items-center gap-20">
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Guests
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Date
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
              >
                Time
              </h3>
            </div>
          </div>

          <div className="flex justify-between border-y-[2px] border-[rgba(213, 219, 229, 1)] py-4">
            <div
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
            >
              Service
            </div>
            <div className="flex  gap-12">
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(24, 28, 38, 1)]"
              >
                2
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(90, 99, 118, 1)] max-w-[80px]"
              >
                12/06/2023 - 13/06/2023
              </h3>
              <h3
                style={{ fontFamily: "Inter" }}
                className="font-medium text-sm text-[rgba(90, 99, 118, 1)]"
              >
                8pm-9pm
              </h3>
            </div>
          </div>
        </section>

        <section className="max-w-[300px] flex flex-col gap-4">
          <div className="flex items-center justify-between border-b-[2px] pb-4 border-[rgba(213, 219, 229, 1)]">
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
            >
              Subtotal
            </h4>
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
            >
              $400.00
            </h4>
          </div>

          <div className="flex items-center justify-between border-b-[2px] pb-4 border-[rgba(213, 219, 229, 1)]">
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
            >
              VAT (10%)
            </h4>
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
            >
              $40.00
            </h4>
          </div>

          <div className="flex items-center justify-between border-b-[2px] pb-4 border-[#E0B973]">
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(24, 28, 38, 1)]"
            >
              Damages
            </h4>
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[rgba(90, 99, 118, 1)]"
            >
              $20.00
            </h4>
          </div>

          <div className="flex items-center justify-between border-b-[2px] pb-4 border-[#E0B973]">
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[#E0B973]"
            >
              Total
            </h4>
            <h4
              style={{ fontFamily: "Inter" }}
              className="font-medium text-lg text-[#E0B973]"
            >
              US$ 460.00
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Invoice;
