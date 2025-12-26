'use client'

import Accordion from "@/components/ui/Accordion";
import { motion } from "framer-motion";

const items = [
    {
        title: "¿Qué es Contrologi y cómo puede ayudarme?",
        content: (
            <p>
                <b>Contrologi</b> es una plataforma digital diseñada para facilitar la <b>gestión documental de transportistas y empresas logísticas</b>, especialmente en la emisión de <b>Carta Porte</b>. Nuestro sistema es fácil de usar, disponible las <b>24 horas del día</b>, y te permite cumplir con todas las normativas de manera <b>rápida y eficiente</b>.
            </p>
        ),
    },
    {
        title: "¿Qué documentos puedo generar con Contrologi?",
        content: (
            <p>
                Con Contrologi puedes generar principalmente la <b>Carta Porte</b>, un documento necesario para el transporte de mercancías en México. También ofrecemos herramientas para gestionar otros documentos clave del transporte y la logística, siempre actualizados con las normativas legales.
            </p>
        ),
    },
    {
        title: "¿Cómo funciona la suscripción a los planes de Contrologi?",
        content: (
            <p>
                Ofrecemos distintos planes que se ajustan a las necesidades de cada tipo de cliente, desde pequeños transportistas hasta grandes empresas. Al suscribirte a un plan, tendrás acceso a nuestra plataforma y podrás gestionar la emisión de documentos de manera ilimitada según el paquete que elijas. Consulta nuestros Planes para más detalles.
            </p>
        ),
    },
    {
        title: "¿Contrologi cumple con la normativa legal vigente?",
        content: (
            <p>
                Sí, en Contrologi nos aseguramos de que nuestra plataforma esté siempre actualizada con las normativas más recientes, como los requisitos para la emisión de la Carta Porte. De esta manera, puedes estar seguro de que tu negocio cumplirá con las leyes vigentes sin complicaciones.
            </p>
        ),
    },
];

export default function FAQ() {
    return (
        <section className="bg-white py-10 text-secondary text-center">
            <div className="container flex flex-col gap-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="xl:text-[38px] text-[28px] font-bold">
                    Preguntas frecuentes
                </motion.h2>
                <p className="font-semibold xl:text-xl">
                    Resolvemos tus dudas sobre nuestro sistema
                </p>

                <div className="mt-8 text-center xl:text-left">
                    <Accordion items={items} />
                </div>
            </div>
        </section>
    );
}