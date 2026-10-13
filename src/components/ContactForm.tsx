import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactSchema, type ContactInput } from '../schemas/contact';
import { sendContactMessage } from '../services/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const submit = async (data: ContactInput) => {
    setStatus('idle');
    try { await sendContactMessage(data); setStatus('success'); reset(); }
    catch { setStatus('error'); }
  };
  return <form className="contact-form card" onSubmit={handleSubmit(submit)} noValidate>
    <div className="field-row"><Field label="Full name" error={errors.name?.message}><input {...register('name')} autoComplete="name" maxLength={100} placeholder="Your name" /></Field><Field label="Email address" error={errors.email?.message}><input {...register('email')} type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" /></Field></div>
    <Field label="Subject" error={errors.subject?.message}><input {...register('subject')} maxLength={150} placeholder="How can I help?" /></Field>
    <Field label="Message" error={errors.message?.message}><textarea {...register('message')} rows={5} maxLength={2000} placeholder="Tell me a little about your project..." /></Field>
    <input {...register('website')} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
    <button className="button" disabled={isSubmitting}>{isSubmitting ? <Loader2 className="spin" size={18} /> : <Send size={18} />}{isSubmitting ? 'Sending…' : 'Send message'}</button>
    <div aria-live="polite">{status === 'success' && <p className="form-success"><CheckCircle2 size={17} /> Thanks! Your message has been sent. I’ll get back to you soon.</p>}{status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}</div>
  </form>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="field"><span>{label}</span>{children}{error && <small>{error}</small>}</label>;
}
