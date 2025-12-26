import { Metadata } from "next";
import Link from "next/link";


export const metadata : Metadata = {
 title: 'Software de Logística y Gestión de Transporte',
 description: 'Controla rutas, genera Cartas Porte, monitorea unidades en tiempo real y optimiza tu operación logística con el software de Contrologi. Prueba ahora y reduce trámites.',
 keywords: ['software de logística', 'gestión logística', 'optimización de rutas', 'control de inventario', 'transporte y distribución', 'logística empresarial', 'soluciones logísticas', 'software de gestión de flotas', 'logística 4.0', 'automatización logística'],
    authors: [{ name: 'Agencia Efecto Digital', url: 'https://efectodigital.agency/' }],
    creator: 'Agencia Efecto Digital',
    publisher: 'Contrologi',
    openGraph: {
        title: 'Software de Logística y Gestión de Transporte',
        description: 'Controla rutas, genera Cartas Porte, monitorea unidades en tiempo real y optimiza tu operación logística con el software de Contrologi. Prueba ahora y reduce trámites.',
        url: 'https://contrologi.com/lp-software-logistica',
        siteName: 'Contrologi',
        images: [
            {
                url: 'https://contrologi.com/og-image-software-logistica.png',
                width: 1200,
                height: 630,
                alt: 'Software de Logística y Gestión de Transporte',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
};

export default function LPSoftwareLogistica() {
  return (
    <main className="bg-accent! min-h-screen">
        
        {/* hero */}
        <section className="relative xl:bg-[url('/img/hero-lp-software.webp')] bg-no-repeat bg-cover py-10">

            <section className="container">
                <Link href={'/'}>
                <img src="/svg/logo-contrologi.svg" alt="Contrologi" className=""/>
                </Link>
            </section>
        </section>
    </main>
  );
}