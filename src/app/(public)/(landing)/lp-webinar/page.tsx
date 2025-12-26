import Footer from "@/components/pages/(landing)/Footer";
import FormWebinar from "@/config/forms/(landing)/FormWebinar";
import { Calendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Webinar Gratuito de Logística para Transportistas',
    description: 'Aprende a digitalizar tu operación logística, generar Cartas Porte y reducir costos en nuestro webinar gratuito para transportistas. Regístrate hoy.',
    keywords: ['webinar', 'contrologi', 'logística', 'carta porte', 'plataforma digital'],
    openGraph: {
        title: 'Webinar Gratuito de Logística para Transportistas',
        description: 'Aprende a digitalizar tu operación logística, generar Cartas Porte y reducir costos en nuestro webinar gratuito para transportistas. Regístrate hoy.',
        url: 'https://contrologi.com/lp-webinar',
        siteName: 'Contrologi',
        images: [
            {
                url: 'https://contrologi.com/og-image-webinar-logistica.png',
                width: 1200,
                height: 630,
                alt: 'Webinar Gratuito de Logística para Transportistas',
            },
        ],
        locale: 'es_ES',
        type: 'website',
    }
};

export default function LPWebinar() {
    return (
        <main>
            <section className="relative flex flex-col xl:gap-12 items-center text-center text-white">
                <img src="/img/frame-dots.webp" alt="Puntitos blancos"
                    className="absolute top-0 left-0 xl:w-120 w-60 scale-y-[-1] z-0"
                />

                <img src="/img/frame-dots.webp" alt="Puntitos blancos"
                    className="absolute bottom-0 right-0 xl:w-120 w-60 scale-x-[-1] z-0"
                />
                {/* HERO */}
                <section className="container flex flex-col gap-4 items-center pt-18 xl:pt-22 z-99">
                    <Link href={'/'}>
                        <img
                            src="/svg/logo-contrologi.svg"
                            alt="Contrologi"
                            className="w-44 md:w-52 xl:w-60 xl:mb-5"
                        />
                    </Link>

                    <span className="text-base md:text-lg xl:text-2xl">
                        Te invita
                    </span>

                    <h1 className="text-3xl xl:text-5xl xl:w-[580px]">
                        Digitaliza tu operación y{' '}
                        <span className="font-bold text-primary">negocio logístico</span>
                    </h1>
                </section>

                {/* TÍTULO WEBINAR */}
                <section className="container flex flex-col xl:flex-row items-center justify-center gap-6 pt-8">
                    <hr className="border-2 border-primary w-full xl:w-[20%]" />

                    <h2 className="font-bold text-xl md:text-3xl px-2">
                        Webinar GRATUITO para Transportistas
                    </h2>

                    <hr className="border-2 border-primary w-full xl:w-[20%]" />
                </section>

                {/* CONTENIDO */}
                <section className="container flex flex-col items-center gap-12 py-8">
                    <p className="font-medium text-base md:text-lg xl:text-xl xl:w-[800px]">
                        Descubre cómo optimizar tu operación logística con la herramientas adecuada.
                        En este evento exclusivo aprenderás a:
                    </p>

                    <ul className="list-disc list-inside text-center xl:text-xl marker:text-primary space-y-2 max-w-3xl">
                        <li>
                            <b>Generar Cartas Porte y facturas</b> de forma rápida y sin errores.
                        </li>
                        <li>
                            <b>Controlar los gastos de viaje con evidencias</b> en tiempo real reduciendo pérdidas.
                        </li>
                        <li>
                            <b>Implementar un mantenimiento preventivo de tus camiones</b> para disminuir fallas y reducir costos.
                        </li>
                    </ul>

                    <div className="bg-primary hidden xl:flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-full text-sm xl:text-xl">
                        <Calendar />
                        <span className="font-semibold">
                            Fecha: Martes 07 de Octubre | Hora: 7:00 pm
                        </span>
                    </div>

                    <div className="bg-primary xl:hidden flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full text-sm xl:text-xl">
                        <Calendar />
                        <span className="font-semibold">
                            Fecha: Martes 07 de Octubre
                        </span>
                        <span className="font-semibold -mt-3">
                            Hora: 7:00 pm
                        </span>
                    </div>

                    <span className="text-base md:text-lg xl:text-xl">
                        💻 Evento 100% en línea 💻
                    </span>
                </section>

                {/* FORM */}
                <section className="container flex flex-col items-center gap-10 pb-16 xl:pb-10 z-99">
                    <h3 className="font-bold text-2xl md:text-3xl xl:text-4xl">
                        ¡Regístrate! Cupo limitado
                    </h3>

                    <FormWebinar />
                </section>


            </section>
            <Footer />
        </main>
    );
}
