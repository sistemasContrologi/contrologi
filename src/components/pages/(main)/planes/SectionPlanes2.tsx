'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Clock3, Package, Truck, Settings2, Smartphone, Dot } from 'lucide-react';
import CarruselMobile from '@/components/ui/CarouselMobile';

// Swiper para desktop
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperCore } from 'swiper';
import { Autoplay } from 'swiper/modules';

interface BenefitStep {
    id: number;
    label: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    bullets: React.ReactNode[];
    span?: React.ReactNode;
    image: string;
}

const steps: BenefitStep[] = [
    {
        id: 1,
        label: 'Retrasos',
        icon: Clock3,
        title: 'Olvídate de retrasos en tus entregas',
        subtitle:
            'Facilita la generación de documentos y mantén el control en cada envío.',
        bullets: [
            <span key="r1">Genera en menos clics y menos tiempo reportes, CARTAS PORTE y CFDIs.</span>,
            <span key="r2">Rastrea el trayecto de tus entregas con la interconexión GPS.</span>,
            <span key="r3">Menos errores, menos sanciones y más confianza con tus clientes.</span>,
        ],
        image: '/img/beneficios-retrasos.webp',
    },
    {
        id: 2,
        label: 'Logística',
        icon: Package,
        title: 'Tu operación logística centralizada',
        subtitle:
            'Ahorra tiempo, dinero y esfuerzo planeando y relacionando en cada viaje',
        bullets: [
            <span key="l1">Cargas de combustible.</span>,
            <span key="l2">Viáticos.</span>,
            <span key="l3">Evidencias del viaje.</span>,
            <span key="l4">
                Pagos y cobros relacionados con los viajes, estadías, maniobras, etc.
            </span>,
        ],
        image: '/img/beneficios-logisitca.webp',
    },
    {
        id: 3,
        label: 'Control',
        icon: Truck,
        title: 'Control de cada unidad y viaje',
        subtitle:
            'Supervisa tu operación minuto a minuto desde cualquier lugar conectando tu GPS.',
        bullets: [
            <span key="c1">Rutas espejo: Visualización de cómo se mueve el camión.</span>,
            <span key="c2">Importación de rutas: Tu programas una ruta a tus unidades, si el conductor la rebasa. ¡Te llega una alarma!</span>,
            <span key="c3">Geocercas: Puntos de control a lo largo del viaje para generar alertas a los controladores de tráfico.</span>,
        ],
        span: <b className='italic'>Atado a las APIs de tu servicio de GPS</b>,
        image: '/img/beneficios-control.webp',
    },
    {
        id: 4,
        label: 'Productividad',
        icon: Settings2,
        title: 'Ahorra hasta un 30% de tiempo y gana productividad',
        subtitle:
            'Haz más con menos y enfoca tu tiempo en crecer.',
        bullets: [
            <span key="p1">Reduce errores humanos y cargas repetitivas.</span>,
            <span key="p2">Aumenta tu productividad sin crecer tu equipo.</span>,
            <span key="p3">Procesos más rápidos y efectivos.</span>,
            <span key="p4">Precarga tu documentación y agiliza tus tiempos.</span>,
            <span key="p5">Carga masiva de productos</span>
        ],
        image: '/img/beneficios-productividad.webp',
    },
    {
        id: 5,
        label: 'Disponibilidad',
        icon: Smartphone,
        title: 'Tu negocio disponible 24/7',
        subtitle:
            'Desde el operardor hasta el administrador todos pueden utilizarlo.',
        bullets: [
            <span key="d1">Compatible con tu celular.</span>,
            <span key="d2">Fácil de utilizar desde cualquier navegador con internet.</span>,
            <span key="d3">Ideal para equipos en ruta, oficina o remoto.</span>,
            <span key="d4">Sin instalar nada en tus equipos.</span>
        ],
        image: '/img/beneficios-disponibilidad.webp',
    },
];

export default function Section2() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const swiperRef = React.useRef<SwiperCore | null>(null);
    const activeStep = steps[activeIndex];

    const renderSlide = (step: BenefitStep) => (
        <div className="bg-white rounded-3xl shadow-sm px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            {/* Texto */}
            <div className="md:w-1/2 flex flex-col items-start text-left gap-4">
                <h3 className="text-primary text-2xl md:text-3xl font-bold leading-tight">
                    {step.title}
                </h3>
                <p className="font-semibold text-secondary">
                    {step.subtitle}
                </p>
                <ul className="space-y-2 text-gray-800">
                    {step.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex flex-row items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />

                            {/* El texto */}
                            <span className="flex-1">{bullet}</span>
                        </li>
                    ))}
                </ul>
                <span className='text-secondary'>{step.span}</span>
            </div>

            {/* Imagen */}
            <div className="md:w-1/2 relative aspect-video rounded-2xl overflow-hidden">
                <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );

    return (
        <section className="bg-[#F4F4F4] py-12 md:py-16">
            <div className="container mx-auto px-4 flex flex-col gap-8">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-secondary xl:text-[38px] text-[28px] font-bold"
                >
                    Esto puedes lograr con nuestro sistema
                </motion.h2>

                <div className="hidden md:flex flex-col items-center gap-6">
                    <span className="inline-flex px-5 py-1.5 rounded-full bg-primary text-white font-semibold">
                        {activeStep.label}
                    </span>

                    <div className="flex items-center gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = index === activeIndex;

                            return (
                                <React.Fragment key={step.id}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveIndex(index);
                                            if (swiperRef.current) {
                                                swiperRef.current.slideTo(index);
                                            }
                                        }}
                                        className={`flex items-center justify-center w-16 h-16 rounded-full border transition-all focus:outline-none cursor-pointer ${isActive
                                            ? 'bg-primary border-primary text-white shadow-md'
                                            : 'bg-white border-gray-300 text-gray-400 hover:text-primary hover:border-primary'
                                            }`}
                                        aria-label={step.label}
                                    >
                                        <Icon className="w-8 h-8" />
                                    </button>
                                    {index !== steps.length - 1 && (
                                        <div className="w-10 h-px bg-gray-300" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Carrusel desktop */}
                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            autoplay={{ delay: 5000 }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                            }}
                            className="w-full"
                        >
                            {steps.map((step) => (
                                <SwiperSlide key={step.id}>{renderSlide(step)}</SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="md:hidden">
                    
                    <CarruselMobile
                        slides={steps.map((step) => ({
                            id: step.id,
                            content: renderSlide(step),
                        }))}
                        paginationHeightClass="h-full"
                    />
                </div>
            </div>
        </section>
    );
}
