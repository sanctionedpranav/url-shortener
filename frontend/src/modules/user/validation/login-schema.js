import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid Email Format"),

  password: z
    .string()
    .min(8, "Password must be greater than 8 characters")
    .max(25, "Password must be less than 25 characters"),
});

export default loginSchema;
