'use client'

import { CircularCounter } from "@/components/ui/CircleCount";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import CarouselMobile from '@/components/ui/CarouselMobile';
import Image from "next/image";

const slideData = [
    {
        id: 1,
        content:
            <div className="flex flex-col gap-2 text-secondary items-center">
                <CircularCounter
                    percentage={25}
                    topText="Hasta un"
                    bottomText="menos"
                    colorClass="text-primary"
                />
                <p className="font-bold xl:text-xl">
                    De tiempo en tu cobranza
                </p>
            </div>
    },
    {
        id: 2,
        content:
            <div className="flex flex-col gap-2 text-secondary items-center">
                <CircularCounter
                    percentage={3.5}
                    topText="Hasta un"
                    bottomText="más"
                    colorClass="text-primary"
                />
                <p className="font-bold xl:text-xl">
                    De la ganancia de tu factoraje
                </p>
            </div>
    },
    {
        id: 3,
        content:
            <div className="flex flex-col gap-2 text-secondary items-center">
                <CircularCounter
                    percentage={15}
                    topText="Hasta un"
                    bottomText=""
                    colorClass="text-primary"
                />
                <p className="font-bold xl:text-xl">
                    En mantenimiento
                </p>
            </div>
    },
    {
        id: 4,
        content:
            <div className="flex flex-col gap-2 text-secondary items-center">
                <CircularCounter
                    percentage={50}
                    topText="Hasta un"
                    bottomText="menos"
                    colorClass="text-primary"
                />
                <p className="font-bold xl:text-xl">
                    Tiempo en tus Cartas Porte
                </p>
            </div>
    },
    {
        id: 5,
        content:
            <div className="flex flex-col gap-2 text-secondary items-center">
                <CircularCounter
                    percentage={15}
                    topText="Hasta un"
                    bottomText="menos"
                    colorClass="text-primary"
                />
                <p className="font-bold xl:text-xl">
                    De tiempo en facturación
                </p>
            </div>
    }
]

export default function Section2() {
    return (
        <section className="bg-white relative py-10">
            <Image
                src={"/svg/puntitos-negros.svg"}
                width={100}
                height={100}
                alt="Contrologi"
                className="hidden xl:block absolute top-0 left-0 xl:w-[200px] opacity-30"
            />
            <div className="container flex flex-col gap-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary xl:text-[38px] text-[28px] font-bold">
                    Experimenta los resultados de nuestros clientes
                </motion.h2>

                <div className="hidden xl:flex xl:flex-wrap items-center justify-center gap-10">
                    {slideData.map((slide) => (
                        <motion.div
                            key={slide.id}
                            className="xl:w-[30%]"
                        >
                            {slide.content}
                        </motion.div>
                    ))}
                </div>


                <div className="xl:hidden -mt-18">
                    <CarouselMobile slides={slideData} paginationHeightClass="h-100" />
                </div>

            </div>
        </section>
    );
}