import { formContactoSchema, IFormContactoData, Servicio } from "@/lib/interfaces/(main)/formContacto";
import { sendToUpnify } from "@/lib/services/upnifyApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { cp } from "fs";
import { Building2, FileSearch2, Loader2, Mail, MessageCircle, Phone, UserRound } from "lucide-react";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import toast from "react-hot-toast";


const clasesDiv = 'flex flex-col xl:flex-row gap-4';
const clasesInput = 'border-b-2 border-gray-400 p-2 pl-8 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200'


export default function FormContacto() {
    const tk = "P07APAF709613-5AB9-452C-9D3E-EAA865C2C3AE";

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<IFormContactoData>({
        resolver: zodResolver(formContactoSchema),
        defaultValues: {
            nombre: "",
            apellidos: "",
            correo: "",
            movil: "",
            empresa: "",
            cp: {
                servicio: undefined,
            },
            comentarios: "",
        },
    });

    const onSubmit: SubmitHandler<IFormContactoData> = async (data) => {
        const toastId = toast.loading("Enviando tus datos…");

        if (!tk) {
            toast.error("Falta el token de envío.", { id: toastId });
            return;
        }

        const payload = {
            nombre: data.nombre,
            apellidos: data.apellidos,
            correo: data.correo,
            movil: data.movil,
            empresa: data.empresa,
            cp: {
                servicio: data.cp.servicio,
            },
            comentarios: data.comentarios,
        };

        try {
            await sendToUpnify(tk, payload);
            toast.success("¡Tus datos se enviaron correctamente!", { id: toastId });
            reset();
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "No se pudo enviar. Intenta de nuevo.";
            toast.error(errorMessage, { id: toastId });
        }
    };

    const onInvalid = (errors: FieldErrors<IFormContactoData>) => {
        const ordenVisual = [
            "nombre",
            "apellidos",
            "movil",
            "correo",
            "empresa",
            "cp.servicio",
            "comentarios"
        ];

        const getErrorByPath = (obj: any, path: string) => {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj);
        };

        for (const campo of ordenVisual) {
            const errorEncontrado = getErrorByPath(errors, campo);
            if (errorEncontrado?.message) {
                toast.error(errorEncontrado.message as string);
                break;
            }
        }
    };
    return (
        <form
            className="flex flex-col text-secondary"
            onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
            {/* nombre y apellidos */}
            <div className={`${clasesDiv}`}>
                <div className="xl:w-1/2 flex flex-col gap-1 m-0 p-0">
                    <label htmlFor="nombre" className="text-sm">
                        Nombre(s)
                    </label>
                    <input
                        {...register("nombre")}
                        type="text"
                        id="nombre"
                        className={clasesInput}
                        required
                    />
                    <UserRound className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-5 xl:mt-0">
                    <label htmlFor="apellido" className="text-sm">
                        Apellidos
                    </label>
                    <input
                        {...register("apellidos")}
                        type="text"
                        id="apellido"
                        className={clasesInput}
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
                        {...register("movil")}
                        type="text"
                        inputMode="numeric"
                        id="movil"
                        className={clasesInput}
                        required
                    />
                    <Phone className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-5 xl:mt-0">
                    <label htmlFor="email" className="text-sm">
                        Correo electrónico
                    </label>
                    <input
                        {...register("correo")}
                        type="text"
                        id="email"
                        className={clasesInput}
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
                        {...register("empresa")}
                        type="text"
                        id="empresa"
                        className={clasesInput}
                        required
                    />
                    <Building2 className="relative -top-10" />
                </div>
                <div className="xl:w-1/2 flex flex-col gap-1 -mt-4 xl:mt-[3px]">
                    <label htmlFor="servicio" className="text-sm">
                        Servicio
                    </label>
                    <select
                        {...register("cp.servicio")}
                        id="servicio"
                        className={clasesInput}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>Selecciona un servicio</option>
                        {Servicio.map((servicio) => (
                            <option key={servicio} value={servicio}>
                                {servicio}
                            </option>
                        ))}
                    </select>
                    <FileSearch2 className="relative -top-10" />
                </div>

            </div>

            {/* mensaje */}
            <div className="w-full flex flex-col gap-1">
                <label htmlFor="comentarios" className="text-sm">
                    ¿Quieres dejarnos un mensaje?
                </label>
                <textarea
                    {...register("comentarios")}
                    id="comentarios"
                    className={clasesInput}
                />
                <MessageCircle className="relative -top-15.5" />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary inline-flex items-center justify-center gap-3 w-fit py-3 px-8 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 active:translate-y-px disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                Enviar
            </button>
        </form>
    );
}