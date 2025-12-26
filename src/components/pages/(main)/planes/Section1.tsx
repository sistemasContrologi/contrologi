'use client'

import { useState } from "react";
import CarouselMobile from "@/components/ui/CarouselMobile";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useModal } from "@/config/hooks/useModal";
import Modal from "@/components/ui/Modal";
import FormContacto from "@/config/forms/formContacto";

// slideData e items se mantienen igual...
const slideData = [
    {
        id: 1,
        content: (
            <Image
                src={"/svg/plan-smart.svg"}
                width={400} // Ajustado para móvil
                height={500}
                className="w-full h-auto object-contain px-2"
                alt="Plan Smart"
            />
        )
    },
    {
        id: 2,
        content: (
            <Image
                src={"/svg/plan-plus.svg"}
                width={400}
                height={500}
                className="w-full h-auto object-contain px-2"
                alt="Plan Plus"
            />
        )
    }
];

const items = [
    "Desarrollo a la medida",
    "Integraciones avanzadas",
    "Escala sin límites",
    "Actualizaciones incluidas",
    "Soporte experto",
];

const buttonBase = 'py-3 px-6 xl:py-4 xl:px-10 transition-all duration-150 ease-in-out uppercase font-bold cursor-pointer text-sm xl:text-base tap:scale-95 active:scale-95 flex-1 xl:flex-none text-center';


export default function Section1() {
    const [plan, setPlan] = useState<'mensual' | 'anual'>('anual');
    const { openModal, modalProps } = useModal();

    return (
        <section className="bg-white py-10 overflow-hidden">
            <div className="container flex flex-col items-center gap-10">

                <div className="flex flex-col items-center gap-8 w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-secondary xl:text-4xl text-3xl text-center font-bold">
                        Paga por lo que necesitas
                    </motion.h2>

                    <div className="flex flex-col items-center gap-8 w-full">
                        <div className="flex flex-row w-full max-w-[400px] xl:max-w-none justify-center">
                            <button
                                onClick={() => setPlan('mensual')}
                                className={`
                                ${buttonBase} rounded-l-full 
                                ${plan === 'mensual' ? 'bg-primary text-white' : 'bg-[#EDEDED] text-black hover:bg-primary/20'}
                            `}
                            >
                                Mensual
                            </button>
                            <button
                                onClick={() => setPlan('anual')}
                                className={`
                                ${buttonBase} rounded-r-full 
                                ${plan === 'anual' ? 'bg-primary text-white' : 'bg-[#EDEDED] text-black hover:bg-primary/20'}
                            `}
                            >
                                Anual
                            </button>
                        </div>

                        <div className="w-full flex justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={plan}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex"
                                >
                                    <div className="hidden xl:block w-full">
                                        <Image
                                            src={plan === 'mensual' ? "/svg/plan-mensual.svg" : "/svg/plan-anual.svg"}
                                            alt={`Plan ${plan}`}
                                            width={1000}
                                            height={500}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>

                                    <div className="block xl:hidden w-full">
                                        <Image
                                            src={plan === 'mensual' ? "/svg/plan-mensual-movil.svg" : "/svg/plan-anual-movil.svg"}
                                            alt={`Plan ${plan}`}
                                            width={1000}
                                            height={500}
                                            className="w-full"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Desktop: Imagen estática */}
                    <div className="hidden xl:flex w-full justify-center">
                        <Image
                            src={"/svg/planes.svg"}
                            width={1100}
                            height={400}
                            alt="Planes Desktop"
                            className="w-full max-w-[1000px] h-auto"
                        />
                    </div>

                    {/* Mobile/Tablet: Carrusel */}
                    <div className="xl:hidden w-full">
                        <CarouselMobile slides={slideData} paginationHeightClass="h-[500px] -mt-10" />
                    </div>
                </div>


                <div className="flex flex-col xl:flex-row w-full shadow-sm rounded-3xl">
                    <div className="w-full flex flex-col gap-6 p-6 xl:p-12 bg-[#F6F6F6] xl:rounded-l-3xl xl:rounded-t-none rounded-t-3xl text-black xl:w-1/2">
                        <h3 className="font-bold text-primary text-3xl xl:text-4xl">
                            Desarrollo a la medida
                        </h3>
                        <p className="font-medium leading-relaxed">
                            Sistemas a la <b>medida</b> para empresas que necesitan escalar, con renta mensual incluida.
                        </p>

                        <p className="font-bold text-secondary">
                            Pensado para organizaciones que buscan:
                        </p>

                        <ul className="grid grid-cols-1 gap-4">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm xl:text-base">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src="/img/img-sitio.webp" alt="" className="xl:w-1/2 xl:h-120 xl:rounded-r-3xl xl:rounded-br-3xl xl:rounded-bl-none rounded-b-3xl" />
                </div>
                <button
                    onClick={openModal}
                    className="bg-primary w-fit py-3 px-6 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                    Pruébalo ahora
                </button>
            </div>

            <Modal
                {...modalProps}
                title="Mi Gran Título"
                size="md"
                ariaLabel="Detalles del formulario"
            >
                <div className="-mt-12 text-secondary flex flex-col gap-6">
                    <div className="flex flex-col text-center gap-1">
                        <h3 className="font-bold text-primary xl:text-[28px] text-2xl">
                            ¡Contactanos ahora!
                        </h3>
                        <p className="text-sm xl:text-base">
                            Uno de nuestros asesores se pondrá en contacto contigo.
                        </p>
                    </div>
                    <FormContacto />
                </div>
            </Modal>
        </section>
    );
}