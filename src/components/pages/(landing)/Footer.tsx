import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* TOP */}
      <div className="container mx-auto py-12">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10">
          {/* LOGO */}
          <img
            src="/svg/logo-contrologi.svg"
            alt="Contrologi"
            className="w-48"
          />

          {/* LINKS + SOCIAL */}
          <div className="flex flex-col items-center xl:items-end gap-6">
            <div className="text-center xl:text-right text-sm space-y-1">
              <Link href="#" className="block hover:text-primary transition">
                Política de privacidad
              </Link>
              <Link href="#" className="block hover:text-primary transition">
                Términos y condiciones
              </Link>
            </div>

            <div className="flex gap-4">
              <SocialIcon href="https://www.facebook.com/Contrologi/" icon={<Facebook size={25} />} />
              <SocialIcon href="https://www.instagram.com/contrologi/" icon={<Instagram size={25} />} />
              <SocialIcon href="https://www.linkedin.com/company/contrologi/" icon={<Linkedin size={25} />} />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-10 border-white/20" />

        {/* COPYRIGHT */}
        <p className="text-center text-sm">
          © 2025 Contrologi. Todos los derechos reservados.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-white/10 py-4">
        <p className="text-center text-xs">
          Diseño web realizado por{" "}
          <a href={'https://efectodigital.agency/'} target="_blank" rel="noopener noreferrer"
          className="font-semibold hover:text-primary transition-all duration-300">Agencia Efecto Digital</a>
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent hover:bg-primary w-12 h-12 flex items-center justify-center rounded-full border-2 border-white hover:border-primary hover:text-white transition"
    >
      {icon}
    </a>
  );
}
