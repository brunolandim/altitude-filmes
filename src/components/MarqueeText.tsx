"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText: React.FC = () => {
  return (
    <Marquee gradient={false} speed={50} className="bg-[#1F723B] py-3 text-white">
      <span className="text-xl font-bold">
        {" "}
        IMAGENS AÉREAS COM DRONE&nbsp;&nbsp;&nbsp;&nbsp;IMAGENS AÉREAS COM DRONE&nbsp;&nbsp;&nbsp;&nbsp;IMAGENS AÉREAS
        COM DRONE&nbsp;&nbsp;&nbsp;&nbsp;IMAGENS AÉREAS COM DRONE&nbsp;&nbsp;&nbsp;&nbsp;IMAGENS AÉREAS COM
        DRONE&nbsp;&nbsp;&nbsp;&nbsp;IMAGENS AÉREAS COM DRONE
      </span>
    </Marquee>
  );
};

export default MarqueeText;
