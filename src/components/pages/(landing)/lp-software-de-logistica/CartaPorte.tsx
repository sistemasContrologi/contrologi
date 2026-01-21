'use client'

import Modal from "@/components/ui/Modal";
import FormLpSoftware from "@/config/forms/(landing)/FormLpSoftware";
import FormContacto from "@/config/forms/(main)/formContacto";
import { useModal } from "@/config/hooks/useModal";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";


export default function Section4() {

    const { openModal, modalProps } = useModal();

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary pt-10 xl:py-10 relative">
            <div className="container flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row">
                <div className="xl:w-1/2">
                    <Image
                        src={"/img/img-whatsapp-carta-porte.webp"}
                        width={450}
                        height={100}
                        alt="Contrologi"
                        className="xl:absolute bottom-0 left-0 transform"
                    />
                </div>

                <div className="xl:w-1/2 flex flex-col items-center xl:items-end gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-white xl:text-[40px] text-3xl xl:leading-12 text-center xl:text-right font-bold">
                        ¿Solo necesitas generar Carta Porte?
                    </motion.h2>
                    <p className="text-center xl:text-right xl:text-xl italic">
                        Deja el trámite e nuestras manos <br/> 
                        <b>¡Fácil y rápido!</b>
                    </p>
                    <p className="text-center xl:text-right xl:text-xl font-bold">
                        24 horas al día, los 7 días de la semana en minutos, cumpliendo con requerimientos del SAT.
                    </p>
                    <p className="text-center xl:text-right xl:text-xl font-bold italic">
                        Con solo un mensaje de WhatsApp obten tu Carta Porte.
                    </p>
                    <button onClick={openModal} className="bg-white py-3 px-14 w-fit rounded-full font-bold text-secondary hover:bg-white/80 transition-colors duration-300 cursor-pointer mt-3">
                        Más información
                    </button>
                </div>
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
                    <FormLpSoftware />
                </div>
            </Modal>
        </motion.section>
    );
}