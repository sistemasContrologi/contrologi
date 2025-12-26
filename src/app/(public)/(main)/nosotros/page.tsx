import Empresas from "@/components/pages/(main)/Empresas";
import InformacionSection from "@/components/pages/(main)/Informacion";
import Hero from "@/components/pages/(main)/nosotros/Hero";
import Section1 from "@/components/pages/(main)/nosotros/Section1";
import Section2 from "@/components/pages/(main)/nosotros/Section2";
import Section3 from "@/components/pages/(main)/nosotros/Section3";
import Section4 from "@/components/pages/(main)/nosotros/Section4";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "En Contrologi desarrollamos tecnología para transformar la logística de carga en México, ayudando a las empresas a operar de forma más eficiente.",
  openGraph: {
    title: "Quiénes somos | Contrologi",
    description:
      "Conoce al equipo detrás de Contrologi y nuestra misión de digitalizar la logística de carga en México.",
    url: "https://contrologi.vercel.app/nosotros",
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