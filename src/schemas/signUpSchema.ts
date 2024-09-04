import {z} from 'zod'

export const usesrnameValidation = z.string().min(2, "username must be at least 2 characters")
.max(20, {message:"username must be 20 characters"})
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character") 

export const signUpSchema = z.object({
        usernaame:usesrnameValidation,
        email: z.string().email(),
        password : z.string().min(6, {message: "password must be at least 6 characters"})
})