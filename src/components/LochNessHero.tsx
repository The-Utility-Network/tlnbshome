import Link from 'next/link';
import Image from 'next/image';
import { botanicalData } from '@/data/botanicalData';

export default function LochNessHero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
            {/* Spectacular Botanical Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#000502]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />

                {/* Loch Ness spectacular image asset */}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-screen bg-cover bg-center grayscale brightness-75 contrast-125"
                    style={{ backgroundImage: "url('/og-images/lochness_og.jpg')" }}
                />

                {/* Holographic Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10 px-4">
                {/* Medallion Hero */}
                <div className="mb-12 relative flex justify-center opacity-0 animate-fadeInUp">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative group">
                        {/* Recursive Glow Rings */}
                        <div className="absolute inset-[-20%] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin:10s_linear_infinite]" />
                        <div className="absolute inset-2 border border-cyan-500/10 rounded-full animate-[spin:15s_linear_infinite_reverse]" />

                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all duration-700" />
                        <Image
                            src="/Medallions/TLN_opt.png"
                            alt="TLNBS Medallion"
                            fill
                            className="object-contain relative z-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                        />
                    </div>
                </div>

                {/* System Label */}
                <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-10 opacity-0 animate-fadeInUp stagger-1 bg-emerald-500/5 px-3 sm:px-4 py-1.5 border border-emerald-500/10 rounded-full backdrop-blur-sm self-center max-w-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399] flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] sm:tracking-[0.5em] text-emerald-400 uppercase truncate">
                        BOTANICAL_AUTOMATION_v4.2
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 opacity-0 animate-fadeInUp stagger-2 leading-[0.9]">
                    <span className="block text-white uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-2">Financing</span>
                    <span className="block bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent uppercase italic drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                        Grow Spots.
                    </span>
                </h1>

                {/* Mission Statement */}
                <p className="text-lg sm:text-xl md:text-2xl text-cyan-50/40 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed opacity-0 animate-fadeInUp stagger-3 font-light tracking-tight px-2">
                    {botanicalData.mission.subheadline} Elevating independent production through
                    <span className="text-emerald-400/60 font-mono text-xs sm:text-sm ml-1 sm:ml-2 whitespace-nowrap">//_WEB3_PROVENANCE</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 opacity-0 animate-fadeInUp stagger-4 w-full px-4">
                    <Link href="#mission" className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black font-mono text-xs sm:text-sm tracking-wider sm:tracking-widest rounded-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] active:scale-95 overflow-hidden w-full sm:w-auto text-center">
                        <span className="relative z-10">MINT_GROW_SPOT</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                    </Link>
                    <Link href="#collection" className="px-8 sm:px-12 py-4 sm:py-5 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] rounded-sm transition-all backdrop-blur-xl hover:bg-emerald-500/5 w-full sm:w-auto text-center">
                        VIEW_COLLECTION
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 opacity-0 animate-fadeInUp stagger-4 px-4">
                    {[
                        { value: '4200', label: 'PWC PLANTS' },
                        { value: 'I3AS', label: 'SERVICE MODEL' },
                        { value: '100%', label: 'AUTOMATED' },
                        { value: '∞', label: 'GENETIC CUSTOM' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                {stat.value}
                            </div>
                            <div className="text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest text-emerald-500/40 uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp stagger-5">
                <Link href="#mission" className="flex flex-col items-center gap-2 text-emerald-500/40 hover:text-emerald-400 transition-colors">
                    <span className="text-[10px] font-mono tracking-[0.4em]">INITIATE_DESCEND</span>
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
