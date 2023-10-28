import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image"
import left from "../../assets/png/left.png";

import { ArrowRight } from "../../assets/svg";
const About = () => {
  return (
    <div className="w-full flex flex-col mt-20 pb-10">
      <ContainerLayout>
        <div className="w-full flex flex-col lg:space-x-8 lg:flex-row  lg:justify-between">
          <div className="w-full lg:w-3/12 mb-8 lg:mb-0">
            <Image src={left} alt="left" />
          </div>
          <div className="w-full lg:w-6/12 flex flex-col">
            <h1 className="text-center font-extrabold lg:text-[40px] text-[28px] text-nun text-ustomBlack">
              About <span className="text-primary">Project 774</span>
            </h1>
            <p className="text-center w-full  text-secondary text-mont text-opacity-60 lg:text-xl text-base mt-4 mx-auto ">
              A 1-day event aimed at driving awareness of the immense
              opportunity of the digital skill economy to indigenes and
              residents of the 774 Local Governments of Nigeria.
            </p>
            <button className="bg-primary text-white flex items-center justify-center cursor-pointer mt-10 lg:mt-[60px] py-[12px] px-[50px] font-bold text-lg text-mont rounded-[24px] h-[54px] mx-auto">
              About Us <span className="ml-2"><ArrowRight /></span>
            </button>
          </div>
          <div className="w-full lg:w-3/12 mt-12 lg:mt-0">
            <Image src={left} alt="left" />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default About
