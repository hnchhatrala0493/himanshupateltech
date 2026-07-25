import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  subject: z.string().min(3, 'Please add a subject.'),
  message: z.string().min(20, 'Please share at least 20 characters.'),
});

export type ContactInput = z.infer<typeof contactSchema>;
