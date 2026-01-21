'use client'

import CarruselMobile from '@/components/ui/CarouselMobile'
import Modal from '@/components/ui/Modal'
import FormLpSoftware from '@/config/forms/(landing)/FormLpSoftware'
import { useModal } from '@/config/hooks/useModal'
import { motion } from 'framer-motion'
import Link from 'next/link'

const listBenefits = [
    {
        icon: '/icon/rayo.svg',
        title: 'Fácil de usar',
        list: [
            'En el celular',
            'En la computadora',
            'En la tablet'
        ]
    },
    {
        icon: '/icon/movil.svg',
        title: 'Disponible 24/7',
        list: [
            'Accesibilidad desde cualquier dispositivo con conexión a internet'
        ]
    },
    {
        icon: '/icon/engranaje.svg',
        title: 'Soporte',
        list: [
            'Capacitación en plan plus',
            'Atención humana personalizada',
        ]
    },
    {
        icon: '/icon/camion.svg',
        title: 'Desarrollo de módulos a tu medida',
        list: [
            'Cotiza tu proyecto',
        ]
    }
]


export const Hero = () => {
    const slides = listBenefits.map((benefit, index) => ({
        id: index,
        content: (
            <div className='flex flex-col gap-3 items-center text-center'>
                <div className='flex flex-col items-center gap-2'>
                    <img src={benefit.icon} alt={benefit.title} className='w-8' />
                    <h3 className='text-xl font-bold'>{benefit.title}</h3>
                </div>
                {benefit.list.length > 1 ? (
                    <ul className='list-disc pl-5 text-left inline-block'>
                        {benefit.list.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className='px-4'>{benefit.list[0]}</p>
                )}
            </div>
        )
    }));

    const { openModal, modalProps } = useModal();
    

    return (
        <section>
            <section className="relative xl:bg-[url('/img/hero-lp-software.webp')] bg-[url('/img/hero-movil-lp-software-de-logistica.webp')] bg-no-repeat bg-cover xl:pt-20 xl:pb-35 pt-15 pb-25 bg-center">
                <section className="container flex flex-col items-center xl:items-start gap-10 px-4 md:px-0">
                    <Link href={'/'}>
                        <img src="/svg/logo-contrologi.svg" alt="Contrologi" className="xl:w-55 w-35" />
                    </Link>

                    <div className="flex flex-col gap-8 xl:w-[650px] xl:text-left text-center">
                        <h1 className='xl:text-5xl text-3xl font-extrabold text-white uppercase leading-tight'>
                            Plataforma digital para controlar tu operación logística
                        </h1>
                        <span className='xl:text-2xl text-xl font-extrabold text-primary uppercase'>
                            Menos trámites, más kilómetros.
                        </span>
                        <p className='xl:text-xl text-lg font-medium text-white'>
                            Controla tus rutas, monitorea unidades, genera documentos como <span className='font-bold uppercase'>Carta Porte</span> y registra tus evidencias en minutos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <button 
                            onClick={openModal}
                            className='bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors cursor-pointer text-center'>
                                Pruébalo ahora
                            </button>
                            <a href="https://calendly.com/marketing_ia-blueservices/conoce-contrologi" target='_blank' rel='noopener noreferrer'
                                className='bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-white/80 transition-colors cursor-pointer text-center'>
                                Agenda una demostración
                            </a>
                        </div>
                    </div>
                </section>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className='container text-black -mt-20 bg-white p-10 shadow-lg relative z-10 mb-6 rounded-lg'
            >
                <div className="hidden xl:flex justify-between gap-10 items-start">
                    {listBenefits.map((benefit, index) => (
                        <div
                            key={index}
                            className='flex flex-col gap-3 xl:w-1/4'
                        >
                            <div className='flex items-start gap-2'>
                                <img src={benefit.icon} alt={benefit.title} className='w-5' />
                                <h3 className='text-xl font-bold xl:-mt-1'>{benefit.title}</h3>
                            </div>
                            {
                                benefit.list.length > 1 ? (
                                    <ul className='list-disc pl-5'>
                                        {benefit.list.map((item, idx) => (
                                            <li key={idx}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='pl-5'>
                                        {benefit.list[0]}
                                    </p>
                                )
                            }
                        </div>
                    ))}
                </div>

                <CarruselMobile 
                    slides={slides}
                    paginationHeightClass="h-60"
                />

            </motion.section>

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
        </section>
    )
}