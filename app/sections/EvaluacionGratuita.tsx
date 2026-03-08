import { Button } from "../components/Button";
import { EvaluacionGratuitaContent } from "../content/types";

interface EvaluacionGratuitaProps {
  content: EvaluacionGratuitaContent
}

const EvaluacionGratuita = ({ content }: EvaluacionGratuitaProps) => {
  return (
    <section className="bg-transparent py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />

        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              {content.title}
            </h2>
            <p className="mb-12 text-lg md:text-xl text-gray-400">
              {content.subtitle}
              <br />
              <span className="font-semibold text-shock-pink">
                {content.subtitleHighlight}
              </span>
            </p>

            <Button
              variant="primary"
              size="lg"
              href={content.ctaHref}
            >
              {content.ctaText}
            </Button>

            <p className="mt-6 text-sm text-gray-500">
              {content.note}
            </p>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default EvaluacionGratuita;
