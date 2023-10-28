import React from 'react'
import ContainerLayout from '../../Layouts/ContainerLayout'
import Image from "next/image";
import logo from "../../assets/png/logo.png";
import Link from "next/link";
import { ArrowWhite } from "../../assets/svg";
import { Socials } from "../../assets/svg";
const MobileFooter = () => {
  return (
    <div className="w-full lg:hidden ">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center">
          <Image src={logo} alt="project774 logo" />
          <p className="text-base text-mont text-[#0A142F] mt-4 text-center">
            +1 (7635) 547-12-97
          </p>
          <p className="text-base mt-2 text-mont text-[#0A142F] ">
            support@project774
          </p>
          <div className="cursor-point w-fit mt-4">
            <Socials />
          </div>
          <div className="w-full items-center flex flex-col mt-8">
            <h1 className="font-bold text-[#333333] text-nun text-base">
              Subscribe
            </h1>
            <div className="flex items-center justify-between border h-[44px] rounded-[6px] border-[#000D7C] border-opacity-20 mt-5 ">
              <input
                type="text"
                className="border-none outline-none flex-grow h-inherit placeholder:text-mont placeholder:text-xs placeholder:text-[#0A142F] placeholder:text-opacity-60 pl-4  "
                placeholder="Get product updates"
              />
              <span className="flex items-center justify-center bg-primary w-[50px] rounded-r-[6px] h-[44px]">
                <ArrowWhite />
              </span>
            </div>
          </div>
          <h1 className="font-bold text-[#333333] text-nun text-base  mb-5 mt-10">
            Quick Links
          </h1>
          <div className="flex justify-between items-center w-full ">
            <div className="flex flex-col space-y-8 w-1/2">
              <Link
                href="/"
                className="text-base  text-mont text-[#0A142F] cursor-pointer "
              >
                Events
              </Link>
              <Link
                href="/"
                className="text-base  text-mont text-[#0A142F] cursor-pointer "
              >
                Blogs
              </Link>
            </div>
            <div className="flex flex-col items-end space-y-8 w-1/2">
              <Link
                href="/"
                className="text-base  text-mont text-[#0A142F] cursor-pointer "
              >
                Company
              </Link>
              <Link
                href="/"
                className="text-base  text-mont text-[#0A142F] cursor-pointer "
              >
                Volunteer
              </Link>
            </div>
          </div>
          <div className="w-full border-t border-[#0A142F] border-opacity-10 flex justify-between flex-col mt-8 pt-8">
           
            <div className='mx-auto'>
              <p className="text-mont text-[#0A142F] text-sm ">
                © 2023 Project774. All rights reserved
              </p>
            </div>
            <div className="w-fit mx-auto">
              <p className="text-nun text-sm font-bold text-[#0A142F] ">
                A product of{" "}
                <Link href={"https://atmgc.xyz"} target="_blank">
                  <span className="text-primary">Automagic</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default MobileFooter
