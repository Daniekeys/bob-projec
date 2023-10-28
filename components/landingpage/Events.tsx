import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image";
import abasi from "../../assets/png/abasi.png";
import ikot from "../../assets/png/ikot.png";
import eket from "../../assets/png/eket.png";
import { EventSpiral } from "../../assets/svg";
const Events = () => {
  return (
    <div className="w-full partner-bg pt-16 pb-10">
      <ContainerLayout>
              <div className="w-full flex flex-col items-center relative">
                  <span className="absolute top-0 right-16 hidden lg:flex">
                      <EventSpiral />
                  </span>
          <h1 className="text-center font-extrabold lg:text-[40px] text-[28px] text-nun text-ustomBlack">
            Latest Events
          </h1>
          <p className="text-center w-full lg:w-8/12 xl:w-1/2    text-secondary text-mont text-opacity-60 lg:text-xl text-base mt-4 mx-auto ">
            Where next are we creating that unique experience and awareness to
            all??
                  </p>
                  <div className="w-full flex flex-row justify-between items-center mt-16">
                      <div className="">

                         <Image src={ikot} alt="" width={350} height={350} />
                      </div>
                      <div className="">

                         <Image src={eket} alt="" width={350} height={350}  className="lg:h-[400px] lg:w-[400px]"/>
                      </div>
                      <div className="">

                         <Image src={abasi} alt="" width={350} height={350} />
                      </div>
                      
                  </div>
                  <div className="mt-8 flex justify-center w-full">
                      <button className="border border-primary rounded-[24px] px-[50px] py-[12px] bg-white text-primary  flex items-center justify-center text-base text-mont font-bold">
                          See All Events
                      </button>
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Events
