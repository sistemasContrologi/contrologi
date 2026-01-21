'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Home, MessageCircle } from 'lucide-react';

export default function Name() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
            <section className="grow flex items-center justify-center px-4 relative z-10 py-10">
                <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                        
                        {/* Lado Izquierdo: Mensaje Principal */}
                        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center items-start">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                            </motion.div>

                            <motion.h1 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-4xl font-extrabold text-black mb-4 uppercase leading-tight"
                            >
                                ¡Gracias por confiar en <span className="text-primary">Contrologi</span>!
                            </motion.h1>

                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-600 text-lg mb-8"
                            >
                                Hemos recibido tu solicitud correctamente. Nuestro equipo ya está trabajando en ello y nos pondremos en contacto contigo a la brevedad.
                            </motion.p>

                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 w-full"
                            >
                                <Link 
                                    href="/" 
                                    className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-black/80 transition-all w-full sm:w-auto text-center"
                                >
                                    <Home size={20} />
                                    Volver al inicio
                                </Link>
                                
                                <a 
                                    href="https://wa.me/5215589506246" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all w-full sm:w-auto text-center"
                                >
                                    <MessageCircle size={20} />
                                    Soporte inmediato
                                </a>
                            </motion.div>
                        </div>

                        <div className="w-full md:w-2/5 bg-gray-50 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-6 text-black">¿Qué sigue ahora?</h3>
                            
                            <ul className="space-y-6">
                                <StepItem 
                                    number="1" 
                                    title="Revisión" 
                                    desc="Un experto analizará los datos de tu operación." 
                                    delay={0.5}
                                />
                                <StepItem 
                                    number="2" 
                                    title="Contacto" 
                                    desc="Te llamaremos o escribiremos al correo registrado." 
                                    delay={0.6}
                                />
                                <StepItem 
                                    number="3" 
                                    title="Activación" 
                                    desc="Te ayudamos a configurar tu cuenta y comenzar." 
                                    delay={0.7}
                                    isLast
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
  );
}

const StepItem = ({ number, title, desc, delay, isLast }: { number: string, title: string, desc: string, delay: number, isLast?: boolean }) => (
    <motion.li 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay }}
        className="flex gap-4 relative"
    >
        {!isLast && (
            <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-gray-200" />
        )}
        
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20 z-10">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-black">{title}</h4>
            <p className="text-sm text-gray-500 leading-snug">{desc}</p>
        </div>
    </motion.li>
);