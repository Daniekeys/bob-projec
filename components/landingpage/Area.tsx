import ContainerLayout from "../../Layouts/ContainerLayout"
import { Comm, Digital, FocusSpiral, GreenArrow, Tech, Youth } from "../../assets/svg";

const Area = () => {
  return (
    <div className="w-full py-12">
      <ContainerLayout>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full lg:w-4/12 flex flex-col relative justify-center h-inherit">
            <span className="absolute top-0 right-[-100px] hidden lg:flex">
              <FocusSpiral />
            </span>
            <h1 className=" font-extrabold lg:text-[40px] text-[28px] text-nun text-ustomBlack">
              Focus Areas
            </h1>
            <p className=" w-full lg:w-full    text-secondary text-mont text-opacity-60 lg:text-xl text-base mt-4 mx-auto ">
              Empowering 774 Nigerian communities through technology. Bridging
              the digital divide, fostering innovation, and nurturing talent.
              Join us in building a future where every local government area
              thrives in the digital age.
            </p>
            <button className="flex items-center text-primary text-base space-x-4 mt-7 cursor-pointer font-bold text-mont   lg:text-xl">
              <span>Read More</span>
              <span>
                <GreenArrow />
              </span>
            </button>
          </div>
          <div className="w-full lg:w-6/12 grid grid-cols-2 lg:gap-10 gap-6 mt-6 lg:mt-0 h-max pb-5">
            <div className="flex flex-col items-center justify-center box-shadow py-[35px] w-full" >
              <Tech />
              <h2 className="font-bold mt-8 lg:text-2xl text-base text-nun text-customBlack text-center w-1/2 mx-auto">
                Tech Day Initiative
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center box-shadow py-[35px] w-full">
              <Youth />
              <h2 className="font-bold mt-8 lg:text-2xl text-base text-nun text-customBlack text-center w-1/2 mx-auto">
                Youth Empowerment
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center box-shadow py-[35px] w-full">
              <Comm />
              <h2 className="font-bold mt-8 lg:text-2xl text-base text-nun text-customBlack text-center w-1/2 mx-auto">
                Community Engagement
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center box-shadow py-[35px] w-full">
              <Digital />
              <h2 className="font-bold mt-8 lg:text-2xl text-base text-nun text-customBlack text-center w-1/2 mx-auto">
                Digital Literacy
              </h2>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Area
