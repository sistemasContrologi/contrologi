import { z } from "zod";


export const formWebinarSchema = z.object({
  nombre: z.string().min(2, { message: "Por favor ingresa un nombre válido." }),
  apellidos: z.string().min(2, { message: "Por favor ingresa un apellido válido." }),
  correo: z.string().email({ message: "Por favor ingresa un correo electrónico válido." }),
  movil: z
    .string()
    .min(10, { message: "El número telefónico debe tener al menos 10 dígitos." })
    .regex(/^\+?\d[\d\s-]{8,}$/, { message: "Teléfono inválido." }),
  empresa: z.string().min(2, { message: "Por favor ingresa una empresa válida." })

});

export type IFormWebinarData = z.infer<typeof formWebinarSchema>;