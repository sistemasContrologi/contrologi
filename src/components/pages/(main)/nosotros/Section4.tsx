'use client'

import CarruselMobile from "@/components/ui/CarouselMobile";
import ImageCard from "@/components/ui/ImageCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function Section4() {
    return (
        <section className="container flex flex-col xl:flex-row items-center gap-10 py-10 text-secondary">
                <div className="flex flex-col xl:w-1/2 gap-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-primary xl:text-[34px] text-[28px] text-center xl:text-left font-bold">
                        Nuestro Origen
                    </motion.h2>

                    <p className="font-medium xl:text-xl xl:text-left text-center xl:w-[480px]">
                        Somos líderes en desarrollo de Software a la medida para empresas internacionales, gracias a nuestra casa desarrolladora <Link href={'https://blueservices-sc.com.mx/'} target="_blank" rel="noopener"
                        className="text-primary font-bold"
                        >
                        Blueservices</Link>. 
                        <br /> <br />
                        <b>Nuestra experiencia en el sector transportista nos ha permitido encontrar áreas de oportunidad y herramientas vitales para tu negocio.</b>
                    </p>
                </div>

                <div className="relative h-50 xl:h-78 w-full xl:w-1/2 xl:rounded-l-2xl">
                    <Image
                        src={"/img/origen.webp"}
                        fill
                        sizes="540px"
                        className="object-contain w-fit xl:rounded-l-[60px]"
                        alt="Mockup del sistema"
                    />
                </div>


            </section>
    );
}