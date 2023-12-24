"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Card, CustomButton } from ".";

const Hero = () => {
  const [selected, setSelected] = useState<Number>(1);

  return (
    <div className="w-full max-w-full mt-20 sm:mt-36 md:mt-52 lg:mt-28 absolute">
      <div className="h-full w-full max-h-full max-w-full flex items-start justify-center m-auto flex-col md:flex-row md:items-center">
        <div className="w-full flex flex-col items-start justify-center max-w-[30rem] gap-12 ml-7 my-6 md:items-center">
          <div className="w-full flex flex-col items-start justify-center max-w-72">
            <div className="hero-text-wrapper">Explore.</div>
            <div className="hero-text-wrapper">Upskill.</div>
            <div className="hero-text-wrapper">Elevate.</div>
          </div>
          <CustomButton
            title="Discover Now"
            btnType="button"
            containerStyles="px-[56px] py-[32px] gap-x-[12px] bg-light_blue text-textColor items-center justify-end hover:bg-dark_blue hover:text-white hidden md:flex"
            rightIcon="/arrow-right.svg"
          />
        </div>
        <div className="my-5 w-full min-h-[620px]">
          <div
            className={`overflow-x-hidden flex items-end justify-center gap-[40px] absolute transition transform duration-100 ease-in-out 
             ${
               selected === 1
                 ? "translate-x-12"
                 : selected === 2
                 ? "-translate-x-24"
                 : "-translate-x-40"
             } 
            md:relative md:translate-x-0 md:max-w-full `}
          >
            {[1, 2, 3].map((ele) => (
              <Card
                currentPosition={ele}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
        <div className="m-5 pb-5 flex md:hidden">
          <CustomButton
            title="Discover Now"
            btnType="button"
            containerStyles="px-[56px] py-[32px] gap-x-[12px] bg-light_blue text-textColor items-center justify-end hover:bg-dark_blue hover:text-white flex md:hidden"
            rightIcon="/arrow-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
