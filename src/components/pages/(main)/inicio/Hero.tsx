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
            className="bg-[url('/img/bg-inicio.webp')] bg-cover bg-no-repeat py-10 xl:p-20 md:h-dvh xl:h-[80dvh] 2xl:h-[75dvh] relative"
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

            <div className="container flex flex-col items-center gap-10 xl:gap-0 xl:items-start xl:flex-row">

                <div className="flex flex-col items-center xl:items-start xl:w-1/2 z-10">
                    <Link href={"/"} className="mb-20">
                        <Image
                            src={"/svg/logo-contrologi.svg"}
                            width={100}
                            height={100}
                            alt="Logotipo Contrologi"
                            className="hidden xl:block xl:w-[200px]"
                        />
                    </Link>

                    <h1 className="xl:text-5xl text-3xl text-center xl:text-left uppercase font-extrabold text-white mb-5 ">
                        Simplifica tu logística con un solo sistema
                    </h1>
                    <p className="font-bold xl:text-xl text-center xl:text-left text-white max-w-[450px] mb-6">
                        Gestiona tu flotilla, emite Carta Porte y controla tu operación desde un solo lugar
                    </p>

                    <div className="flex flex-col items-center xl:items-start xl:flex-row gap-5">
                        <Link
                        href={"https://calendly.com/marketing_ia-blueservices/conoce-contrologi"}
                        target="_blank" rel="noopener"
                        className="bg-white w-fit py-3 px-6 rounded-full font-bold text-primary hover:bg-white/80 transition-colors duration-300 cursor-pointer">
                            Agenda una demostración
                        </Link>
                    </div>
                </div>

                <div className="bg-[url('/img/presentacion.webp')] bg-cover bg-no-repeat xl:w-1/2 w-full h-[310px] xl:h-[540px] z-10">
                </div>
            </div>
        </motion.section>
    );
}