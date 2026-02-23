import Card from "../components/Card";
import { IoIosWarning, IoIosTrendingDown } from "react-icons/io";
import { FaGhost } from "react-icons/fa";
const Problematica = () => {
  return (
    <section className="w-full py-20">
      {/* 12 column grid container */}
      <div className="grid grid-cols-12 gap-6">
        {/* Column 1: Empty margin */}
        <div className="hidden lg:block" />

        {/* Columns 2-11: Content */}
        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 space-y-12">
          {/* Title */}
          <div className="text-3xl md:text-4xl text-center font-bold text-lavender-web tracking-tight">
            <h2>
              El problema no es tu producto... <br /> <span className="text-shock-pink">es tu sistema</span>
            </h2>
          </div>

          {/* Cards Grid - 3 cards x 2 columns each = 6 columns + 2 gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              icon={<FaGhost className="size-12" />}
              title="Leads fantasma"
              description="Te llenas de mensajes preguntando 'precio', pero cuando respondes, desaparecen o te dejan en visto."
            />
            <Card
              icon={<IoIosWarning className="size-12" />}
              title="Respuesta Tardía es una venta Perdida"
              description="Tardar más de 5 minutos en responder reduce tu conversión drásticamente. Tu WhatsApp actual es un cementerio de chats olvidados."
              />
            <Card
              icon={<IoIosTrendingDown className="size-12" />}
              title=" Ingresos 'Montaña Rusa'"
              description="Un mes facturas bien, el siguiente no sabes de dónde saldrán los clientes. Vives dependiento de referidos."
            />
          </div>
        </div>

        {/* Column 12: Empty margin */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Problematica