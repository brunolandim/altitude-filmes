"use client";
import React from "react";
import Button from "../Button";
import { openWhatsApp } from "@/services/openWhatsApp";
import { goToUrl } from "@/utils/goToUrl";

const images = [
  {
    url: "images/01.png",
    alt: "Obras",
    youtubeUrl: "https://youtu.be/ecsdYC37e80",
  },
  {
    url: "images/02.png",
    alt: "Natureza",
    youtubeUrl: "https://youtu.be/E8ek_GmQ6FU",
  },
  {
    url: "images/03.png",
    alt: "Empreendimentos",
    youtubeUrl: "https://youtu.be/NJ9P0FmLT3o",
  },
  {
    url: "images/04.png",
    alt: "Agro",
    youtubeUrl: "https://youtu.be/krjqARmDP2o",
  },
  {
    url: "images/05.png",
    alt: "Obras",
    youtubeUrl: "https://youtu.be/IYmON863B1w",
  },
];

const ThirdSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full text-white pb-20">
      <div className="flex flex-col md:flex-row justify-center md:gap-0 m-auto w-11/12 lg:w-3/4">
        {images.map((item, index) => (
          <img
            className="cursor-pointer w-full sm:w-1/2 lg:w-1/5"
            key={index}
            src={`${item.url}`}
            alt={`${item.alt}`}
            onClick={() => goToUrl(item.youtubeUrl)}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row w-11/12 lg:w-3/4 justify-between m-auto items-center py-10 gap-10 lg:gap-0">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Captação Aérea com
            <br />
            <span className="text-[#41F27C]">Qualidade e Precisão</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl mt-4">
            Imagens Aéreas em 4K para Projetos de
            <br />
            Alto Impacto e Excelência Visual
          </p>
        </div>
        <div className="w-full md:w-56 m-auto md:m-0">
          <Button onClick={openWhatsApp} children="Solicite uma Cotação" bgColor="default" />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
