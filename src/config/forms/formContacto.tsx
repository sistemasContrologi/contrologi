import { Building2, FileSearch2, Mail, MessageCircle, Phone, UserRound } from "lucide-react";


const clasesDiv = [
    'flex flex-col xl:flex-row gap-4'
]


export default function FormContacto() {
    return (
        <form
            className="flex flex-col text-secondary"
            action="">
            {/* nombre y apellidos */}
            <div className={`${clasesDiv}`}>
                <div className="xl:w-1/2 flex flex-col gap-1 m-0 p-0">
                    <label htmlFor="nombre" className="text-sm">
                        Nombre(s)
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    />
                    <UserRound className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-5 xl:mt-0">
                    <label htmlFor="apellido" className="text-sm">
                        Apellidos
                    </label>
                    <input
                        type="text"
                        id="apellido"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    />
                    <UserRound className="relative -top-10" />
                </div>
            </div>

            {/* telefono y email */}
            <div className={`${clasesDiv}`}>
                <div className="xl:w-1/2 flex flex-col gap-1">
                    <label htmlFor="movil" className="text-sm">
                        Móvil
                    </label>
                    <input
                        type="text"
                        inputMode="numeric"
                        id="movil"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    />
                    <Phone className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-5 xl:mt-0">
                    <label htmlFor="email" className="text-sm">
                        Correo electrónico
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    />
                    <Mail className="relative -top-10" />
                </div>
            </div>

            {/* empresa */}
            <div className={`${clasesDiv}`}>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-5 xl:mt-0">
                    <label htmlFor="empresa" className="text-sm">
                        Empresa
                    </label>
                    <input
                        type="text"
                        id="empresa"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    />
                    <Building2 className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-4 xl:mt-[3px]">
                    <label htmlFor="servicio" className="text-sm">
                        Servicio
                    </label>
                    <select
                        id="servicio"
                        className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                        required
                    >
                        <option value="plan-plus">Plan plus</option>
                        <option value="plan-smart">Plan smart</option>
                        <option value="desarrollo-a-la-medida">Desarrollo a la medida</option>
                        <option value="cartas-porte">Cartas porte</option>
                    </select>
                    <FileSearch2 className="relative -top-10" />
                </div>

            </div>

            {/* mensaje */}
            <div className="w-full flex flex-col gap-1">
                <label htmlFor="apellido" className="text-sm">
                    ¿Quieres dejarnos un mensaje?
                </label>
                <textarea
                    id="apellido"
                    className="border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200"
                />
                <MessageCircle className="relative -top-15.5" />
            </div>

            <button className="bg-primary w-fit py-3 px-8 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                Enviar
            </button>
        </form>
    );
}