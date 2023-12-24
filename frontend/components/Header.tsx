"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Menu, Disclosure, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HeaderExtension, KnowledegHubComponent, MyAccountComponent } from ".";

const Header = () => {
  const [user, setUser] = useState<Boolean>(false);

  return (
    <header id="header" className="">
      <div className="bg-white min-h-[86px] z-40 fixed w-[100%] top-0 left-0">
        <div className="m-auto w-[90%] p-[24px] items-center justify-between flex md:hidden">
          <Link href="/" className="flex">
            <Image src="/logo.svg" alt="logo" width={131} height={34} />
          </Link>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" fill="#173D7A" />
              <path
                d="M7 12H25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 20H25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="bg-white min-h-[86px] text-sm fixed items-center t-0 w-full p-0 m-0 hidden md:flex z-40"
        style={{ boxShadow: "0px 2px 8px #0000001f" }}
      >
        <Disclosure>
          {({ open }) => (
            <div className="w-full flex-col h-auto hidden md:flex">
              <div className="w-[90%] m-auto py-5 relative z-40">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex">
                    <Image src="/logo.svg" alt="logo" width={131} height={34} />
                  </Link>

                  <div className="flex space-x-[32px]">
                    <Link href="#">What's New</Link>
                    <KnowledegHubComponent open={open} />
                    <Link href="#">CB News</Link>
                    <Link href="#">Internship</Link>
                    <Link href="#">About Us</Link>
                    {/* <Link href='/about'>Terms & Conditions</Link> */}
                  </div>
                  <div className="flex items-center justify-center space-x-[32px]">
                    {user ? (
                      <MyAccountComponent />
                    ) : (
                      // <Link href="#">Login</Link>
                      <div onClick={() => setUser(true)}>Login</div>
                    )}

                    <Link href="#">
                      <CustomButton
                        title="Register Now"
                        btnType="button"
                        containerStyles="px-[24px] py-[14px] bg-dark_blue rounded-3xl text-white flex items-center justify-center"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <HeaderExtension open={open} />
            </div>
          )}
        </Disclosure>
      </div>
    </header>
  );
};

{
  /* <div className="w-96 font-extrabold size-32">Explore. Upskill. Elevate.</div>
<div className="card-panel">fadr</div> */
}
export default Header;
