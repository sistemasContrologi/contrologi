'use client';

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import CarruselMobile from '@/components/ui/CarouselMobile';
import Carrusel from '@/components/ui/Carousel';

interface Testimonial {
    id: number;
    name: string;
    timeAgo: string;
    rating: number;
    text: string;
    avatar?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Celeste González",
        timeAgo: "Hace 4 semanas",
        rating: 5,
        text: "La plataforma es fácil de usar y muy confiable. Tenemos todo a la vista: unidades, facturación y movimientos en tiempo real.",
    },
    {
        id: 2,
        name: "Carlos Herrera",
        timeAgo: "Hace 4 meses",
        rating: 5,
        text: "Contrologi es el software para logística que buscábamos. Fácil de usar, con excelente soporte y con funciones clave para empresas de transporte.",
    },
    {
        id: 3,
        name: "Akza García",
        timeAgo: "Hace 1 mes",
        rating: 5,
        text: "Empezamos usando Contrologi solo para las Cartas Porte, pero terminamos aprovechando todo el sistema. Es muy práctico para llevar el control completo de la logística.",
    },
    {
        id: 4,
        name: "Diana Vázquez",
        timeAgo: "Hace 1 mes",
        rating: 5,
        text: "Implementamos el programa de logística y transporte de Contrologi y nuestra operación se ha vuelto mucho más eficiente. Gracias a su software para camiones, ahora podemos gestionar nuestras rutas de manera más precisa y sin complicaciones. ¡Excelente herramienta!",
    },
    {
        id: 5,
        name: "Ivonne Díaz",
        timeAgo: "Hace 1 mes",
        rating: 5,
        text: "Muy buena herramienta de trabajo, ahora gestionamos rutas, facturas y gastos desde una sola plataforma. La operación es mucho más ordenada. ¡Totalmente recomendados!",
    },
];

const renderStars = (rating: number) => (
    <div className="flex flex-row gap-2 text-yellow-400">
        {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
                key={index}
                className={index < rating ? "opacity-100" : "opacity-30"}
            />
        ))}
    </div>
);

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl p-8 shadow xl:h-[fit]">
            <div className="flex flex-col gap-3 text-secondary">
                <div className="flex flex-row justify-between items-start">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col">
                            <p className="font-bold">{testimonial.name}</p>
                            <span className="text-xs">{testimonial.timeAgo}</span>
                        </div>
                    </div>
                    <Image
                        src={"/svg/logo-google.svg"}
                        width={30}
                        height={30}
                        alt="Logo Google"
                    />
                </div>

                {renderStars(testimonial.rating)}

                <div className="text-sm leading-relaxed">
                    {testimonial.text}
                </div>
            </div>
        </div>
    );
};

export default function Testimonios() {
    return (
        <section className="container flex flex-col py-10 gap-8">
            <div className="text-center text-secondary space-y-5 -mb-10 xl:mb-0">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-primary xl:text-[38px] text-[28px] font-bold leading-9"
                >
                    Testimonios de clientes
                </motion.h2>
                <p className="font-semibold xl:text-lg">
                    Descubre cómo nuestros clientes mejoran su productividad
                </p>
            </div>

            <div className='xl:-mt-10'>
                <Carrusel
                    slides={testimonials.map((t) => ({
                        id: t.id,
                        content: <TestimonialCard testimonial={t} />,
                    }))}
                    paginationHeightClass='h-100'
                />
            </div>

            <div className='-mt-14'>
                <CarruselMobile
                slides={testimonials.map((t) => ({
                    id: t.id,
                    content: <TestimonialCard testimonial={t} />,
                }))}
                paginationHeightClass="h-120"
            />
            </div>

            {/* <div className="hidden xl:grid xl:grid-cols-3 gap-6">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <TestimonialCard testimonial={t} />
                    </motion.div>
                ))}
            </div> */}
        </section>
    );
}
