// app/components/LinkedInInsightTag.tsx
'use client'

import Script from 'next/script'
import { useConsent } from './ConsentProvider'

const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID

// Sin consentimiento no se carga nada. Se omite el <noscript> <img> de LinkedIn
// a propósito: dispararía la petición a px.ads.linkedin.com sin consentimiento.
export default function LinkedInInsightTag() {
  const { status } = useConsent()

  if (!LINKEDIN_PARTNER_ID || status !== 'accepted') return null

  return (
    <Script
      id="linkedin-insight-tag"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `,
      }}
    />
  )
}
