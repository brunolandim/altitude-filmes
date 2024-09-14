"use client";
import React, { FC } from "react";

// Definindo a interface para as props
interface CardSectionProps {
  title: string;
  paragraf: string;
  shadowAlign: "left" | "right";
}

const MoreInfoCard: FC<CardSectionProps> = ({ title, paragraf, shadowAlign }) => {
  const shadow = shadowAlign === "left" ? "-translate-x-2" : "translate-x-2";
  return (
    <div className="relative   w-[261px] h-[310px]">
      <div className={`absolute bg-[#1F723B] rounded-md h-full w-full ${shadow} -translate-y-2`}></div>
      <div className="bg-[#232526] text-white w-[261px] h-[310px] p-6 rounded-md relative z-10">
        <h1 className="text-2xl text-[#41F27C] font-bold">{title}</h1>
        <p className="text-sm ">{paragraf}</p>
      </div>
    </div>
  );
};

export default MoreInfoCard;
