"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface CardProps {
  currentPosition: Number;
  selected: Number;
  setSelected: Dispatch<SetStateAction<Number>>;
}

const Card = ({ currentPosition, selected, setSelected }: CardProps) => {
  const onHover = () => {
    setSelected(currentPosition);
  };

  let height = "334px",
    width = "156px";
  if (selected === 1) {
    if (currentPosition === 1) {
      height = "590px";
      width = "506px";
    } else if (currentPosition === 2) {
      height = "448px";
      width = "156px";
    } else if (currentPosition === 3) {
      height = "334px";
      width = "156px";
    }
  } else if (selected === 2) {
    if (currentPosition === 1) {
      height = "448px";
      width = "156px";
    } else if (currentPosition === 2) {
      height = "590px";
      width = "506px";
    } else if (currentPosition === 3) {
      height = "334px";
      width = "156px";
    }
  } else if (selected === 3) {
    if (currentPosition === 1) {
      height = "334px";
      width = "156px";
    } else if (currentPosition === 2) {
      height = "448px";
      width = "156px";
    } else if (currentPosition === 3) {
      height = "590px";
      width = "506px";
    }
  }

  const dataArray = [
    {
      bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(/employee1.png), lightgray 50% / cover no-repeat",
      img: "/employee1.png",
      title: "Masterclass",
      description: "Real-wolrd learnings from best.",
      color: "bg-custom_yellow",
    },
    {
      bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(/employee2.png), lightgray -81.279px 0px / 251.282% 100% no-repeat",
      img: "/employee2.png",
      title: "Webinar",
      description: "Learn industry relevent skill online.",
      color: "bg-custom_blue",
    },
    {
      bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(/employee3.png), lightgray 50% / cover no-repeat",
      img: "/employee3.png",
      title: "Podcast",
      description: "Learn industry trends from the experts.",
      color: "bg-custom_green",
    },
  ];

  return (
    <div
      onMouseEnter={() => setSelected(currentPosition)}
      onMouseLeave={() => (currentPosition !== 1 ? setSelected(1) : "")}
      className={`z-10 relative transition duration-200 ease-in-out card-container`}
      // md:min-w-[${width}px] max-h-[${height}px]
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height,
        // minWidth: width,
        // minHeight: height,
        width, //"590px", //448 334
        transitionProperty: "width, height",
        // flexShrink: 0,
        borderRadius: "16px",
        backgroundImage: `url(${
          dataArray[parseInt(currentPosition.toString()) - 1].img
        })`,
        // background: dataArray[parseInt(currentPosition.toString()) - 1].bg,
      }}
    >
      {/* <div className="hidden min-h-[590px] min-h-[448px] min-h-[334px] min-h-[412px] min-w-[506px] min-w-[156px] min-w-[248px]"></div> */}
      {/* <Image
        className="h-full w-full rounded-[16px] absolute z-20"
        src={dataArray[parseInt(currentPosition.toString()) - 1].img}
        alt="img"
        height={10}
        width={10}
      /> */}
      <div className="w-full px-8 py-10 bg-none z-30 absolute left-0 bottom-0">
        <div className={`relative font-normal text-white`}>
          <div className="flex flex-col-reverse gap-5 w-full ">
            {selected === currentPosition ? (
              <div
                className={`transition duration-1000 ease-in ${
                  selected === currentPosition ? "" : "hidden"
                }`}
              >
                <p className="ml-12">
                  {
                    dataArray[parseInt(currentPosition.toString()) - 1]
                      .description
                  }
                </p>
              </div>
            ) : (
              ""
            )}
            <div
              className={`relative flex items-center justify-start w-full h-full transition origin-bottom-left duration-1000 ease-in-out ${
                selected === currentPosition ? "" : "-rotate-90 left-16 top-8"
              }`}
            >
              <div
                className={`z-20 rounded-[360px] h-[96px] w-[96px] absolute left-[16px] ${
                  dataArray[parseInt(currentPosition.toString()) - 1].color
                }`}
              />
              <div
                className={`z-30 ml-12 my-auto leading-normal ${
                  selected === currentPosition ? "text-[40px]" : "text-[26px]"
                }`}
              >
                {dataArray[parseInt(currentPosition.toString()) - 1].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
