'use client'

import Modal from "@/components/ui/Modal";
import FormContacto from "@/config/forms/formContacto";
import { useModal } from "@/config/hooks/useModal";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Section5() {

    const { openModal, modalProps } = useModal();

    return (
        <section className="bg-primary pt-10 xl:py-24 relative overflow-hidden">
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
                        className="text-white xl:text-[40px] text-[28px] text-center xl:text-right font-bold xl:leading-11">
                        ¿Solo necesitas generar Cartas Porte?
                    </motion.h2>
                    <p className="text-center xl:text-right xl:text-[22px]">
                        Desde $130 MXN c/u a partir de 50 Cartas Porte.<br/><br/>
                        Solo nos mandas tus datos y CFDIs, y ¡Listo! <br/>
                        Ten tu Carta porte timbrada en menos de 30 minutos por WhatsApp
                    </p>

                    <button onClick={openModal} className="bg-white py-3 px-14 w-fit rounded-full font-bold text-secondary hover:bg-white/80 transition-colors duration-300 cursor-pointer mt-3">
                        Solicita aquí
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
                    <FormContacto />
                </div>
            </Modal>
        </section>
    );
}