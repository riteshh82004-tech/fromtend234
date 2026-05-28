import { company } from "../../data/company";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-primary/20 text-neutral-content border-b-4 border-primary py-12 sm:py-16 md:py-20 lg:py-28 select-none safe-area">
      {/* Circuit background overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider justify-center sm:justify-start">
            <span>{company.certification}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {company.heroHeadline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              {company.heroHighlight}
            </span>
          </h1>

          <p className="text-neutral-content/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {company.overview}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <Button
              to="/products"
              variant="primary"
              className="btn-md sm:btn-md rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 py-2.5 px-6 w-full sm:w-auto"
            >
              Explore Products
            </Button>
            <Button
              to="/careers"
              variant="outline"
              className="btn-md sm:btn-md rounded-xl font-bold border-neutral-content/20 hover:bg-neutral-content/10 py-2.5 px-6 w-full sm:w-auto"
            >
              Internship Program
            </Button>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-neutral-content/10 flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-x-6 md:gap-x-8 text-xs text-neutral-content/60 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-primary text-sm">✔</span> Wholesaler &
              Distributor
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-primary text-sm">✔</span> GST registered
              entity
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-primary text-sm">✔</span> Jaipur
              Headquarters
            </div>
          </div>
        </div>

        {/* Right Column: Premium Industrial Card Mockup */}
        <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
          <div className="w-full max-w-sm lg:max-w-md bg-neutral-800/80 backdrop-blur-md rounded-2xl border border-neutral-700/60 p-4 sm:p-6 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex justify-between items-start mb-4 sm:mb-6 gap-2">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                  Product Lineup
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5 tracking-tight">
                  MILAN POWER Brand
                </h3>
              </div>
              <span className="text-[10px] bg-primary/10 border border-primary/30 text-primary font-extrabold px-2 sm:px-2.5 py-1 rounded flex-shrink-0">
                ISO 9001:2000
              </span>
            </div>

            {/* Simulated Product Category Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center text-xs">
                <span className="text-lg">🔌</span>
                <p className="text-xs font-bold text-white mt-1">
                  Modular Switches
                </p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">
                  Spark-Shield Tech
                </p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center text-xs">
                <span className="text-lg">🎛</span>
                <p className="text-xs font-bold text-white mt-1">MCB Boxes</p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">
                  Short-Circuit Prot
                </p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center text-xs">
                <span className="text-lg">⚡</span>
                <p className="text-xs font-bold text-white mt-1">
                  Cables & Wires
                </p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">
                  99.9% Pure Copper
                </p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center text-xs">
                <span className="text-lg">💡</span>
                <p className="text-xs font-bold text-white mt-1">
                  LED Lighting
                </p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">
                  Energy Efficient
                </p>
              </div>
            </div>

            <div className="bg-neutral-950/60 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 border border-neutral-700/40 flex items-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-lg flex-shrink-0">
                🏢
              </div>
              <div className="text-left min-w-0">
                <p className="text-[11px] font-bold text-white leading-tight break-words">
                  Agarwal Electropower Pvt. Ltd.
                </p>
                <p className="text-[9px] text-neutral-content/50 mt-0.5 font-mono truncate">
                  CIN: {company.cin}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
