/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import Image from "next/image";
import one from "../../assets/png/2514_Cold room.jpg";
import two from "../../assets/png/2514_Farm house.jpg";
import three from "../../assets/png/2514_farm equipment.jpg";
import heropic from "../../assets/png/hero-land.jpg";
import four from "../../assets/png/african-american-logistics-managers-team-dicussing-goods-distribution-warehouse-reception-post-office-men-woman-workers-planning-stock-supply-while-chatting-counter-desk.jpg"
import five from "../../assets/png/working-housing-project.jpg"
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";



const datas = [
  heropic,one,four, two,three,five
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}


export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current < 6) {
      setTimeout(() => {
        setCurrent(current + 1);
      }, 10000);
    }
    else setCurrent(0);
  }, [current])
  
  return (
    <div className="relative bg-gray-50 mt-20">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">2514 KB ELEOS</span>{" "}
              <span className="block text-[#38b000] xl:inline">
                RESOURCES LTD
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              2514 KB ELEOS RESOURCES LTD specializes in providing a wide range
              of services in the construction and agriculture sectors. With a
              focus on quality, innovation, and customer satisfaction, we have
              established ourselves as a leading provider in the industry.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#38b000] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 "
                >
                  Contact Us
                </a>
              </div>
          
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={datas[current]}
            width={heropic.width}
            height={heropic.height}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
