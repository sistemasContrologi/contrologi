'use client'

import CarruselMobile from "@/components/ui/CarouselMobile";
import ImageCard from "@/components/ui/ImageCard";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
    {
        imageSrc: "/icon/herramientas.svg",
        titulo: "Asesoría continua y soporte técnico especializado"
    },
    {
        imageSrc: "/icon/movil.svg",
        titulo: "Acceso 24/7 desde cualquier dispositivo"
    },
    {
        imageSrc: "/icon/menu.svg",
        titulo: "Interfaz intuitiva y fácil de usar"
    }
];


export default function Section2() {
    return (
        <section className="container flex flex-col xl:flex-row items-center gap-10 py-10">
            <div className="flex flex-col xl:w-1/2 gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary xl:text-4xl text-3xl text-center xl:text-left font-bold xl:leading-10">
                    ¿Por qué somos tu mejor opción en logística?
                </motion.h2>

                <div className="flex flex-col gap-6">
                    {cardData.map((card, index) => (
                        <ImageCard
                            key={index}
                            clasesContenedor="flex flex-row items-center gap-3 text-secondary"
                            clasesImgContenedor="bg-white w-fit p-4 rounded-full shadow border border-black/2"
                            imageSrc={card.imageSrc}
                            imageWidth={30}
                            imageHeight={30}
                            titulo={card.titulo}
                            clasesTitulo="font-bold xl:text-[22px] xl:pr-28"
                        />
                    ))}
                </div>
            </div>

            <div className="relative h-50 xl:h-78 w-full xl:w-1/2 xl:rounded-l-2xl">
                <Image 
                src={"/img/mockup-home.webp"}
                fill
                sizes="540px"
                className="object-contain w-fit xl:rounded-l-[60px]"
                alt="Mockup del sistema"
                />
            </div>


        </section>
    );
}