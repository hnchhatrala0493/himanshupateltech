import type { ContactInput } from '../schemas/contact';

export async function sendContactMessage(data: ContactInput) {
  const endpoint = (import.meta.env.VITE_CONTACT_API_URL as string | undefined) || '/api/contact';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await response.json().catch(() => null) as { success?: boolean } | null;
  if (!response.ok || !result?.success) throw new Error('Message delivery failed.');
  return { ok: true };
}
