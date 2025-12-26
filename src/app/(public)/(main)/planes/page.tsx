import Hero from "@/components/pages/(main)/planes/Hero";
import Section1 from "@/components/pages/(main)/planes/Section1";
import Testimonios from "@/components/pages/(main)/planes/Testimonios";
import Section5 from "@/components/pages/(main)/planes/Section5";
import Section3 from "@/components/pages/(main)/planes/Section3";
import SectionPlanes2 from "@/components/pages/(main)/planes/SectionPlanes2";
import Empresas from "@/components/pages/(main)/Empresas";
import InformacionSection from "@/components/pages/(main)/Informacion";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Planes y precios",
  description:
    "Conoce los planes de Contrologi y elige la solución ideal para tu logística de carga. Escala tus operaciones con tecnología flexible y segura.",
  openGraph: {
    title: "Planes y precios | Contrologi",
    description:
      "Elige el plan de Contrologi que mejor se adapte a tu operación logística y haz crecer tu negocio con control total.",
    url: "https://contrologi.vercel.app/planes", 
    siteName: "Contrologi",
    images: [
      {
        url: "https://contrologi.vercel.app/img/contrologi-preview.png",
        width: 1200,
        height: 630,
        alt: "Contrologi",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
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