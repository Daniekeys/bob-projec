import { useState } from "react";
import { useRouter } from "next/router";
import  Image from "next/image"
import ContainerLayout from "../../Layouts/ContainerLayout";

import logo from "../../assets/logo/2514_Black text logo.png"

const styles = {
  active: "text-primary text-mont font-bold text-lg cursor-pointer",
  inactive:"text-ash text-mont text-lg font-normal cursor-pointer"
}
const Navbar = () => {
 
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-auto  items-center bg-white hidden md:flex rub z-high flow-hide">
      <ContainerLayout>
        <div className="w-full flex items-center justify-between h-[104px] flow-hide ">
          <div className="w-1/12 xl:w-2/12">
            <Image src={logo} alt="logo" className="scale-50" />
          </div>
          <div className="w-10/12 xl:w-7/12 flex justify-center space-x-8 items-center ">
            <p
              className={current === 1 ? styles?.active : styles.inactive}
              onClick={() => {
                setCurrent(1);
                router.push("/");
              }}
            >
              Home
            </p>

            {/* start */}
            <p
              className={current === 5 ? styles?.active : styles.inactive}
              onClick={() => {
                setCurrent(5);
                router.push("/#about");
              }}
            >
              About Us
            </p>
            {/* end of a side */}
            {/* start */}
            <p
              className={current === 6 ? styles?.active : styles.inactive}
              onClick={() => {
                setCurrent(6);
                router.push("/");
              }}
            >
              Services
            </p>
            {/* end of a side */}
          </div>
          <div className="w-2/12">
            <button className="bg-[#38b000] text-white flex items-center justify-center cursor-pointer py-[12px] px-[50px] font-bold text-lg text-mont rounded-[24px] h-[54px]">
              Contact Us
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
