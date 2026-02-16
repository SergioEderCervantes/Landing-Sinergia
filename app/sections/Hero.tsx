import { HeroLogo } from '../components/HeroLogo'
import { Button } from '../components/Button'

export default function Hero() {
  return (
    <section className=" pt-32 h-[90vh]">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-6 px-6 lg:px-0 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold  ">
            Consigue un flujo predecible de citas calificadas, sin perseguir leads ni vivir pegado al celular.
          </h1>

          <p className="text-lg md:text-xl  leading-relaxed">
            Instalamos un sistema de ventas que atrae a tu cliente ideal,
            filtra a los curiosos y agenda automáticamente solo a quienes
            están listos para comprar.
          </p>

          <div className="space-y-1 my-20 text-center lg:text-start">
            <Button variant="primary" size="lg">
              Iniciar Diagnóstico de Viabilidad
            </Button>

            <p className="text-sm text-teal">
              Solo toma 45 segundos
            </p>
          </div>
        </div>

        <div className="hidden col-span-12 lg:col-span-4 px-6 lg:px-0 lg:flex items-center">
          <HeroLogo />
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}