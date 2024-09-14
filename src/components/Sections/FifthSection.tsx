"use client";
import React from "react";
import Button from "../Button";
import { openWhatsApp } from "@/services/openWhatsApp";

const FifthSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full text-white justify-between items-center">
      {/* Grid de Imagens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  mt-auto ">
        {Array.from({ length: 10 }).map((__, index) => (
          <img
            key={index}
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-72 lg:h-72 object-cover"
            src={`/images/foto${index + 1}.png`}
            alt={`foto ${index + 1}`}
          />
        ))}
      </div>

      {/* Banner com texto e botão */}
      <div
        className="flex w-full justify-center items-center "
        style={{
          backgroundImage: "url('/images/banne.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "394px",
        }}
      >
        <div className="flex flex-col lg:flex-row text-white justify-between w-11/12 lg:w-3/4 m-auto items-center py-5 gap-6 lg:gap-0">
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
              Transforme{" "}
              <span className="text-[#41F27C]">
                sua visão em <br className="hidden lg:block" /> realidade
              </span>{" "}
              com imagens aéreas <br className="hidden lg:block" />
              em alta definição para o seu <br className="hidden lg:block" /> projeto!
            </h1>
            <p className="text-lg sm:text-xl">
              Contrate nossa empresa <span className="text-[#41F27C] font-bold">hoje mesmo</span>
              <br /> para imagens aéreas de qualidade incomparável.
            </p>
          </div>
          <div className="w-full md:w-56 m-auto md:m-0">
            <Button onClick={openWhatsApp} children="Solicite uma Cotação" bgColor="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
