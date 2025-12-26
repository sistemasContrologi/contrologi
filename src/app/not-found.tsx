'use client'
import './globals.css'
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Page404() {
    return (
        <main className="flex items-center justify-center h-dvh py-10 bg-black">

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

            {/* Contenido principal */}
            <div className="relative container flex flex-col items-center gap-8 z-10 text-center text-white px-6 mt-10">
                <Link href={'/'}>
                    <Image
                        src={"/svg/logo-contrologi.svg"}
                        width={100}
                        height={100}
                        alt="Contrologi"
                        className="xl:w-[280px] mb-10"
                    />
                </Link>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="text-5xl xl:text-8xl font-extrabold drop-shadow-lg tracking-tight"
                >
                    404
                </motion.h1>
                <h2 className="mt-4 text-xl md:text-3xl font-semibold">
                    ¡Ups! No pudimos encontrar esa página
                </h2>
                <p className="hidden xl:block mt-3 mx-auto text-gray-200 text-base md:text-lg">
                    ¡Parece que te perdiste!<br />
                    No te preocupes, estamos aquí para ayudarte a volver a ruta.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href={"/"}
                        className="bg-primary py-3 px-6 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
                    >
                        Volver al inicio
                    </Link>
                </div>

                <p className="mt-10 text-sm text-gray-400 font-bold">
                    Contrologi | La plataforma digital líder en logística de carga en México.
                </p>
            </div>
        </main>
    );
}