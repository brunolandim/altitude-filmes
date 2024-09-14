"use client";
import React, { FC } from "react";

interface CardSectionProps {
  title: string;
  paragraf: string;
  paragrafAlign: "left" | "right";
  shadowAlign: "left" | "center" | "right";
}

const CardAboutSection: FC<CardSectionProps> = ({ title, paragraf, paragrafAlign, shadowAlign }) => {
  const align = paragrafAlign === "left" ? "text-left" : "text-right";

  // Ajusta a lógica da sombra para as três opções de alinhamento
  const shadow =
    shadowAlign === "left" ? "-translate-x-3" : shadowAlign === "center" ? "translate-x-52" : "translate-x-64";
  const titleAling = title === "Missão" ? "text-left" : "text-end";

  return (
    <div className="relative md:w-[371px] md:h-[220px]">
      {/* Sombra */}
      <div className={`absolute bg-[#1F723B]  w-1/3 md:h-[240px] ${shadow}  -translate-y-3 `}></div>

      {/* Card principal */}
      <div className="bg-[#232526] text-white p-6 rounded-md relative z-10 w-full h-full">
        <h1 className={`text-4xl ${titleAling} text-[#41F27C] font-bold`}>{title}</h1>
        <p className={`text-sm ${align} mt-10`}>{paragraf}</p>
      </div>
    </div>
  );
};

export default CardAboutSection;
