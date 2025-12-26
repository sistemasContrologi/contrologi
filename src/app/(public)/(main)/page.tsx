import Hero from "@/components/pages/(main)/inicio/Hero";
import Section2 from "@/components/pages/(main)/inicio/Section2";
import SectionPlanes2 from "@/components/pages/(main)/planes/SectionPlanes2";
import Section4 from "@/components/pages/(main)/inicio/Section4";
import Empresas from "@/components/pages/(main)/Empresas";
import InformacionSection from "@/components/pages/(main)/Informacion";
import Section5 from "@/components/pages/(main)/inicio/Section5";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />

      <Empresas />

      <SectionPlanes2 />

      <Section2 />

      <Section5 />

      <Section4 />

      <InformacionSection />
    </main>
  );
}
