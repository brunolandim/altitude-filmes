"use client";
import React from "react";
import Button from "../Button";
import { openWhatsApp } from "@/services/openWhatsApp";

const FirstSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-11/12 md:w-3/4 m-auto gap-10 md:gap-0 text-white md:justify-between items-center py-20 overflow-hidden">
      <div className="flex flex-col gap-10">
        <p className="uppercase font-bold text-5xl">
          Captação de
          <br />
          Imagens Aéreas <br />
          em 4K com
          <br />
          Altitude <span className="text-[#1F723B]">Filmes</span>
        </p>

        <div className="flex flex-col gap-10">
          <p className="text-2xl">
            Transforme suas visões em
            <br />
            realidade com imagens aéreas
            <br />
            de alta definição.
          </p>
          <div className="w-full md:w-56">
            <Button children="Contrate hoje mesmo" bgColor="dark green" onClick={openWhatsApp} />
          </div>
        </div>
      </div>
      <div className="md:ml-auto">
        <img src="/images/12.png" alt="praia" />
      </div>
    </section>
  );
};

export default FirstSection;