import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  country: z.string().min(2).max(50),
  website: z.string().min(2).max(50),
  phone: z.string().min(9).max(9),
  ruc: z.string().min(11).max(11),
  profileImage: z.string(),
  description: z.string(),
});
