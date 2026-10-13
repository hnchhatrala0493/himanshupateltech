import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100, 'Name is too long.'),
  email: z.string().email('Enter a valid email address.'),
  subject: z.string().trim().max(150, 'Subject is too long.').optional(),
  message: z.string().trim().min(10, 'Please share at least 10 characters.').max(2000, 'Message must be 2000 characters or fewer.'),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
