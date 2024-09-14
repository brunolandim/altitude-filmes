import Header from "@/components/Header";
import MarqueeText from "@/components/MarqueeText";
import FifthSection from "@/components/Sections/FifthSection";
import FirstSection from "@/components/Sections/FirstSection";
import Footer from "@/components/Sections/Footer";
import FourthSection from "@/components/Sections/FourthSection/FourthSection";
import SecondSection from "@/components/Sections/SecondSection/SecondSection";
import ThirdSection from "@/components/Sections/ThirdSection";

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
    </div>
  );
}
