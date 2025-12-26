'use client'

import { motion } from "framer-motion";


export default function Section1() {
    return (
        <section className="container flex flex-col py-10 gap-8 text-center text-secondary">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-primary xl:text-[38px] text-[28px] font-bold">
                Aquí podrás encontrarnos
            </motion.h2>

            <div className="flex flex-col xl:flex-row gap-8">
                <div className="xl:w-1/2 flex flex-col gap-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.454466726067!2d-95.1003918!3d16.5536165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c001447fa68f1f%3A0xd300c78242a9da2b!2sContrologi!5e0!3m2!1ses-419!2smx!4v1763648454805!5m2!1ses-419!2smx"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="w-full h-[300px] md:h-[450px] border-0 shadow-sm rounded-2xl"
                    />
                    <div>
                        <h3 className="font-bold xl:text-xl text-lg text-[#780614]">
                            Oaxaca
                        </h3>
                        <p>
                            C. Nicolás Bravo #50, Col. Antonio, 70110 Oaxaca, Oax.
                        </p>
                    </div>
                </div>

                <div className="xl:w-1/2 flex flex-col gap-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.04176341348887!2d-99.22596267214753!3d19.51290528236264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202d0f5edf50f%3A0x412213fb291008c4!2sCto.%20Pintores%2054%20A%2C%20Cd.%20Sat%C3%A9lite%2C%2053100%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1763648721620!5m2!1ses-419!2smx"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        className="w-full h-[300px] md:h-[450px] border-0 shadow-sm rounded-2xl"
                    />
                    <div>
                        <h3 className="font-bold xl:text-xl text-lg text-[#780614]">
                            México
                        </h3>
                        <p>
                            Cto. Pintores #54 A, Cd. Satélite, 53100, Naucalpan de Juárez, Méx.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}