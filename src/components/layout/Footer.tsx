// app/components/Footer.tsx
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { JSX } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-neutral-900 text-neutral-100 text-sm">
      <div className="container flex w-full max-w-6xl flex-col gap-10 px-4 py-10 md:gap-8 md:py-12">
        {/* Bloque superior */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="flex justify-center md:block">
            <Link href={"/"}>
              <Image
                src="/svg/logo-contrologi.svg"
                alt="Contrologi"
                width={190}
                height={40}
                className="h-12 w-auto md:h-14"
                priority
              />
            </Link>
          </div>

          {/* Datos de contacto */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-start justify-center gap-2 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <Link href={""} className="leading-snug transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none">
                Galeana 6 4 Panamericano Centro
                <br />
                Ixtepec 70110, Ixtepex, Oax.
              </Link>
            </div>

            <div className="flex items-start justify-center gap-2 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <Link href={"https://maps.app.goo.gl/55CtyfEcMW4Homp96"} target="_blank" rel="noopener noreferrer" className="leading-snug transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none">
                Cto. Pintores #54 A, Cd. Satélite,
                <br />
                53100, Naucalpan de Juárez, Méx.
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="tel:+525589506246"
                className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                +52 55 8950 6246
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="mailto:soporte@blueservices.mx"
                className="break-all transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                soporte@blueservices.mx
              </a>
            </div>
          </div>

          {/* Redes y enlaces */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            {/* Redes sociales */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Contrologi/"
                target="_blank"
                aria-label="Facebook"
                className="rounded-full bg-white p-2 hover:bg-white/80 transition-colors duration-300 ease-in-out"
              >
                <FaFacebookF className="h-6 w-6 text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/contrologi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white p-2 hover:bg-white/80 transition-colors duration-300 ease-in-out"
              >
                <FaInstagram className="h-6 w-6 text-secondary" />
              </a>
            </div>

            {/* Links legales */}
            <nav className="flex flex-col gap-1 text-center md:text-right">
              <Link
                href="/aviso-de-privacidad"
                className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                Aviso de privacidad
              </Link>
              <Link
                href="/terminos-y-condiciones"
                className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                Términos y condiciones
              </Link>
            </nav>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="h-px w-full bg-neutral-700" />

        {/* Copyright + créditos */}
        <div className="flex flex-col items-center text-neutral-400">
          <p className="text-center">
            © {new Date().getFullYear()} Contrologi. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
      <div className="bg-white text-secondary text-center py-5">
        <div className="container">
          <p className="font-medium">
          Diseño y desarrollo web realizado por{" "}
          <Link
            href="https://efectodigital.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
          >
            Agencia Efecto Digital
          </Link>
        </p>
        </div>
      </div>
    </footer>
  );
}
