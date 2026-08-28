'use client';

import { useState } from 'react';
import { emailService, ContactFormData } from '../lib/email-service';
import { trackConversion } from '../lib/metaEvents';
import { normalizePhoneMx } from '../lib/phone';
import type { FormStep } from '../content/types';
import { gtagReportConversion } from '../lib/googleAds'


export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// Ids que el código lee directamente (identidad / match de Meta). El resto de
// campos es libre y se manda al correo dentro de `details` / `extra`.
const IDENTITY_IDS = new Set(['name', 'email', 'phone']);

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const sendForm = async (
    values: Record<string, string>,
    steps: FormStep[],
    vertical: string,
  ) => {
    setStatus('sending');
    setError(null);

    try {
      const extra = Object.fromEntries(
        Object.entries(values).filter(
          ([id, v]) => !IDENTITY_IDS.has(id) && v && v.trim(),
        ),
      );

      const details = steps
        .filter((s) => !IDENTITY_IDS.has(s.id) && values[s.id] && values[s.id].trim())
        .map((s) => `${s.label}: ${values[s.id]}`)
        .join('\n');

      const data: ContactFormData = {
        name: values.name || '',
        email: values.email || '',
        phone: values.phone || '',
        vertical: vertical || 'default',
        extra,
        details,
      };

      await emailService.sendContactForm(data);
      setStatus('success');

      const [firstName, ...rest] = data.name.trim().split(/\s+/);
      trackConversion(
        'Lead',
        { content_name: data.vertical, content_category: 'contacto' },
        {
          email: data.email || undefined,
          phone: normalizePhoneMx(data.phone) || undefined,
          firstName: firstName || undefined,
          lastName: rest.join(' ') || undefined,
        },
      );

      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al enviar el formulario';
      setError(message);
      setStatus('error');
      return false;
    }
  };

  return {
    sendForm,
    status,
    error,
    isSubmitting: status === 'sending',
  };
}