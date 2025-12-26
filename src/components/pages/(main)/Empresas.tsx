'use client';
import CarruselMobile from "@/components/ui/CarouselMobile";
import { motion } from "framer-motion";
import Image from "next/image";


const slideData = [
  {
    id: 1,
    content:
      <Image
        src={"/img/TIM.webp"}
        width={140}
        height={140}
        alt="Transportes Monarca"
         // para asegurar responsividad dentro del contenedor
      />
  },
  {
    id: 2,
    content:
      <Image
        src={"/img/TREMEX.webp"}
        width={140}
        height={140}
        alt="TREMEX"
        
      />
  },
  {
    id: 3,
    content:
      <Image
        src={"/img/PACKNGO.webp"}
        width={140}
        height={140}
        alt="PACKNGO"
        
      />
  },
  {
    id: 4,
    content:
      <Image
        src={"/img/TOTAL-TRACK.webp"}
        width={140}
        height={140}
        alt="Total Track"
        
      />
  },
  {
    id: 5,
    content:
      <Image
        src={"/img/SUNSET.webp"}
        width={140}
        height={140}
        alt="SUNSET Transportation"
        
      />
  }
];

export default function Empresas() {
  return (
    <section className="bg-white py-10">
      <div className="container flex flex-col items-center gap-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary xl:text-4xl text-3xl font-bold">
          Preferido por cientos de flotas
        </motion.h2>

        <div className="hidden xl:flex w-full flex-row justify-between items-center py-5">
          {slideData.map((slide) => (
            <div key={slide.id} className="h-full">
              {slide.content} 
            </div>
          ))}
        </div>

        <div className="w-full xl:hidden -mt-8">
          <CarruselMobile slides={slideData} paginationHeightClass="h-60 -mt-5" />
        </div>

      </div>
    </section>
  );
}