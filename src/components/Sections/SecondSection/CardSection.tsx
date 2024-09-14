"use client";
import React, { FC } from "react";

// Definindo a interface para as props
interface CardSectionProps {
  title: string;
  titleGreen: string;
  paragraf: string;
}

const CardSection: FC<CardSectionProps> = ({ title, titleGreen, paragraf }) => {
  return (
    <div className="flex flex-col justify-center bg-[#232526] text-white p-5 w-[274px] h-[289px] rounded-lg">
      <h1 className="text-2xl font-bold">
        {title} <span className="text-[#41F27C]">{titleGreen}</span>
      </h1>
      <p className="mt-4 text-sm">{paragraf}</p>
    </div>
  );
};

export default CardSection;
