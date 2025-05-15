import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "required")
})

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "required").email(),
  password: z.string().min(8, "Password must be at least 8  characters long"),
})
