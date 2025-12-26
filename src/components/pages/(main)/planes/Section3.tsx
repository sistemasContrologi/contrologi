'use client';

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

interface Module {
  id: number;
  title: string;
  description: string;
}

const modules: Module[] = [
  { id: 1, title: "Proveedores", description: "Reduce gastos innecesarios y alarga la vida útil de tus vehículos." },
  { id: 2, title: "CRM", description: "Cierra más ventas y no pierdas oportunidades." },
  { id: 3, title: "Finanzas", description: "Mayor control financiero y menos pérdidas económicas." },
  { id: 4, title: "Nóminas", description: "Paga a tu equipo de forma ordenada y sin errores." },
  { id: 5, title: "Clientes", description: "Evita errores con clientes y asegura tus cobros." },
  { id: 6, title: "TMS", description: "Más control y menos errores en tus operaciones de transporte." },
  { id: 7, title: "CFDI", description: "Cumple con Hacienda sin perder tiempo." },
  { id: 8, title: "Gastos", description: "Control real del dinero que sale de tu empresa." },
  { id: 9, title: "Reportes", description: "Control real del dinero que sale de tu empresa." },
];

export default function Section3() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const leftItems = modules.filter((_, i) => i % 2 === 0);
  const rightItems = modules.filter((_, i) => i % 2 !== 0);
  
  const totalSteps = Math.max(leftItems.length, rightItems.length);

  return (
    <section ref={containerRef} className="relative h-[400dvh] bg-black">
      <div className="sticky top-0 h-dvh flex flex-col gap-10 xl:gap-20 items-center justify-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white xl:text-4xl text-3xl font-bold text-center xl:w-[500px]"
        >
          Estos son los módulos de tu plan con Contrologi
        </motion.h2>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-20 w-full px-10">

          <div className="hidden xl:flex flex-col w-[300px] xl:h-25 h-20 relative overflow-hidden xl:self-end">
            {leftItems.map((module, index) => (
              <ScrollItem
                key={module.id}
                module={module}
                index={index}
                progress={scrollYProgress}
                totalSteps={totalSteps}
              />
            ))}
          </div>

          <div className="shrink-0">
            <Image
              src="/svg/logo-isotipo-contrologi.svg"
              alt="Contrologi"
              width={400}
              height={400}
              className="w-[150px] xl:w-[300px]"
            />
          </div>

          <div className="xl:hidden flex flex-col w-[300px] xl:h-25 h-20 relative overflow-hidden xl:self-end">
            {leftItems.map((module, index) => (
              <ScrollItem
                key={module.id}
                module={module}
                index={index}
                progress={scrollYProgress}
                totalSteps={totalSteps}
              />
            ))}
          </div>

          <div className="flex flex-col w-[300px] xl:h-25 h-20 relative overflow-hidden xl:self-start">
            {rightItems.map((module, index) => (
              <ScrollItem
                key={module.id}
                module={module}
                index={index}
                progress={scrollYProgress}
                totalSteps={totalSteps}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const ScrollItem = ({ module, index, progress, totalSteps }: {
  module: Module,
  index: number,
  progress: MotionValue<number>,
  totalSteps: number
}) => {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const opacity = useTransform(progress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.1, end - 0.1, end], [40, 0, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-row gap-4 text-left"
    >
      <div className="h-full bg-accent w-px shrink-0"></div>
      <div className="space-y-1 xl:space-y-2 text-white">
        <h3 className="font-bold text-lg xl:text-xl text-accent leading-tight">{module.title}</h3>
        <p className="leading-snug text-gray-300">{module.description}</p>
      </div>
    </motion.div>
  );
};