import Card from "../components/Card";


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
          <div className="text-4xl md:text-5xl text-center font-bold text-lavender-web ">
            <h2>
              El problema no es tu producto... <br /> es tu sistema
            </h2>
          </div>
          
          {/* Cards Grid - 3 cards x 2 columns each = 6 columns + 2 gaps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* Column 12: Empty margin */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Problematica