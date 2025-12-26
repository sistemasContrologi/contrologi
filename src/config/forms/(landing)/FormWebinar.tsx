'use client';

import { formWebinarSchema, IFormWebinarData } from "@/lib/interfaces/(landing)/formWebinar";
import { sendToUpnify } from "@/lib/services/upnifyApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const separacionDivs = 'flex flex-col xl:flex-row gap-5';
const labelClasses = 'xl:text-sm font-medium';
const inputClasses = 'border-b-2 border-gray-400 p-2 pl-0 w-full bg-transparent focus:border-primary focus:outline-none transition-colors duration-200';

export default function FormWebinar() {
    const tk = "P07APE46A689E-1FD6-4D96-8F07-A172E9AD6218";

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<IFormWebinarData>({
        resolver: zodResolver(formWebinarSchema),
        defaultValues: {
            nombre: "",
            apellidos: "",
            correo: "",
            movil: "",
            empresa: "",
        },
    });

    const onSubmit: SubmitHandler<IFormWebinarData> = async (data) => {
        const toastId = toast.loading("Enviando tus datos…");

        if (!tk) {
            toast.error("Falta el token de envío.", { id: toastId });
            return;
        }

        const payload = {
            nombre: data.nombre,
            apellidos: data.apellidos,
            movil: data.movil,
            correo: data.correo,
            empresa: data.empresa,
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

    const onInvalid = (errors: FieldErrors<IFormWebinarData>) => {
        const ordenVisual = [
            "nombre",
            "apellidos",
            "movil",
            "correo",
            "empresa"
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
        <section className="xl:w-[700px] w-full">
            <form className="flex flex-col gap-8 w-full"
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            noValidate
            >
                {/* nombre y apellidos */}
                <div className={separacionDivs}>
                    <div className="flex flex-col items-start w-full gap-2">
                        <label htmlFor="nombre" className={labelClasses}>Nombre(s)*</label>
                        <input type="text" id="nombre" placeholder="Nombres(s)"
                            className={inputClasses} required
                            {...register("nombre")}
                        />
                    </div>
                    <div className="flex flex-col items-start w-full gap-2">
                        <label htmlFor="apellidos" className={labelClasses}>Apellido(s)*</label>
                        <input type="text" id="apellidos" placeholder="Apellido(s)"
                            className={inputClasses} required
                            {...register("apellidos")}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start w-full gap-2">
                    <label htmlFor="movil" className={labelClasses}>WhatsApp*</label>
                    <input type="text" id="movil" placeholder="WhatsApp"
                        className={inputClasses} required 
                        {...register("movil")}
                        />
                </div>

                <div className="flex flex-col items-start w-full gap-2">
                    <label htmlFor="correo" className={labelClasses}>Correo electrónico*</label>
                    <input type="text" id="correo" placeholder="Correo electrónico"
                        className={inputClasses} required 
                        {...register("correo")}
                        />
                </div>

                <div className="flex flex-col items-start w-full gap-2">
                    <label htmlFor="empresa" className={labelClasses}>Empresa*</label>
                    <input type="text" id="empresa" placeholder="Empresa"
                        className={inputClasses} required 
                        {...register("empresa")}
                        />
                </div>

                <button
                className="bg-primary w-fit py-3 px-6 rounded-full font-bold text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mx-auto mt-5"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting && <Loader2 className="animate-spin w-5 h-5" />}
                {isSubmitting ? "Enviando..." : "Enviar información"}
            </button>
            </form>

            
        </section>
    );
}