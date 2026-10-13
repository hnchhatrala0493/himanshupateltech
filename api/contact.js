const requests = new Map();
const RATE_LIMIT_MS = 30_000;
const MAX_BODY_BYTES = 12_000;

const clean = (value, maxLength) => typeof value === 'string'
  ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength)
  : '';
const cleanMessage = (value, maxLength) => typeof value === 'string'
  ? value.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, ' ').trim().slice(0, maxLength)
  : '';

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
}[character]));

const reply = (response, status, success, message) => response.status(status).json({ success, message });

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return reply(response, 405, false, 'Method not allowed.');
  }

  const contentLength = Number(request.headers['content-length'] || 0) || Buffer.byteLength(JSON.stringify(request.body || {}));
  if (contentLength > MAX_BODY_BYTES) return reply(response, 413, false, 'Unable to send message. Please try again.');

  const body = typeof request.body === 'string' ? (() => { try { return JSON.parse(request.body); } catch { return {}; } })() : request.body || {};
  if (typeof body.website === 'string' && body.website.trim()) return reply(response, 200, true, 'Message sent successfully.');

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const subject = clean(body.subject, 150);
  const message = cleanMessage(body.message, 2000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name.length < 2 || !validEmail || message.length < 10 || message.length > 2000) {
    return reply(response, 400, false, 'Please check the form and try again.');
  }

  const forwardedFor = request.headers['x-forwarded-for'];
  const ip = clean(Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor || request.socket?.remoteAddress || 'unknown', 100).split(',')[0];
  const now = Date.now();
  const previousRequest = requests.get(ip) || 0;
  if (now - previousRequest < RATE_LIMIT_MS) return reply(response, 429, false, 'Please wait before sending another message.');
  requests.set(ip, now);
  for (const [address, timestamp] of requests) if (now - timestamp > RATE_LIMIT_MS * 4) requests.delete(address);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL || 'himanshupatel0493@gmail.com';
  if (!apiKey || !from) return reply(response, 500, false, 'Unable to send message. Please try again.');

  const submittedAt = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'long', timeZone: 'Asia/Kolkata' });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || 'General enquiry');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const text = `New Portfolio Contact Request\n\nName:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject || 'General enquiry'}\n\nMessage:\n${message}\n\nSubmitted From:\nPortfolio Website\n\nSubmitted At:\n${submittedAt}`;

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        text,
        html: `<h2>New Portfolio Contact Request</h2><p><strong>Name:</strong><br>${safeName}</p><p><strong>Email:</strong><br>${safeEmail}</p><p><strong>Subject:</strong><br>${safeSubject}</p><p><strong>Message:</strong><br>${safeMessage}</p><p><strong>Submitted From:</strong><br>Portfolio Website</p><p><strong>Submitted At:</strong><br>${escapeHtml(submittedAt)}</p>`,
      }),
    });
    if (!emailResponse.ok) throw new Error('Email provider rejected the request.');
    return reply(response, 200, true, 'Message sent successfully.');
  } catch {
    requests.delete(ip);
    return reply(response, 502, false, 'Unable to send message. Please try again.');
  }
}
