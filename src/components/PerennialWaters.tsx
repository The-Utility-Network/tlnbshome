import { botanicalData } from '@/data/botanicalData';

export default function PerennialWaters() {
    return (
        <section id="roadmap" className="relative py-24 px-6 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase">
                        PHASED_INTEGRATION
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 italic font-black">
                        PERENNIAL WATERS <span className="text-emerald-500">ROADMAP</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {botanicalData.roadmap.map((item, idx) => (
                        <div key={item.id} className="relative group">
                            {/* Connector Line */}
                            {idx < botanicalData.roadmap.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent z-0" />
                            )}

                            <div className="card p-8 bg-black/40 backdrop-blur-md border border-white/5 hover:border-emerald-500/30 transition-all group-hover:-translate-y-2">
                                <div className="flex flex-col gap-4">
                                    <div className="text-emerald-500/40 font-mono text-xs tracking-widest uppercase">
                                        EST: {item.duration}
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-emerald-100/30 leading-relaxed font-light">
                                        {item.description}
                                    </p>

                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="w-8 h-[1px] bg-emerald-500/50" />
                                        <span className="text-[10px] font-mono text-emerald-600 uppercase">Phase_0{idx + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Collection Showcase Small */}
                <div id="collection" className="mt-32 p-12 bg-white/5 rounded-3xl border border-white/10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest font-black italic">
                        The <span className="text-emerald-500 underline underline-offset-8">Perennial Waters</span> Collection
                    </h3>
                    <p className="text-emerald-100/40 max-w-2xl mx-auto mb-12 italic">
                        Our flagship I3AS project providing access to automated aquaponic operations.
                        4,200 plants. 100% Transparency. Full Provenance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
                        {['HYDROPONICS', 'AQUAPONICS', 'MOUNTAIN-GROWN', 'BESPOKE STRAINS'].map((track) => (
                            <div key={track} className="px-4 sm:px-6 py-2 border border-emerald-500/20 rounded-full text-[9px] sm:text-[10px] font-mono text-emerald-500 tracking-[0.1em] sm:tracking-[0.2em]">
                                {track}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
