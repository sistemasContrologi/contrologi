'use client'

import CarouselMobile from "@/components/ui/CarouselMobile";
import { motion } from "framer-motion";
import Image from "next/image";

const slideData = [
    {
        id: 1,
        content:
            <Image
                src={"/svg/plan-plus.svg"}
                width={900}
                height={100}
                alt="Planes"
            />
    },
    {
        id: 2,
        content:
            <Image
                src={"/svg/plan-smart.svg"}
                width={900}
                height={100}
                alt="Planes"
            />
    }
]

const buttonTap = 'tap:scale-95 active:scale-95 transition-all duration-150 ease-in-out';

export default function Section3() {
    return (
        <section className="bg-[#F6F6F6] relative py-10 overflow-hidden">

            <Image
                src={"/svg/puntitos-rojos.svg"}
                width={100}
                height={100}
                alt="Contrologi"
                className="absolute bottom-0 left-0 xl:w-[500px] transform scale-y-[-1]"
            />

            <div className="flex flex-col xl:gap-8">
                <div className="flex flex-col items-center gap-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-secondary xl:text-[38px] text-[28px] text-center font-bold -mb-12 xl:mb-0">
                        Plan perfecto para tu empresa
                    </motion.h2>

                    <Image
                        src={"/svg/planes.svg"}
                        width={900}
                        height={100}
                        alt="Planes"
                        className="hidden xl:block"
                    />

                    <CarouselMobile slides={slideData} paginationHeightClass="h-200" />

                </div>

                <div>
                    <div>
                        <button className={buttonTap}>Plan mensual</button>
                        <button className={buttonTap}>Plan anual</button>
                    </div>
                </div>
            </div>
        </section>
    );
}