'use client';

import CarruselMobile from "@/components/ui/CarouselMobile";
import ImageCard from "@/components/ui/ImageCard";
import { motion } from "framer-motion";

const cardData = [
    {
        imageSrc: "/icon/monedas.svg",
        titulo: "Control tarifario",
        descripcion: "Controla tus tarifarios y los de otras líneas transportistas."
    },
    {
        imageSrc: "/icon/valor.svg",
        titulo: "Administración de ventas",
        descripcion: "Genera prospectos y da seguimiento a cotizaciones."
    },
    {
        imageSrc: "/icon/escalable.svg",
        titulo: "Visualización de rentabilidad",
        descripcion: "Cobra más de lo que pagas. Conoce tus costos y ten claras tus ganancias."
    },
    {
        imageSrc: "/icon/documento.svg",
        titulo: "Generación de Carta Porte",
        descripcion: "Tramita y obtén la carta porte timbrada ante el SAT."
    },
    {
        imageSrc: "/icon/transporte.svg",
        titulo: "Administración de la operación",
        descripcion: "Control de rutas, monitoreo de unidades y control de evidencias."
    },
    {
        imageSrc: "/icon/factura.svg",
        titulo: "Facturación y cobranza",
        descripcion: "Emite facturas de crédito y administra tus cuentas por cobrar."
    },
];

export const carruselSlides = cardData.map((card, index) => ({
    id: index,
    content: (
        <ImageCard
            clasesContenedor="flex flex-col items-center gap-3 text-secondary"
            clasesImgContenedor="bg-white w-fit p-4 rounded-full shadow"
            imageSrc={card.imageSrc}
            imageWidth={30}
            imageHeight={30}
            titulo={card.titulo}
            clasesTitulo="font-bold text-xl"
            descripcion={card.descripcion}
        />
    ),
}));

export default function Section1() {
    return (
        <section className="bg-[#F6F6F6] py-10">
            <div className="container flex flex-col xl:gap-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-secondary xl:text-[34px] text-[28px] font-bold">
                    Mejora tu logística con Contrologi
                </motion.h2>

                <div className="hidden container xl:grid xl:grid-cols-3 xl:gap-x-14 xl:gap-y-10 justify-items-center mx-auto">
                    {cardData.map((card, index) => (
                        <ImageCard
                            key={index}
                            clasesContenedor="flex flex-col items-center gap-3 text-secondary"
                            clasesImgContenedor="bg-white w-fit p-4 rounded-full shadow"
                            imageSrc={card.imageSrc}
                            imageWidth={30}
                            imageHeight={30}
                            titulo={card.titulo}
                            clasesTitulo="font-bold text-xl"
                            descripcion={card.descripcion}
                        />
                    ))}
                </div>

                <div className="-mt-8">
                    <CarruselMobile
                        slides={carruselSlides}
                        paginationHeightClass="h-75"
                    />
                </div>

            </div>
        </section>
    );
}