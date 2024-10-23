"use client";
import React from "react";
import Button from "../../Button";
import { openWhatsApp } from "@/services/openWhatsApp";
import CardAboutSection from "./CardAboutSection";
import MoreInfoCard from "./MoreInfoCard";

const FourthSection: React.FC = () => {
  return (
    <section id="sobre-nos" className="flex flex-col w-11/12 lg:w-3/4 m-auto text-white py-20 lg:py-40">
      <div className="flex flex-col lg:flex-row w-full justify-between gap-10">
        <div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <img src="/images/grupo32.webp" alt="grupo" />
            <h1 className="text-3xl lg:text-5xl font-bold">
              SOBRE <span className="text-[#41F27C]">NÓS</span>
            </h1>
          </div>

          <p className="w-full lg:w-[462px] pt-6 lg:pt-10 text-lg lg:text-[22px] text-justify md:text-left">
            Somos uma empresa de Brasília especializada em captação de imagens aéreas com drones de alta definição.
            Nosso objetivo é fornecer soluções visuais de alta qualidade, personalizadas para cada cliente, com
            segurança e precisão. Com um portfólio diversificado, nos destacamos pela inovação e pelo compromisso com a
            excelência.
          </p>
        </div>
        <img className="w-full lg:w-auto" src="/images/sobrenos.webp" alt="Sobre Nós" />
      </div>

      <img className="w-64 lg:w-96 py-10 mx-auto" src="/svg/logo.svg" alt="logo" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        <CardAboutSection
          shadowAlign="left"
          paragrafAlign="left"
          title="Missão"
          paragraf="Capturar e entregar imagens aéreas de alta qualidade que agreguem valor aos projetos de nossos clientes, elevando a percepção visual e profissional."
        />
        <CardAboutSection
          shadowAlign="center"
          paragrafAlign="right"
          title="Visão"
          paragraf="Capturar e entregar imagens aéreas de alta qualidade que agreguem valor aos projetos de nossos clientes, elevando a percepção visual e profissional."
        />
        <CardAboutSection
          shadowAlign="right"
          paragrafAlign="right"
          title="Valores"
          paragraf="Capturar e entregar imagens aéreas de alta qualidade que agreguem valor aos projetos de nossos clientes, elevando a percepção visual e profissional."
        />
      </div>

      <div id="servicos" className="grid grid-cols-1 lg:grid-cols-3 items-center py-10 lg:py-20 gap-6 lg:gap-10 w-full">
        <div className="w-full md:w-56 m-auto md:m-0">
          <Button onClick={openWhatsApp} children="SOLICITE UMA COTAÇÃO" bgColor="default" />
        </div>
        <p className="text-xl lg:text-2xl text-center lg:text-left">
          Soluções de Captação Aérea para Diversos Setores e Necessidades Específicas
        </p>
        <p className="text-3xl lg:text-5xl font-bold text-center lg:text-right">
          NOSSOS SERVIÇOS <span className="text-[#41F27C]">ESPECIALIZADOS</span>
        </p>
      </div>

      <div className="m-auto flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between md:w-full">
        <MoreInfoCard
          shadowAlign="left"
          title="Eventos Corporativos e Institucionais"
          paragraf="Cobertura completa e diferenciada para eventos que demandam qualidade, impacto visual e sofisticação."
        />
        <MoreInfoCard
          shadowAlign="right"
          title="Cobertura de Eventos e Shows"
          paragraf="Imagens aéreas que capturam a emoção e a grandiosidade de grandes eventos e shows, proporcionando ângulos únicos e memoráveis."
        />
        <MoreInfoCard
          shadowAlign="right"
          title="Imagens para o Agronegócio"
          paragraf="Soluções visuais avançadas para monitoramento e planejamento agrícola, ajudando na gestão eficiente de recursos e áreas cultiváveis."
        />
        <MoreInfoCard
          shadowAlign="right"
          title="Acompanhamento de Obras"
          paragraf="Monitoramento aéreo contínuo que acompanha o progresso das construções, permitindo uma visão ampla e detalhada da evolução do projeto."
        />
      </div>
    </section>
  );
};

export default FourthSection;
