import { notFound } from 'next/navigation';
import { LOCATIONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import GeometricCyberGrid from '@/components/GeometricCyberGrid';
import { getMedallionUrl } from '@/utils/medallions';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        slug: loc.slug,
    }));
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const location = LOCATIONS.find((loc) => loc.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-transparent text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <GeometricCyberGrid />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-12">
                        <Link href="/locations" className="text-sm text-emerald-500/60 hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono">
                            ← BACK_TO_NETWORK
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                ACTIVE HUB: {location.code}
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight italic">
                                {location.city}
                            </h1>
                            <p className="text-xl sm:text-2xl text-emerald-100/50 leading-relaxed font-light mb-8">
                                {location.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {location.activeSubsidiaries.map((sub, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-emerald-950/40 px-4 py-2 rounded-full border border-emerald-500/20">
                                        <div className="w-6 h-6 relative">
                                            <img src={getMedallionUrl(sub)} alt={sub} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-sm font-bold text-emerald-100/60">{sub}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Minimap / Stats Card */}
                        <div className="bg-emerald-950/30 backdrop-blur-md rounded-3xl p-8 border border-emerald-500/20 lg:mt-12">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-sm text-emerald-500/50 uppercase tracking-wider mb-1 font-mono">Region</div>
                                    <div className="text-xl font-bold">{location.region}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-emerald-500/50 uppercase tracking-wider mb-1 font-mono">Coordinates</div>
                                    <div className="text-xl font-bold font-mono">{location.coordinates.x.toFixed(2)}, {location.coordinates.y.toFixed(2)}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-emerald-500/50 uppercase tracking-wider mb-1 font-mono">Focus</div>
                                    <div className="text-xl font-bold text-emerald-400">{location.keyFocus}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-emerald-500/50 uppercase tracking-wider mb-1 font-mono">Compliance</div>
                                    <div className="text-xl font-bold text-green-500">100%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="px-6 pb-24 max-w-7xl mx-auto">
                {/* Regulatory Context */}
                <div className="mb-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 bg-emerald-500" />
                        Regulatory Landscape
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-emerald-100/70">The Challenge</h3>
                                <p className="text-lg text-emerald-100/40 leading-relaxed border-l-2 border-emerald-500/30 pl-6">
                                    {location.regulatoryContext}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-8 rounded-3xl border border-emerald-500/20">
                            <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                The Compliance Engine
                            </h3>
                            <p className="text-lg text-emerald-100/60 leading-relaxed">
                                {location.complianceNarrative}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Local Lexicon / Codex Integration */}
                <div className="mb-24">
                    <h3 className="text-sm font-bold text-emerald-500/50 uppercase tracking-wider mb-8 font-mono">
                        REGIONAL_TERMINOLOGY
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {(() => {
                            const relatedTerms = require('@/data/codex').CODEX.filter((term: any) =>
                                term.relatedLocations.includes(location.slug)
                            );

                            if (relatedTerms.length === 0) return (
                                <p className="text-emerald-500/40 text-sm">No specific regional terms defined yet.</p>
                            );

                            return relatedTerms.map((term: any) => (
                                <Link key={term.slug} href={`/codex/${term.slug}`} className="group block p-6 bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 rounded-2xl transition-all hover:bg-emerald-950/40">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-mono text-emerald-500/50 uppercase">{term.category}</span>
                                        <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 text-emerald-100/70 group-hover:text-white">{term.term}</h4>
                                    <p className="text-xs text-emerald-100/40 line-clamp-2 leading-relaxed">{term.definition}</p>
                                </Link>
                            ));
                        })()}
                    </div>
                </div>

                {/* Token Economy */}
                <div className="mb-32">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 bg-cyan-500" />
                        Local Token Economy
                    </h2>

                    <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-emerald-950/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" />
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white italic">What's being traded?</h3>
                                <p className="text-lg sm:text-xl text-emerald-100/60 leading-relaxed">
                                    {location.localTokenizationEconomy}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center hover:bg-emerald-500/20 transition-colors">
                                    <div className="text-3xl mb-2">🏙️</div>
                                    <div className="font-bold text-sm">Real Estate</div>
                                </div>
                                <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center hover:bg-emerald-500/20 transition-colors">
                                    <div className="text-3xl mb-2">🏭</div>
                                    <div className="font-bold text-sm">Industrial</div>
                                </div>
                                <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center hover:bg-emerald-500/20 transition-colors">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <div className="font-bold text-sm">Energy</div>
                                </div>
                                <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center hover:bg-emerald-500/20 transition-colors">
                                    <div className="text-3xl mb-2">🌾</div>
                                    <div className="font-bold text-sm">Commodities</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Link href="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-black rounded-full overflow-hidden font-mono">
                        <span className="relative z-10">LAUNCH_IN_{location.city.toUpperCase().replace(' ', '_')}</span>
                        <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-emerald-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
