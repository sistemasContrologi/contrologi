
import ContactoSection from "@/components/pages/(main)/contacto/Contacto";
import FAQ from "@/components/pages/(main)/contacto/FAQ";
import Hero from "@/components/pages/(main)/contacto/Hero";
import Section1 from "@/components/pages/(main)/contacto/Section1";



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