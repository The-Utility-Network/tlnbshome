import { botanicalData } from '@/data/botanicalData';

export default function LochNessMission() {
    return (
        <section id="mission" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Mission Focus */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">
                                PROVENANCE & POWER
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                                Autonomous <br />
                                <span className="text-emerald-500 italic">Botanical</span> Systems
                            </h2>
                        </div>

                        <div className="space-y-6 text-emerald-100/60 leading-relaxed text-lg">
                            <p>
                                {botanicalData.mission.description}
                            </p>
                            <p>
                                Using NFT technologies, the team has created digital provenance solutions
                                for its products, allowing for greater transparency and trust in their systems.
                                We offer services that provide members with guidance and support on their
                                journey to becoming independent and economically empowered.
                            </p>
                        </div>

                        <div className="p-8 bg-emerald-950/20 border-l-4 border-emerald-500 rounded-r-2xl">
                            <p className="text-emerald-400 font-bold mb-2 font-mono text-sm">WHAT IS AN I3AS ASSET?</p>
                            <p className="text-sm text-emerald-100/50 leading-relaxed">
                                Industrial Automation as a Service (I3AS) deployed through non-fungible tokens (NFTs)
                                provide an efficient and secure way to track digital provenance. Companies can now
                                create I3AS for anything from industrial robots to autonomous grow-operations.
                            </p>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="grid gap-6">
                        {botanicalData.process.map((step, idx) => (
                            <div key={step.title} className="group p-6 bg-white/5 border border-white/10 hover:border-emerald-500/50 rounded-2xl transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-mono text-sm group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                                            {step.title}
                                        </h4>
                                        <p className="text-sm text-emerald-100/40 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
