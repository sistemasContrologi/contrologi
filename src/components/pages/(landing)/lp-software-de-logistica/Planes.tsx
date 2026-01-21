'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useModal } from "@/config/hooks/useModal";
import Modal from "@/components/ui/Modal";
import FormContacto from "@/config/forms/(main)/formContacto";
import { Check } from "lucide-react";
import FormLpSoftware from "@/config/forms/(landing)/FormLpSoftware";

export default function Name() {
    const { openModal, modalProps } = useModal();

    return (
        <section className="relative py-10 text-black">
            <div className="container flex flex-col xl:flex-row gap-10">
                <div className="xl:w-[500px]">
                    <h2 className="xl:text-4xl text-3xl font-bold">Comienza a usar <span className="text-primary">Contrologi</span> con un solo clic</h2>
                </div>
                <div className="flex flex-col xl:flex-row items-start gap-10 xl:w-full">
                    
                    {/* PLAN SMART */}
                    <div className="w-full border">
                        <div className="bg-black p-5 w-full">
                            <h3 className="xl:text-2xl text-xl font-bold text-white text-center">
                                Plan Smart
                            </h3>
                        </div>
                        <div className="bg-white p-5 w-full">
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-5xl font-bold">$450<span className="font-normal text-base italic">/ mensual</span></p>
                                <p className="italic">*Precio con IVA incluido</p>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col items-center gap-5">
                                <p className="text-center font-bold">
                                    Ideal si facturas tú solo o tienes un equipo pequeño
                                </p>
                                <ul className="flex flex-col items-center gap-2">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Administra operadores, vehículos y clientes fácilmente.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Emite facturas simples o con Carta Porte en minutos.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Incluye borradores, plantillas para facturar y notas de crédito/débito.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Consulta reportes de Cartas Porte y facturación.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Recibe alertas de vencimiento de documentos.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Soporte dentro de la plataforma y videotutoriales para capacitarte.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Disponible 24/7 desde cualquier dispositivo con conexión a internet, como tu celular, Tablet o Computadora
                                    </li>
                                </ul>
                                <button 
                                onClick={openModal}
                                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-black/80 transition-colors cursor-pointer">
                                    Pruébalo ahora
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PLAN PLUS */}
                    <div className="w-full border">
                        <div className="bg-primary p-5 w-full">
                            <h3 className="xl:text-2xl text-xl font-bold text-white text-center">
                                Plan Plus
                            </h3>
                        </div>
                        <div className="bg-white p-5 w-full">
                            <div className="flex flex-col items-center gap-2">
                                <p className="text-5xl font-bold text-primary">$1,000<span className="font-normal text-base italic">/ mensual</span></p>
                                <p className="italic">*Precio con IVA incluido</p>
                            </div>
                            <hr className="my-5" />
                            <div className="flex flex-col items-center gap-5">
                                <p className="text-center font-bold">
                                    Ideal para quienes necesitan tener todo su negocio bajo control:
                                </p>
                                <ul className="flex flex-col items-center gap-2">
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Maneja operadores, vehículos, clientes, proveedores y productos.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Control total de tus gastos, combustible y mantenimiento por unidad.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Planea, da seguimiento y vincula tus servicios con Cartas Porte.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Emite cualquier tipo de CFDI (Cartas porte, ingreso, pago, crédito, débito) con hasta 3 razones sociales.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Lleva el control de tu operación en tiempo real desde cualquier lugar.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Reportes detallados de ingresos, egresos, utilidad y cumplimiento fiscal.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Reporte de la comisión reguladora de energía (CRE).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Conéctalo con tu GPS y rastrea tus unidades.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Control tarifario y mejor gestión de cobranza.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="w-5 h-5 -mb-4 shrink-0" color="green" />
                                        Soporte personalizado por WhatsApp + acceso a todas las herramientas 24/7 desde cualquier dispositivo con conexión a internet
                                    </li>
                                </ul>
                                <button 
                                onClick={openModal}
                                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors cursor-pointer">
                                    Pruébalo ahora
                                </button>
                            </div>
                        </div>
                    </div>
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
        </section>
    );
}