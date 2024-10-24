"use client";
import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import FifthSection from "@/components/Sections/FifthSection";
import FirstSection from "@/components/Sections/FirstSection";
import Footer from "@/components/Sections/Footer";
import FourthSection from "@/components/Sections/FourthSection/FourthSection";
import SecondSection from "@/components/Sections/SecondSection/SecondSection";
import ThirdSection from "@/components/Sections/ThirdSection";
import { openWhatsApp } from "@/services/openWhatsApp";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <FirstSection />
        <MarqueeText />
        <div className="bg-[#06100A]">
          <SecondSection />
        </div>
        <ThirdSection />
        <div className="bg-[#06100A]">
          <FourthSection />
        </div>
        <FifthSection />
      </main>
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=556199670870&text=Olá! Estou visitando o site e gostaria de saber mais sobre os serviços de captação de imagens aéreas com drones.%0APoderia me passar mais informações, por favor?"
        className="float"
        aria-label="Botão para contato no WhatsApp"
      >
        <svg className="icon">
          <path d="M.33,48.33,3.06,35.62A23.67,23.67,0,0,1,0,24,24.06,24.06,0,0,1,24.12,0h0a23.95,23.95,0,1,1,0,47.89,24.33,24.33,0,0,1-11-2.61ZM13.7,41.08l.67.36a20.3,20.3,0,0,0,9.74,2.49A20,20,0,1,0,4,24a19.78,19.78,0,0,0,2.89,10.3l.41.68L5.52,43Z" />
          <path d="M34.67,31.75C34.22,33,32,34.21,31,34.31S30,35.12,24.5,33s-9-7.77-9.27-8.13S13,21.92,13,19.27a6.08,6.08,0,0,1,1.89-4.5,2,2,0,0,1,1.45-.67c.36,0,.72.05,1,.05s.77-.18,1.22.9,1.54,3.72,1.67,4a1,1,0,0,1,.05.95,3.53,3.53,0,0,1-.54.89c-.28.32-.58.71-.82.95s-.55.56-.24,1.09a16.48,16.48,0,0,0,3,3.73,14.93,14.93,0,0,0,4.37,2.68c.54.26.86.22,1.17-.14s1.36-1.58,1.72-2.12.72-.45,1.22-.26,3.17,1.47,3.71,1.74.9.41,1,.63A4.4,4.4,0,0,1,34.67,31.75Z" />
        </svg>
      </a>
    </div>
  );
}
