'use client';

import { motion } from 'framer-motion';
import LochNessCycle from './LochNessCycle';
import SatelliteProject from './SatelliteProject';

export default function BotanicalInfrastructure() {
    return (
        <section id="infrastructure" className="relative py-32 px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-emerald-500 font-mono text-xs tracking-[0.5em] uppercase">
                            Infrastructure Layer
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 tracking-tighter">
                            Industrial <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic">Automation</span> Flow
                        </h2>
                        <p className="text-emerald-100/40 max-w-2xl mx-auto mt-6 text-lg font-light leading-relaxed">
                            From the recursive biological cycles of our aquaponic systems to the high-density vertical architecture of I3AS.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Biological Cycle */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-emerald-500/30" />
                            <h3 className="text-emerald-500 font-mono text-sm tracking-widest uppercase">01: Biological Systems</h3>
                        </div>
                        <LochNessCycle />
                        <div className="mt-8 p-6 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl flex-1">
                            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Automated Aquaponic Cycle</h4>
                            <p className="text-emerald-100/40 text-sm leading-relaxed">
                                Our I3AS core utilizes a closed-loop aquaponic system where nutrient-rich water from aquatic life is filtered through botanical beds, creating a symbiotic automated growth cycle with zero waste.
                            </p>
                        </div>
                    </motion.div>

                    {/* Industrial Scaling */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col"
                    >
                        <div className="mb-6 flex items-center gap-4 justify-end">
                            <h3 className="text-cyan-500 font-mono text-sm tracking-widest uppercase">02: Satellite Infrastructure</h3>
                            <div className="w-12 h-[1px] bg-cyan-500/30" />
                        </div>
                        <SatelliteProject />
                        <div className="mt-8 p-6 bg-cyan-950/20 border border-cyan-500/10 rounded-2xl flex-1">
                            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Vertical Scaling & Distribution</h4>
                            <p className="text-cyan-100/40 text-sm leading-relaxed">
                                The Satellite Project enables rapid deployment of high-density vertical farming units. These standardized modules are monitored via decentralized provenance protocols to ensure consistent quality across the society.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scanning Bar Effect */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[scan-h_10s_linear_infinite]" />

            <style jsx>{`
                @keyframes scan-h {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(100vh); }
                }
            `}</style>
        </section>
    );
}
