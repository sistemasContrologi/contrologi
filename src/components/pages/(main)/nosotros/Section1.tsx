'use client'

import CarouselMobile from "@/components/ui/CarouselMobile";
import { motion } from "framer-motion";
import Image from "next/image";

const slideData = [
    {
        id: 1,
        content:
            <div className="flex flex-col gap-2">
                <h3 className="font-bold xl:text-xl text-lg text-[#780614]">+10 años de experiencia</h3>
                <p className="font-medium">
                    Logramos detectar áreas de oportunidad y satisfacer las necesidades de cada uno de nuestros clientes. Sobrepasamos expectativas.
                </p>
            </div>
    },
    {
        id: 2,
        content:
            <div className="flex flex-col gap-2">
                <h3 className="font-bold xl:text-xl text-lg text-[#780614]">
                    Cremos tu operación logística juntos
                </h3>
                <p className="font-medium">
                    Mantenemos la relación comercial con nuestros clientes y socios comerciales al garantizar resultados inmediatos.
                </p>
            </div>
    }
]

export default function Section1() {
    return (
        <section className="container flex flex-col xl:flex-row py-10 text-secondary">
            <div className="flex flex-col text-center xl:text-left gap-8 xl:w-1/2">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary xl:text-[38px] text-[28px] font-bold leading-tight xl:w-[450px]">
                    Evolucionamos el Sector Transportista
                </motion.h2>
                <p className="font-medium xl:text-lg">
                    Transformamos tu operación, agilizamos procesos y aumentamos tu utilidad de forma exponencial. entregamos resultados consistentes, tangibles y medibles.
                </p>

                <div className="hidden xl:grid grid-cols-2 gap-5">
                    {slideData.map((slide) => (
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: slide.id * 0.2 }}
                        >
                            {slide.content}
                        </motion.div>
                    ))}
                </div>

                <div className="-mt-10">
                    <CarouselMobile slides={slideData} />
                </div>
            </div>

            <div className="flex flex-col items-end xl:w-1/2 mt-10 xl:mt-0">
                <Image
                    src={'/img/secc-nosotros.webp'}
                    width={450}
                    height={400}
                    alt="Contrologi: Nosotros"
                />
            </div>
        </section>
    );
}