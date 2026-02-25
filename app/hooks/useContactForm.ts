'use client';

import { useState } from 'react';
import { emailService, ContactFormData } from '../lib/email-service';

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const sendForm = async (rawValues: Record<string, string>) => {
    setStatus('sending');
    setError(null);

    try {
      // Map component keys to ContactFormData keys
      console.table(rawValues)
      const data: ContactFormData = {
        name: rawValues.name || '',
        email: rawValues.email || '',
        brand: rawValues.brand || '',
        brand_story: rawValues.brand_story || '',
        website: rawValues.website || '',
        budget: rawValues.budget || '',
        source: rawValues.source || '',
        vertical: 'default',
      };
      console.table(data)
      await emailService.sendContactForm(data);
      setStatus('success');
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
