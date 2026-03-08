'use client';

import { useRef, useState } from 'react';
import { Button } from './Button';
import { cn } from '../lib/utils';
import { ensureGsap, gsap, useGSAP } from '../lib/gsapClient';
import { useContactForm } from '../hooks/useContactForm';

type FormStep = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

const steps: FormStep[] = [
  { id: 'name', label: '¿Cómo te llamas?', placeholder: 'Tu nombre completo', type: 'text' },
  { id: 'email', label: '¿A qué correo te escribimos?', placeholder: 'tu@email.com', type: 'email' },
  { id: 'brand', label: '¿Cómo se llama tu marca o negocio?', placeholder: 'Nombre de tu negocio', type: 'text' },
  { id: 'brand_story', label: 'Cuéntanos un poco sobre tu marca', placeholder: '¿Qué haces y qué buscas lograr?', type: 'textarea' },
  { id: 'website', label: '¿Tienes website o redes sociales?', placeholder: 'url o @usuario', type: 'text' },
  { id: 'budget', label: '¿Con cuanto presupuesto cuentas para este proyecto?', placeholder: '$10000 MXN', type: 'text' },
  { id: 'source', label: '¿Cómo nos encontraste?', placeholder: 'Selecciona una opción', type: 'select' },
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const directionRef = useRef(1); // 1 for next, -1 for back
  const [isAnimating, setIsAnimating] = useState(false);

  const { sendForm, isSubmitting, status } = useContactForm();

  ensureGsap();

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateTransition = contextSafe((nextStep: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const direction = nextStep > currentStep ? 1 : -1;
    directionRef.current = direction;

    const exitY = direction === 1 ? -100 : 100;

    gsap.to(contentRef.current, {
      y: exitY,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentStep(nextStep);
      }
    });
  });

  // Entry animation triggered when currentStep changes
  useGSAP(() => {
    if (!contentRef.current) return;

    const direction = directionRef.current;
    const entryY = direction === 1 ? 100 : -100;

    // First load special case
    const isFirstLoad = !isAnimating && currentStep === 0;

    gsap.fromTo(contentRef.current,
      {
        y: isFirstLoad ? 100 : entryY,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        delay: isFirstLoad ? 0.3 : 0,
        onComplete: () => setIsAnimating(false)
      }
    );
  }, { dependencies: [currentStep], scope: containerRef });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [steps[currentStep].id]: e.target.value });
  };

  const validateStep = (stepIndex: number) => {
    const step = steps[stepIndex];
    const value = formData[step.id] || '';
    
    // Optional fields
    if (['brand_story', 'website', 'budget'].includes(step.id)) return true;
    
    // Mandatory fields check
    if (!value.trim()) return false;
    
    // Email validation
    if (step.id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
    
    return true;
  };

  const handleNext = async () => {
    if (isAnimating || isSubmitting) return;

    if (!validateStep(currentStep)) {
      // Optional: Add a shake animation or error message here
      return;
    }

    if (currentStep < steps.length - 1) {
      animateTransition(currentStep + 1);
    } else {
      const success = await sendForm(formData);
      if (success) {
        alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
      } else {
        alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
      }
    }
  };

  const handleBack = () => {
    if (isAnimating || currentStep === 0 || isSubmitting) return;
    animateTransition(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;
  const currentField = steps[currentStep];
  const isValid = validateStep(currentStep);

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[40vh] text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">¡Mensaje Enviado!</h2>
        <p className="text-xl text-white/60 max-w-md">
          Gracias por tu interés. Revisaremos tu información y nos pondremos en contacto contigo lo antes posible.
        </p>
        <Button variant="primary" href="/" className="mt-8">Volver al inicio</Button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center w-full min-h-[60vh] overflow-hidden">
      <div ref={contentRef} className="w-full space-y-8">
        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-1 w-8 rounded-full transition-colors",
                idx <= currentStep ? "bg-shock-pink" : "bg-white/20"
              )}
            />
          ))}
        </div>

        {/* Form Input Area */}
        <div className="flex flex-col items-center space-y-6">
          <label className="text-3xl md:text-5xl font-bold text-center text-white tracking-tight">
            {currentField.label}
          </label>

          <div className="w-full max-w-xl">
            {currentField.type === 'textarea' ? (
              <textarea
                autoFocus
                className="w-full bg-transparent border-b-2 border-white/30 py-4 text-2xl md:text-3xl text-center focus:outline-none focus:border-shock-pink transition-colors placeholder:text-white/10 resize-none h-32"
                placeholder={currentField.placeholder}
                value={formData[currentField.id] || ''}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleNext();
                  }
                }}
                disabled={isSubmitting}
              />
            ) : currentField.type === 'select' ? (
              <select
                className="w-full bg-transparent border-b-2 border-white/30 py-4 text-2xl md:text-3xl text-center focus:outline-none focus:border-shock-pink transition-colors appearance-none cursor-pointer text-white"
                value={formData[currentField.id] || ''}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                disabled={isSubmitting}
              >
                <option value="" disabled className="bg-gunmetal">{currentField.placeholder}</option>
                <option value="anuncios" className="bg-gunmetal text-lg">Anuncios</option>
                <option value="recomendados" className="bg-gunmetal text-lg">Recomendados</option>
                <option value="otros" className="bg-gunmetal text-lg">Otros</option>
              </select>
            ) : (
              <input
                autoFocus
                type={currentField.type}
                className="w-full bg-transparent border-b-2 border-white/30 py-4 text-2xl md:text-3xl text-center focus:outline-none focus:border-shock-pink transition-colors placeholder:text-white/10"
                placeholder={currentField.placeholder}
                value={formData[currentField.id] || ''}
                onChange={handleInputChange}
                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                disabled={isSubmitting}
              />
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
          {currentStep === 0 ? (
            <Button
              variant="outline"
              href="/"
              className="border-white/20 text-white/60 hover:text-white hover:border-white w-full md:w-40 hover:bg-transparent"
            >
              Regresar
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-white/20 text-white/60 hover:text-white hover:border-white w-full md:w-40  hover:bg-transparent"
              disabled={isSubmitting}
            >
              Atrás
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNext}
            className={cn(
              "w-full md:w-40",
              isLastStep ? "bg-shock-pink text-white border-shock-pink" : "bg-white text-black"
            )}
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : (isLastStep ? 'Enviar' : 'Siguiente')}
          </Button>
        </div>

        {/* Step Counter */}
        <p className="text-center text-white/40 text-sm mt-8">
          {isSubmitting ? 'Procesando...' : `Paso ${currentStep + 1} de ${steps.length}`}
        </p>
      </div>
    </div>
  );
}
