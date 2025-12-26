'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Section5() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = gsap.utils.toArray('.card')

    cards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          scale: 0.95,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#f4f4f4] py-20 relative">
      <img src="/svg/puntitos-rojos.svg" alt="Puntitos rojos" className="absolute bottom-0 scale-y-[-1] z-0 xl:w-[40%]" />

      <section className="container flex flex-col gap-8 relative">

        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex flex-col gap-5 p-8 bg-primary rounded-2xl xl:w-1/2 card">
            <h3 className="font-bold text-3xl xl:text-4xl">
              Plan Plus
            </h3>
            <p>
              Solución integral pensada para empresas que requieren una visión más completa de su logística. Además de las funciones del Plan Smart, incorpora herramientas para gestionar proveedores, consumos, mantenimientos, servicios, evidencias y reportes operativos en tiempo real. Es ideal para empresas que necesitan centralizar información, optimizar recursos y tener un monitoreo más profundo de su operación diaria.
            </p>
          </div>

          <div className="flex flex-col gap-5 p-8 bg-black rounded-2xl xl:w-1/2 card">
            <h3 className="font-bold text-3xl xl:text-4xl">
              Plan Smart
            </h3>
            <p>
              Es la forma más sencilla y eficiente de llevar el control básico de tu operación de transporte. Desde una sola plataforma puedes administrar operadores, unidades, clientes y viajes, además de generar la documentación esencial cuando la necesitas. Es una solución práctica, accesible y diseñada para quienes buscan orden y rapidez sin complicarse con sistemas avanzados.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-8 bg-white rounded-2xl text-black">
          <h3 className="font-bold text-3xl xl:text-4xl">
            Desarrollo a la medida
          </h3>
          <p>
            El Desarrollo a la Medida es la opción para negocios que necesitan algo más específico que un software estándar. Creamos e integramos soluciones personalizadas que se ajustan a los procesos únicos de cada empresa, ya sea extendiendo funciones, automatizando tareas o conectando Contrologi con otros sistemas. Es la alternativa perfecta para operaciones complejas que requieren tecnología completamente alineada a su forma de trabajar.
          </p>
        </div>

        <Link href={'/planes'} className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors cursor-pointer self-center">
          Ver planes
        </Link>
      </section>
    </section>
  )
}
