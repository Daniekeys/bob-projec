import ContainerLayout from "../../Layouts/ContainerLayout"
import { PartnerSpiral } from "../../assets/svg";
const Partner = () => {
  return (
    <div className="w-full partner-bg py-12">
      <ContainerLayout>
        <div className="w-full flex flex-col items-center">
          <h1 className="text-center font-extrabold lg:text-[40px] text-[28px] text-nun text-ustomBlack">
            Our Partners
          </h1>
          <p className="text-center w-full lg:w-8/12 xl:w-1/2    text-secondary text-mont text-opacity-60 lg:text-xl text-base mt-4 mx-auto ">
            Proud to collaborate with visionary partners who share our
            commitment to transforming communities through technology.
                  </p>
                  <div className="mt-16 grid lg:flex lg:justify-between grid-cols-3 lg:items-center w-full gap-8 lg:gap-0 ">
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                      <div className="xl:w-[150px] xl:h-[150px] rounded-full bg-[#d9d9d9] lg:w-[120px] lg:h-[120px] w-[88px] h-[88px] ">
                          
                      </div>
                  </div>
                  <div className="w-full hidden mt-[-15px] lg:flex justify-center ">
                      <PartnerSpiral />
                  </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Partner
