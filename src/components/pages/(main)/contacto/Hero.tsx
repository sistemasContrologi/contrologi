'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function Hero() {

    return (
        <motion.section
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[url('/img/bg-secciones.webp')] flex justify-center bg-cover bg-no-repeat relative"
        >

            <Image
                src={"/svg/puntitos-blancos.svg"}
                width={100}
                height={100}
                alt="Contrologi"
                className="hidden xl:block absolute top-0 right-0 xl:w-[150px] opacity-30"
            />

            <Image
                src={"/svg/puntitos-rojos.svg"}
                width={100}
                height={100}
                alt="Contrologi"
                className="hidden xl:block absolute top-0 left-0 xl:w-[500px] z-0"
            />

            <Image
                src={"/svg/puntitos-rojos.svg"}
                width={100}
                height={100}
                alt="Contrologi"
                className="hidden xl:block absolute bottom-0 right-0 xl:w-[500px] transform scale-x-[-1] scale-y-[-1]"
            />



            <div className="container relative flex flex-col items-center text-center pt-30 pb-20">
                <Link href={"/"} className="hidden xl:block absolute top-18 left-0">
                    <Image
                        src={"/svg/logo-contrologi.svg"}
                        width={100}
                        height={100}
                        alt="Contrologi"
                        className="xl:w-[230px]"
                    />
                </Link>
                <h1 className="xl:text-5xl text-3xl uppercase font-extrabold text-white mb-5 xl:w-[500px] ">
                    Estamos aquí para ayudarte
                </h1>
                <div className="flex flex-col items-center xl:flex-row gap-5">

                    <Link
                        href={"https://calendly.com/marketing_ia-blueservices/conoce-contrologi"}
                        target="_blank" rel="noopener"
                        className="bg-white w-fit py-3 px-6 rounded-full font-bold text-primary hover:bg-white/80 transition-colors duration-300 cursor-pointer">
                        Agenda una demostración
                    </Link>
                </div>
            </div>

        </motion.section>
    );
}