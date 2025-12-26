import Hero from "@/components/pages/(main)/planes/Hero";
import Section1 from "@/components/pages/(main)/planes/Section1";
import Testimonios from "@/components/pages/(main)/planes/Testimonios";
import Section5 from "@/components/pages/(main)/planes/Section5";
import Section3 from "@/components/pages/(main)/planes/Section3";
import SectionPlanes2 from "@/components/pages/(main)/planes/SectionPlanes2";
import Empresas from "@/components/pages/(main)/Empresas";
import InformacionSection from "@/components/pages/(main)/Informacion";


export const metadata = {
 title: 'Planes',
 description: 'Planes uwu',
};

export default function PlanesPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <Hero />

      <Section1 />

      <Section3 />

      <Section5 />
      
      <Testimonios />

      <Empresas />

      <InformacionSection />
    </main>
  );
}