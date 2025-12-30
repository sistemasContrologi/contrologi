'use client'

import FormContacto from "@/config/forms/(main)/formContacto";
import { motion } from "framer-motion";


export default function ContactoSection() {
    return (
        <section className="bg-white">
            <div className="container flex flex-col gap-10 items-center py-10 text-secondary">
                <div className="flex flex-col gap-2 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-secondary xl:text-[38px] text-[28px] text-center font-bold">
                        ¿Necesitas más información?
                    </motion.h2>
                    <p className="font-semibold xl:text-xl">
                        Completa el formulario para ponernos en contacto contigo
                    </p>
                </div>

                <div className="xl:w-[60%] w-full">
                    <FormContacto />
                </div>
            </div>
        </section>
    );
}