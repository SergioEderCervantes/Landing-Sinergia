import React from 'react';

const stepsData = [
  {
    number: '01',
    title: 'Atracción estratégica',
    body: `Usamos Google Ads y Facebook Ads en Aguascalientes para ponerte frente a personas que ya están buscando lo que tú vendes.

No tráfico vacío.
Clientes potenciales reales.`,
  },
  {
    number: '02',
    title: 'Página que convierte',
    body: `Creamos una página clara que:

• Explica tu servicio sin confundir.
• Genera confianza.
• Lleva directo a agendar o cotizar.

No es diseño bonito.
Es estructura para vender.`,
  },
  {
    number: '03',
    title: 'Seguimiento automático',
    body: `Implementamos seguimiento por WhatsApp para que ningún prospecto se pierda.

Respuestas inmediatas.
Confirmación de citas.
Recordatorios automáticos.

Mientras tú trabajas, el sistema sigue vendiendo.`,
  },
];

const VisualPlaceholder = () => {
  return (
    <div className="relative w-full  bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700">
      <div className="w-3/5 aspect-square bg-slate-700/50 rounded-xl flex items-center justify-center">
        <svg
          className="w-1/4 h-1/4 text-slate-500"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.042.506.098.762.166m-1.524 0a48.57 48.57 0 00-2.828.575M9.75 3.104c.251.042.506.098.762.166m6.438 2.853a48.57 48.57 0 00-2.828-.575M16.188 5.959c.358-.088.722-.169 1.087-.245m-1.087.245L15 14.5M15 14.5l-2.25-2.25a2.25 2.25 0 00-1.591-.659V3.104m3 11.396c.09.206.16.42.22.639m-3.11.03a11.97 11.97 0 01-2.25-2.25m3.11.03c.09.206.16.42.22.639m0 0l1.89-1.89m-1.89 1.89l-1.89-1.89m1.89 1.89L15 14.5M12 21a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </div>
    </div>
  );
};


const SistemaSinergia = () => {
  return (
    <section >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <header className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            El Sistema Sinergia
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            No hacemos marketing suelto. Construimos un sistema de ventas completo.
          </p>
        </header>

        <div className="space-y-24">
          {stepsData.map((step, index) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              <div className={index % 2 !== 0 ? 'md:order-last' : ''}>
                <div className="relative">
                  <p className="absolute -top-10 -left-4 sm:-left-8 text-8xl md:text-9xl font-black text-white/5 select-none -z-10">
                    {step.number}
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <VisualPlaceholder />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SistemaSinergia;
