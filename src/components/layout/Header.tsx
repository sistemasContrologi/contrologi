'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useModal } from "@/config/hooks/useModal";
import Modal from "@/components/ui/Modal";
import FormContacto from "@/config/forms/(main)/formContacto";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Planes", href: "/planes" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { openModal, modalProps } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMobile = useCallback(
    () => setMobileOpen((prev) => !prev),
    []
  );

  const closeMobile = useCallback(
    () => setMobileOpen(false),
    []
  );

  return (
    <header
      className={`
        h-20 fixed flex items-center top-0 left-0 w-full z-50 transition-colors duration-300
        ${isScrolled ? "bg-black shadow-md" : "bg-transparent"}
      `}
    >
      <div className="container flex justify-between items-center px-4">
        {/* Logo móvil */}
        <Image
          src={"/svg/logo-contrologi.svg"}
          width={100}
          height={100}
          alt="Logotipo Contrologi"
          className="block w-40 md:hidden"
          priority
        />

        {/* Logo desk: solo se muestra en desktop y solo cuando hay scroll */}
        {isScrolled && (
          <Link href={'/'}>
            <Image
              src={"/svg/logo-contrologi.svg"}
              width={100}
              height={100}
              alt="Logotipo Contrologi"
              className="hidden md:block w-45"
              priority
            />
          </Link>
        )}


        {/* NAV (DESKTOP) */}
        <nav className="container hidden md:flex gap-10 justify-end items-center">
          {navigation.map((item) => {
            const isActive = item.href === pathname;

            return (
              <motion.div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`
                    font-bold 
                    transition-colors 
                    duration-300 
                    ease-in-out
                    ${isActive ? "text-primary" : ""}
                    hover:text-primary 
                  `}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -top-5 left-0 w-full h-1 bg-primary"
                  />
                )}
              </motion.div>
            );
          })}
          <button
            onClick={openModal}
            className="bg-primary w-fit py-3 px-6 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
            Pruébalo ahora
          </button>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 transition"
        >
          <Menu size={22} />
        </button>
      </div>

      <div
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 md:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeMobile}
      />

      <aside
        className={`
          fixed right-0 top-0 z-50 h-full w-[88%] max-w-[300px] bg-black text-white shadow-2xl
          transition-transform duration-300 md:hidden flex flex-col
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-white/70">Menú</span>
          <button
            aria-label="Cerrar menú"
            onClick={closeMobile}
            className="rounded-md p-2 hover:bg-white/5 transition"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-2 py-2">
          {navigation.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`
                  flex items-center justify-between rounded-md px-3 py-3 text-base
                  transition-colors hover:bg-neutral-700 hover:text-white
                  ${isActive ? "bg-neutral-700 text-white" : "text-white/90"}
                `}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <button
          onClick={openModal}
          className="bg-primary w-fit py-3 px-6 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer mx-auto mt-10">
          Pruébalo ahora
        </button>
      </aside>

      <Modal
        {...modalProps}
        title="Mi Gran Título"
        size="md"
        ariaLabel="Detalles del formulario"
      >
        <div className="-mt-12 text-secondary flex flex-col gap-6">
          <div className="flex flex-col text-center gap-1">
            <h3 className="font-bold text-primary xl:text-[28px] text-2xl">
              ¡Contactanos ahora!
            </h3>
            <p className="text-sm xl:text-base">
              Uno de nuestros asesores se pondrá en contacto contigo.
            </p>
          </div>
          <FormContacto />
        </div>
      </Modal>
    </header>
  );
}
