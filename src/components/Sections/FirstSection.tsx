"use client";
import React from "react";
import Button from "../Button";
import { openWhatsApp } from "@/services/openWhatsApp";

const FirstSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row w-11/12 md:w-3/4 m-auto gap-10 md:gap-0 text-white md:justify-between items-center py-20 overflow-hidden">
      <div className="flex flex-col gap-10">
        <p className="font-bold text-5xl">
          CAPTAÇÃO DE
          <br />
          IMAGENS AÉREAS <br />
          EM 4K COM
          <br />
          ALTITUDE <span className="text-[#1F723B]">FILMES</span>
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
            <Button children="CONTRATE HOJE MESMO" bgColor="dark green" onClick={openWhatsApp} />
          </div>
        </div>
      </div>
      <div className="md:ml-auto">
        <img src="/images/12.webp" alt="praia" />
      </div>
    </section>
  );
};

export default FirstSection;
