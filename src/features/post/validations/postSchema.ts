import { z } from "zod"

export const postSchema = z.object({
  title: z.string().min(3, "Title too short should be atleast 3 chracter"),
  body: z.string().min(5, "Body too short should be atkeast 5 character"),
})