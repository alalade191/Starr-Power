import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Iheader {
  nav: string;
  id: number;
  link: string;
}

const BookingRoomHeader = () => {
  const nav: Iheader[] = [
    { id: 1, nav: "Home", link: "/" },
    { id: 2, nav: "Facilities", link: "/facilities" },
    { id: 3, nav: "Rooms", link: "/rooms" },
    { id: 4, nav: "Contact-us", link: "/contact-us" },
  ];
  return (
    <header className="w-full bg-[#14274A] sticky top-0">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <Image width={150} height={100} src={"/images/logo.png"} alt="logo" />
        <div className="flex">
          {nav.map((items) => (
            <nav key={items.id} className="flex px-3">
              <ul className="">
                <Link href={items.link} className="flex">
                  <li className="px-3 text-lg font-bold hover:underline text-white">
                    {items.nav}
                  </li>
                </Link>
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </header>
  );
};

export default BookingRoomHeader;
