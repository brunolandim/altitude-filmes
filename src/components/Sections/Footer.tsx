"use client";
import React from "react";
import Button from "../Button";
import { openWhatsApp } from "@/services/openWhatsApp";
import { goToUrl } from "@/utils/goToUrl";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full  m-auto items-center gap-2">
      <div className="flex flex-col gap-2 bg-white w-full items-center  py-5">
        <p>Equipamentos segurados e regularizados</p>
        <div>
          <img
            src="/images/sarpas.png"
            alt="Sarpas"
            className="cursor-pointer"
            onClick={() => goToUrl("https://servicos.decea.mil.br/sarpas/")}
          />
        </div>
        <div className="flex">
          <img
            src="/images/decea.png"
            alt="Decea"
            className="cursor-pointer"
            onClick={() => goToUrl("https://www.decea.mil.br/drone/")}
          />
          <img
            src="/images/anatel.png"
            alt="Anatel"
            className="cursor-pointer"
            onClick={() => goToUrl("https://www.gov.br/pt-br/servicos/homologar-produtos-de-telecomunicacoes-anatel")}
          />
          <img
            src="/images/anac.png"
            alt="Anac"
            className="cursor-pointer"
            onClick={() => goToUrl("https://www.gov.br/anac/pt-br/assuntos/drones")}
          />
        </div>
      </div>
      <div className="bg-[#232526] w-full  py-10">
        <div className="w-3/4 m-auto">
          <img src="/svg/logo.svg" alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
