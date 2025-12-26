
import ContactoSection from "@/components/pages/(main)/contacto/Contacto";
import FAQ from "@/components/pages/(main)/contacto/FAQ";
import Hero from "@/components/pages/(main)/contacto/Hero";
import Section1 from "@/components/pages/(main)/contacto/Section1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos y descubre cómo Contrologi puede optimizar tu logística de carga. Nuestro equipo está listo para ayudarte a digitalizar tu operación.",
  openGraph: {
    title: "Contacto | Contrologi",
    description:
      "Habla con nuestro equipo y empieza a optimizar tu logística de carga con Contrologi.",
    url: "https://contrologi.vercel.app/contacto",
  },
};



export default function ContactoPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <Hero />

      <Section1 />

      <FAQ />

      <ContactoSection />
    </main>
  );
}