import { z } from "zod";

export const schemaUserRegister = z.object({
   username: z.string().min(1, "O nome é obrigatório"),
   email: z.string().min(1, "E-mail é obrigatorio").email("Forneça um e-mail válido"),
   password: z
    .string()
    .min(1, "Senha é obrigatória")
    .min(8, "É necessário pelo menos oito caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmationPassword: z.string().min(1, "Confirmar a senha é obrigatorio")
}).refine(({password, confirmationPassword}) => password === confirmationPassword, {message: "As senha não correspondem", path: ["confirmationPassword"]})

export const schemaUserLogin = z.object({
    username: z.string().min(1, "Usuário é obrigatorio"),
    password: z.string().min(1, "Senha é obrigatória").min(8, "É necessário pelo menos oito caracteres.")
})