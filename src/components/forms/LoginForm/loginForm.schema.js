import { z } from "zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .email("Forneça um e-mail válido.")
    .min(1, "O e-mail é obrigatório."),
  password: z.string().min(1, "A senha é obrigatória."),
});

export { loginFormSchema };
