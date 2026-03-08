import Card from "../components/Card";
import { ProblematicaContent } from "../content/types";

interface ProblematicaProps {
  content: ProblematicaContent
}

const Problematica = ({ content }: ProblematicaProps) => {
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
              {content.mainTitle} <br /> <span className="text-shock-pink">{content.mainTitleHighlight}</span>
            </h2>
          </div>

          {/* Cards Grid - 3 cards x 2 columns each = 6 columns + 2 gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.cards.map((card, index) => (
              <Card
                key={index}
                icon={<card.icon className="size-12" />}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Column 12: Empty margin */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Problematica
