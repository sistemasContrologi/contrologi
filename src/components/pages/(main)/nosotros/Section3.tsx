'use client'

import CarruselMobile from "@/components/ui/CarouselMobile";
import ImageCard from "@/components/ui/ImageCard";
import { motion } from "framer-motion";
import Image from "next/image";



export default function Section3() {
    return (
        <section className="bg-secondary py-10">
            <div className="container flex flex-col xl:flex-row-reverse items-center gap-10">
                <div className="flex flex-col xl:w-1/2 gap-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-[#FE0100] xl:text-[34px] text-[28px] text-center xl:text-left font-bold">
                        Nuestro Compromiso
                    </motion.h2>

                    <p className="font-medium xl:text-xl xl:text-left text-center xl:w-[480px]">
                        Ayudarte a escalar, profesionalizar tu operación y ofrecerte el control total en tiempo real de todos los procesos que forman parte de tu empresa.
                        <br /> <br />
                        <b>Somos el aliado perfecto que garantiza resultados.</b>
                    </p>
                </div>

                <div className="relative h-50 xl:h-78 w-full xl:w-1/2 xl:rounded-l-2xl">
                    <Image
                        src={"/img/compromiso.webp"}
                        fill
                        sizes="540px"
                        className="object-contain w-fit xl:rounded-r-[60px]"
                        alt="Mockup del sistema"
                    />
                </div>


            </div>
        </section>
    );
}