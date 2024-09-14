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
      <div className="fixed bottom-6 right-6 z-50 cursor-pointer" onClick={openWhatsApp}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 32 32">
          <path
            fill="#25D366"
            d="M16 0C7.162 0 0 7.162 0 16c0 2.82.735 5.558 2.125 7.967L0 32l8.27-2.135A15.97 15.97 0 0016 32c8.837 0 16-7.162 16-16C32 7.162 24.837 0 16 0zm7.777 22.84c-.34.955-1.675 1.755-2.352 1.87-.601.113-1.372.2-4.705-1.003-3.953-1.547-6.465-5.47-6.657-5.73-.194-.261-1.587-2.114-1.587-4.036s.998-2.868 1.348-3.27c.35-.404.763-.505 1.017-.505.255 0 .508.002.73.013.235.011.552-.088.86.66.34.811 1.17 2.785 1.276 2.984.102.199.171.435.033.696-.133.27-.2.436-.4.675-.197.233-.418.517-.598.69-.2.195-.407.405-.175.795.233.394 1.04 1.706 2.234 2.767 1.539 1.292 2.83 1.688 3.226 1.882.395.196.626.163.852-.099.233-.271 1.002-1.165 1.273-1.567.271-.402.536-.332.893-.2.36.13 2.291 1.08 2.687 1.277.396.198.66.296.755.46.09.163.09.953-.25 1.907z"
          />
        </svg>
      </div>
    </div>
  );
}
