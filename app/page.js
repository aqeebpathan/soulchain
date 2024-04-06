import Hero from "@/sections/Hero";
import Affiliations from "@/sections/Affiliations";
import Digiproofs from "@/sections/Digiproofs";
import SoulID from "@/sections/SoulID";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative ">
        <Affiliations />
        <div className="absolute top-[40%]  inset-0 flex justify-center gradient-bg z-10"></div>
        <Digiproofs />
      </div>
      <SoulID />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
