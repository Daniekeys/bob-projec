import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo/2514_Black text logo.png";
import { DropIcon, USA,NavIcon } from "../../assets/svg";

const styles = {
  active: "text-primary text-mont font-bold text-lg cursor-pointer",
  inactive: "text-ash text-mont text-lg font-normal cursor-pointer",
};
const MobileNav = () => {
    const [show, setShow] = useState(false);
  const router = useRouter();
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    setShow(false);
  }, [current])
  
    return (
      <div>
        <div className="w-full bg-white pt-4 fixed top-0 nav-index  left-0 right-0 flex flex-col md:hidden overflow-x-hidden">
          <div className="w-full flex items-center justify-between px-4 h-[65px]">
            <Image src={logo} alt="logo" className='max-w-[100px]' />
            <div className="w-fit" onClick={() => setShow(!show)}>
              <NavIcon />
            </div>
          </div>

          {show && (
            <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-[90vh] ">
              <div className="flex flex-col w-full px-4 mt-8 space-y-6">
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
                  className={current === 2 ? styles?.active : styles.inactive}
                  onClick={() => {
                    setCurrent(2);
                    router.push("/");
                  }}
                >
                  About Us
                </p>
                {/* end of a side */}
                {/* start */}
                <p
                  className={current === 3 ? styles?.active : styles.inactive}
                  onClick={() => {
                    setCurrent(3);
                    router.push("/");
                  }}
                >
                  Service
                </p>
                {/* end of a side */}

              
                <button className="bg-primary text-white flex items-center justify-center cursor-pointer py-[12px] px-[50px] font-bold text-lg text-mont rounded-[24px] h-[54px]">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default MobileNav
