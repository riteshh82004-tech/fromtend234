import { company } from '../../data/company'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-primary/20 text-neutral-content border-b-4 border-primary py-20 lg:py-28 select-none">
      {/* Circuit background overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
            <span>{company.certification}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {company.heroHeadline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              {company.heroHighlight}
            </span>
          </h1>

          <p className="text-neutral-content/80 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {company.overview} 
          </p>

          <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
            <Button to="/products" variant="primary" className="btn-md rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 py-2.5 px-6">
              Explore Products
            </Button>
            <Button to="/careers" variant="outline" className="btn-md rounded-xl font-bold border-neutral-content/20 hover:bg-neutral-content/10 py-2.5 px-6">
              Internship Program
            </Button>
          </div>

          <div className="pt-6 border-t border-neutral-content/10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-xs text-neutral-content/60 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✔</span> Wholesaler & Distributor
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✔</span> GST registered entity
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✔</span> Jaipur Headquarters
            </div>
          </div>
        </div>

        {/* Right Column: Premium Industrial Card Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-neutral-800/80 backdrop-blur-md rounded-2xl border border-neutral-700/60 p-6 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                  Product Lineup
                </span>
                <h3 className="text-lg font-black text-white mt-0.5 tracking-tight">
                  MILAN POWER Brand
                </h3>
              </div>
              <span className="text-[10px] bg-primary/10 border border-primary/30 text-primary font-extrabold px-2.5 py-1 rounded">
                ISO 9001:2000
              </span>
            </div>

            {/* Simulated Product Category Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-xl p-3 text-center">
                <span className="text-xl">🔌</span>
                <p className="text-xs font-bold text-white mt-1">Modular Switches</p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">Spark-Shield Tech</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-xl p-3 text-center">
                <span className="text-xl">🎛</span>
                <p className="text-xs font-bold text-white mt-1">MCB Boxes</p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">Short-Circuit Prot</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-xl p-3 text-center">
                <span className="text-xl">⚡</span>
                <p className="text-xs font-bold text-white mt-1">Cables & Wires</p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">99.9% Pure Copper</p>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-700/40 rounded-xl p-3 text-center">
                <span className="text-xl">💡</span>
                <p className="text-xs font-bold text-white mt-1">LED Lighting</p>
                <p className="text-[9px] text-neutral-content/40 mt-0.5">Energy Efficient</p>
              </div>
            </div>

            <div className="bg-neutral-950/60 rounded-xl p-3.5 border border-neutral-700/40 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-lg">
                🏢
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white leading-tight">
                  Agarwal Electropower Pvt. Ltd.
                </p>
                <p className="text-[9px] text-neutral-content/50 mt-0.5 font-mono">
                  CIN: {company.cin}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
