import Empresas from "@/components/pages/(main)/Empresas";
import InformacionSection from "@/components/pages/(main)/Informacion";
import Hero from "@/components/pages/(main)/nosotros/Hero";
import Section1 from "@/components/pages/(main)/nosotros/Section1";
import Section2 from "@/components/pages/(main)/nosotros/Section2";
import Section3 from "@/components/pages/(main)/nosotros/Section3";
import Section4 from "@/components/pages/(main)/nosotros/Section4";


export const metadata = {
 title: 'Nosotros',
 description: 'Nosotros uwu',
};

export default function NosotrosPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <Hero />

      <Section1 />

      <Empresas />

      <Section2 />

      <Section3 />

      <Section4 />

      <InformacionSection />
    </main>
  );
}