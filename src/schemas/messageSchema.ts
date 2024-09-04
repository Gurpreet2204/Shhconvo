import { z } from "zod";
export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be of 10 characters" })
    .max(250, { message: "Content must be longer than 250 characters" }),
});
