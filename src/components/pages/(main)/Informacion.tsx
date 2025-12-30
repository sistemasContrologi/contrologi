'use client'

import { motion } from "framer-motion";
import Link from "next/link";


export default function InformacionSection() {
    return (
        <section className="bg-black">
            <div className="container flex flex-col gap-10 items-center py-16 text-white">
                <div className="flex flex-col gap-6 items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-white xl:text-[38px] text-[28px] text-center font-bold">
                        ¿Necesitas más información?
                    </motion.h2>

                    <p className="xl:text-lg xl:w-[600px]">
                        Recibe la atención inmediata de nuestros ejecutivos, en donde te daremos la mejor opción para ti
                    </p>

                    <Link href={'/contacto'}
                    className="bg-white w-fit py-3 px-6 rounded-full font-bold text-primary hover:bg-white/80 transition-colors duration-300 cursor-pointer"
                    >
                    Contáctanos
                    </Link>
                </div>
            </div>
        </section>
    );
}