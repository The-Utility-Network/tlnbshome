import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { INDUSTRIES } from '@/data/seo';

export const metadata = {
    title: 'Industries Transformed | The Loch Ness Botanical Society',
    description: 'See how The Loch Ness Botanical Society is revolutionizing Agriculture, Energy, Manufacturing, and Finance with I3AS botanical automation.',
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-transparent text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">VERTICAL INTEGRATION</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-500/30 pb-2 italic">
                        Industries <br /> Reimagined
                    </h1>
                    <p className="text-lg sm:text-xl text-emerald-100/40 max-w-2xl mx-auto">
                        We don't just offer software; we offer structural transformation.
                        Explore how TLNBS applies I3AS architecture to specific economic sectors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {INDUSTRIES.map((ind, index) => (
                        <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="group p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-950/40 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative Number */}
                            <span className="absolute top-4 right-8 text-6xl font-black text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors">
                                0{index + 1}
                            </span>

                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors relative z-10">{ind.title}</h2>
                            <p className="text-emerald-100/40 mb-8 relative z-10 h-14 text-sm sm:text-base">
                                {ind.description}
                            </p>

                            <div className="relative z-10">
                                <span className="text-xs font-mono text-emerald-500/50 uppercase tracking-wider mb-2 block">Powered By:</span>
                                <div className="flex flex-wrap gap-2">
                                    {ind.subsidiaries.map(sub => (
                                        <span key={sub} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 flex items-center text-emerald-400 text-sm font-semibold relative z-10 font-mono">
                                VIEW_CASE_STUDY <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
