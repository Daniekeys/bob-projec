import ContainerLayout from "../../Layouts/ContainerLayout"
import Image from "next/image"
import girl from "../../assets/png/girl.png";
import port from "../../assets/png/portrait.png"
import { InActiveLeft, ActiveRight,QuoteRight, QuoteLeft } from "../../assets/svg";
const Testimonial = () => {
  return (
    <div className="w-full py-12">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="text-center font-extrabold lg:text-[40px] text-[28px] text-nun text-ustomBlack">
            Testimonials
          </h1>
          <p className="text-center w-full lg:w-8/12 xl:w-1/2    text-secondary text-mont text-opacity-60 lg:text-xl text-base mt-4 mx-auto ">
            Authentic voices of those impacted by Project774
          </p>
          <div className="w-full flex flex-col md:flex-row mt-12 lg:justify-between">
            <div className="w-full lg:w-4/12">
              <Image src={girl} alt="girl" />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              {/* top session */}
              <div className="w-fit item-center px-5 py-[10px] space-x-4 flex box-shadow rounded-[15px] bg-white mt-6 lg:mt-0">
                <div className="w-4/12">
                  <Image src={port} alt="portrait" />
                </div>
                <div className="w-8/12 flex flex-col justify-center">
                  <p className="text-base font-medium text-nun text-[#202020]">
                    Janet Smith
                  </p>
                  <p className="text-sm text-mont text-[#808080]">
                    Software Developer
                  </p>
                </div>
              </div>
              {/* end of tje top profile sess */}
              <div className="mt-8 mb-6">
                <QuoteLeft />
              </div>
              <p className="lg:text-2xl font-medium text-mont text-[#808080] text-base ">
                Being part of the tech workshops opened doors to incredible
                opportunities. The skills acquired not only enhanced my
                employability but also inspired me to start my own tech venture.
                Project774 doesn't just bridge the digital divide; it ignites
                possibilities and fosters entrepreneurship!
                          </p>
                          <div className="w-full flex justify-end lg:mt-2 ">
                              <QuoteRight />
                          </div>
                          <div className="flex space-x-8 items-center mx-auto lg:mx-0 mt-4">
                              <InActiveLeft />

                              <ActiveRight />
                          </div>

            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Testimonial
