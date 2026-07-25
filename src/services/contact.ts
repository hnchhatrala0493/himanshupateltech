import type { ContactInput } from '../schemas/contact';

export async function sendContactMessage(data: ContactInput) {
  const endpoint = import.meta.env.VITE_CONTACT_API_URL as string | undefined;
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { ok: true, preview: true };
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Message delivery failed.');
  return { ok: true, preview: false };
}
