import { Resend } from 'resend';

declare const process: { env: Record<string, string | undefined> };

type FieldName = 'name' | 'email' | 'subject' | 'message';
type ContactPayload = Record<FieldName | 'website', unknown>;

const MAX_BODY_BYTES = 20_000;
const fieldLimits: Record<FieldName, { min: number; max: number }> = {
  name: { min: 2, max: 80 },
  email: { min: 5, max: 254 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 3000 },
};
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const headerBreakPattern = /[\r\n]/;

const json = (body: object, status: number, headers: HeadersInit = {}) => Response.json(body, {
  status,
  headers: {
    'Cache-Control': 'no-store',
    ...headers,
  },
});

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character]!);

const isValidField = (name: FieldName, value: unknown): value is string => {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  const { min, max } = fieldLimits[name];
  if (trimmed.length < min || trimmed.length > max) return false;
  if (name !== 'message' && headerBreakPattern.test(trimmed)) return false;
  return name !== 'email' || emailPattern.test(trimmed);
};

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return json({ success: false, message: 'Method not allowed.' }, 405, { Allow: 'POST' });
    }

    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
      return json({ success: false, message: 'Invalid request.' }, 400);
    }

    const declaredLength = Number(request.headers.get('content-length') ?? 0);
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return json({ success: false, message: 'Invalid request.' }, 400);
    }

    let payload: ContactPayload;
    try {
      const rawBody = await request.text();
      if (rawBody.length > MAX_BODY_BYTES) return json({ success: false, message: 'Invalid request.' }, 400);
      payload = JSON.parse(rawBody) as ContactPayload;
    } catch {
      return json({ success: false, message: 'Invalid request.' }, 400);
    }

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return json({ success: false, message: 'Invalid request.' }, 400);
    }

    if (typeof payload.website !== 'string' || payload.website.trim().length > 0) {
      return json({ success: false, message: 'Invalid request.' }, 400);
    }

    const errors: Partial<Record<FieldName, 'invalid'>> = {};
    for (const name of Object.keys(fieldLimits) as FieldName[]) {
      if (!isValidField(name, payload[name])) errors[name] = 'invalid';
    }
    if (Object.keys(errors).length > 0) return json({ success: false, errors }, 400);

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
    if (!apiKey || !toEmail || !fromEmail || !emailPattern.test(toEmail) || headerBreakPattern.test(fromEmail) || fromEmail.length > 320) {
      console.error('Contact endpoint is missing a valid server-side email configuration.');
      return json({ success: false, message: 'Unable to send the message.' }, 500);
    }

    const name = (payload.name as string).trim();
    const email = (payload.email as string).trim();
    const subject = (payload.subject as string).trim();
    const message = (payload.message as string).trim();
    const safeSubject = `Nuevo contacto desde el portfolio: ${subject}`;
    const text = `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`;
    const html = `
      <h1>Nuevo mensaje desde el portfolio</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
    `;

    try {
      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: safeSubject,
        text,
        html,
      });

      if (error) {
        console.error('Resend rejected the contact email:', error.name);
        return json({ success: false, message: 'Unable to send the message.' }, 500);
      }

      return json({ success: true }, 200);
    } catch (error) {
      console.error('Contact email delivery failed:', error instanceof Error ? error.name : 'UnknownError');
      return json({ success: false, message: 'Unable to send the message.' }, 500);
    }
  },
};
