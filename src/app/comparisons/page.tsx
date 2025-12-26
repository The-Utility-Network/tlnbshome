import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPARISONS } from '@/data/seo';

export const metadata = {
    title: 'Resources & Analysis | The Loch Ness Botanical Society',
    description: 'Compare The Loch Ness Botanical Society against leading DePIN projects, RWA platforms, and traditional enterprise solutions.',
};

export default function ComparisonsPage() {
    const categories = Array.from(new Set(COMPARISONS.map(c => c.category)));

    return (
        <div className="min-h-screen bg-transparent text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">MARKET POSITION</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-500/30 pb-2 italic">
                        TLNBS in Context
                    </h1>
                    <p className="text-lg sm:text-xl text-emerald-100/40 max-w-2xl mx-auto">
                        Transparency is our core product. See exactly how our I3AS architecture
                        differs from legacy systems and contemporary blockchain projects.
                    </p>
                </div>

                <div className="space-y-16">
                    {categories.map((category) => (
                        <section key={category}>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-8 border-b border-emerald-500/20 pb-4 flex items-center gap-4">
                                <span className="text-emerald-400">{category}</span> Sector
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {COMPARISONS.filter(c => c.category === category).map((comp) => (
                                    <Link
                                        key={comp.slug}
                                        href={`/comparisons/${comp.slug}`}
                                        className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-950/40 transition-all duration-300 flex flex-col"
                                    >
                                        <div className="mb-4">
                                            <span className="text-xs font-mono text-emerald-500/50 uppercase">Analysis</span>
                                            <h4 className="text-xl sm:text-2xl font-bold">{comp.competitor}</h4>
                                        </div>

                                        <p className="text-emerald-100/40 text-sm mb-6 flex-grow">
                                            {comp.description}
                                        </p>

                                        <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                                            <span className="text-emerald-400 text-xs font-bold block mb-1">TLNBS Advantage</span>
                                            <p className="text-sm text-emerald-100/60 line-clamp-2">
                                                {comp.TLNBSAdvantage}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex items-center justify-center text-sm font-mono text-emerald-500/60">
                                            READ_FULL_ANALYSIS
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
