import { z } from "zod";

export const formLpSoftwareSchema = z.object({
    nombre: z.string().min(2, { message: "Por favor ingresa un nombre válido." }),
    apellidos: z.string().min(2, { message: "Por favor ingresa un apellido válido." }),
    correo: z.string().email({ message: "Por favor ingresa un correo electrónico válido." }),
    movil: z
        .string()
        .min(10, { message: "El número telefónico debe tener al menos 10 dígitos." })
        .regex(/^\+?\d[\d\s-]{8,}$/, { message: "Teléfono inválido." }),
    comentarios: z.string().min(2, { message: "Por favor ingresa un comentario válido." }).optional(),
});


export type IFormLpSoftwareData = z.infer<typeof formLpSoftwareSchema>;