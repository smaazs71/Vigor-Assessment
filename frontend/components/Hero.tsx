"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Card, CustomButton } from ".";

const Hero = () => {
  const [selected, setSelected] = useState<Number>(1);

  return (
    <div className="mt-36 md:mt-52 lg:mt-28 absolute">
      <div className="h-full w-full max-h-full max-w-full flex items-start pl-[24px] justify-center gap-12 flex-col lg:flex-row lg:items-center lg:pl-[auto]">
        <div className="w-full flex flex-col items-center justify-center gap-12 max-w-72 mt-12">
          <div className="w-full flex flex-col items-start justify-center ">
            <div className="hero-text-wrapper">Explore.</div>
            <div className="hero-text-wrapper">Upskill.</div>
            <div className="hero-text-wrapper">Elevate.</div>
          </div>
          <CustomButton
            title="Discover Now"
            btnType="button"
            containerStyles="px-[56px] py-[32px] gap-x-[12px] bg-light_blue text-textColor items-center justify-end hover:bg-dark_blue hover:text-white hidden lg:flex"
            rightIcon="/arrow-right.svg"
          />
        </div>
        <div className="min-h-[620px] w-full overflow-x-hidden">
          <div className="w-full flex items-end justify-center gap-[40px]">
            <Card
              currentPosition={1}
              selected={selected}
              setSelected={setSelected}
            />
            <Card
              currentPosition={2}
              selected={selected}
              setSelected={setSelected}
            />
            <Card
              currentPosition={3}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
        <div className="mb-5 pb-5">
          <CustomButton
            title="Discover Now"
            btnType="button"
            containerStyles="px-[56px] py-[32px] gap-x-[12px] bg-light_blue text-textColor items-center justify-end hover:bg-dark_blue hover:text-white flex lg:hidden"
            rightIcon="/arrow-right.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
