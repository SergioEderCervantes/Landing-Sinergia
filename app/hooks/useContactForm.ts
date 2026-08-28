'use client';

import { useState } from 'react';
import { emailService, ContactFormData } from '../lib/email-service';
import { trackConversion } from '../lib/metaEvents';
import { gtagReportConversion } from '../lib/googleAds'


export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const sendForm = async (rawValues: Record<string, string>) => {
    setStatus('sending');
    setError(null);

    try {
      const data: ContactFormData = {
        name: rawValues.name || '',
        email: rawValues.email || '',
        brand: rawValues.brand || '',
        brand_story: rawValues.brand_story || '',
        website: rawValues.website || '',
        budget: rawValues.budget || '',
        source: rawValues.source || '',
        vertical: rawValues.vertical || 'default',
      };

      await emailService.sendContactForm(data);
      setStatus('success');

      const [firstName, ...rest] = data.name.trim().split(/\s+/);
      trackConversion(
        'Lead',
        { content_name: data.vertical, content_category: 'contacto' },
        {
          email: data.email || undefined,
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