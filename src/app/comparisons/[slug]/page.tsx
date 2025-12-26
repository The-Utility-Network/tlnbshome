import { notFound } from 'next/navigation';
import { COMPARISONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ComparisonChart from '@/components/ComparisonChart';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return COMPARISONS.map((comp) => ({
        slug: comp.slug,
    }));
}

export default async function ComparisonPage({ params }: Props) {
    const { slug } = await params;
    const comparison = COMPARISONS.find((c) => c.slug === slug);

    if (!comparison) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-transparent text-white font-sans">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link href="/comparisons" className="text-sm text-emerald-500/60 hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono">
                        ← BACK_TO_RESOURCES
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Header & Overview */}
                    <div className="lg:col-span-2 text-center mb-8">
                        <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">ANALYSIS</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight italic">
                            TLNBS <span className="text-emerald-500/30 px-4 text-3xl sm:text-4xl align-middle font-light">&</span> {comparison.competitor}
                        </h1>
                    </div>

                    {/* Competitor Analysis Card */}
                    <div className="p-8 rounded-3xl border border-emerald-500/10 bg-emerald-950/20">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-emerald-100/60">{comparison.competitor}</h2>
                        <span className="inline-block px-3 py-1 bg-emerald-950/50 border border-emerald-500/20 rounded-full text-xs text-emerald-500/60 mb-6 uppercase tracking-wide font-mono">
                            {comparison.category} Approach
                        </span>
                        <p className="text-base sm:text-lg text-emerald-100/50 leading-relaxed min-h-[100px]">
                            {comparison.description}
                        </p>
                        <div className="mt-8 border-t border-emerald-500/20 pt-6">
                            <h4 className="text-sm font-bold text-emerald-500/50 mb-4 uppercase tracking-widest font-mono">STRUCTURAL_FLAWS</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-emerald-100/40">
                                    <span className="text-red-400 mt-1">✕</span>
                                    <span>Manual, periodic reporting (Quarterly/Annual)</span>
                                </li>
                                <li className="flex items-start gap-3 text-emerald-100/40">
                                    <span className="text-red-400 mt-1">✕</span>
                                    <span>Compliance is post-trade & reactive</span>
                                </li>
                                <li className="flex items-start gap-3 text-emerald-100/40">
                                    <span className="text-red-400 mt-1">✕</span>
                                    <span>Assets trapped in siloed databases</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* TLNBS Advantage Card */}
                    <div className="p-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">The Loch Ness Botanical Society</h2>
                        <span className="inline-block px-3 py-1 bg-emerald-500/20 rounded-full text-xs text-emerald-400 mb-6 uppercase tracking-wide font-mono">
                            I3AS Approach
                        </span>
                        <p className="text-base sm:text-lg text-white leading-relaxed min-h-[100px]">
                            {comparison.TLNBSAdvantage}
                        </p>
                        <section className="mt-8 pt-6 border-t border-emerald-500/30 relative z-10">
                            <h4 className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-widest font-mono">TLNBS_STANDARD</h4>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3 text-emerald-100/70">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Real-Time Reporting:</strong> Audit-grade data, block by block.</span>
                                </li>
                                <li className="flex items-start gap-3 text-emerald-100/70">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Automated Compliance:</strong> Rules enforced by smart contract code.</span>
                                </li>
                                <li className="flex items-start gap-3 text-emerald-100/70">
                                    <span className="text-emerald-400 mt-1">✓</span>
                                    <span><strong>Asset Fluidity:</strong> Tokenized for instant, global liquidity.</span>
                                </li>
                            </ul>
                            <ComparisonChart competitorName={comparison.competitor} />
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
