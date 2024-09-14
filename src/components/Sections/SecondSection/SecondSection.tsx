"use client";
import React from "react";
import CardSection from "./CardSection";

const SecondSection: React.FC = () => {
  return (
    <section id="diferenciais" className="flex flex-col w-11/12 lg:w-3/4 m-auto text-white py-20 lg:py-40 gap-10">
      <h1 className="text-3xl lg:text-5xl font-bold uppercase text-center">
        Por que Escolher
        <br /> a <span className="text-[#41F27C]">Altitude Filmes?</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        <CardSection
          title="Captação em alta"
          titleGreen="definição 4K"
          paragraf="Capturamos cada detalhe com a mais alta definição, oferecendo imagens nítidas e impactantes."
        />
        <CardSection
          title="Experiência de"
          titleGreen="mais de 8 anos"
          paragraf="Nossa trajetória sólida no mercado garante expertise e confiabilidade em cada projeto."
        />
        <CardSection
          title="Entrega"
          titleGreen="Rápida e Eficiente"
          paragraf="Compromisso com prazos e qualidade, garantindo que você receba seu projeto no tempo certo"
        />
        <CardSection
          title="Profissionais"
          titleGreen="Certificados"
          paragraf="Nossa equipe altamente qualificada assegura resultados profissionais e dentro das normas."
        />
      </div>
    </section>
  );
};

export default SecondSection;
