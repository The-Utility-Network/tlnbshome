import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import IndustryProcessFlow from '@/components/IndustryProcessFlow';
import { getMedallionUrl } from '@/utils/medallions';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return INDUSTRIES.map((ind) => ({
        slug: ind.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = INDUSTRIES.find((ind) => ind.slug === slug);

    if (!industry) {
        return { title: 'Industry Not Found' };
    }

    return {
        title: `${industry.title} | I3AS Botanical Automation`,
        description: industry.description,
        openGraph: {
            title: `Transforming ${industry.title} with TLNBS`,
            description: industry.automationNarrative,
            images: [getMedallionUrl(industry.subsidiaries[0])],
        }
    };
}

export default async function IndustryPage({ params }: Props) {
    const { slug } = await params;
    const industry = INDUSTRIES.find((ind) => ind.slug === slug);

    if (!industry) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `Botanical Automation in ${industry.title}`,
        description: industry.description,
        author: {
            '@type': 'Organization',
            name: 'The Loch Ness Botanical Society',
            url: 'https://thelochnessbotanicalsociety.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'The Loch Ness Botanical Society',
            logo: {
                '@type': 'ImageObject',
                url: 'https://thelochnessbotanicalsociety.com/Medallions/TLN_opt.png'
            }
        },
        datePublished: '2025-01-01',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://thelochnessbotanicalsociety.com/industries/${industry.slug}`
        }
    };

    return (
        <div className="min-h-screen bg-transparent text-white font-sans">
            <StructuredData data={jsonLd} />
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link href="/industries" className="text-sm text-emerald-500/60 hover:text-emerald-400 transition-colors flex items-center gap-2 font-mono">
                        ← BACK_TO_INDUSTRIES
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">INDUSTRY_FOCUS</span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-8 leading-tight italic">
                            {industry.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-emerald-100/50 leading-relaxed font-light">
                            {industry.description}
                        </p>
                    </div>
                </div>

                {/* The Dual Engine: Automation & Tokenization */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-colors duration-700" />
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <span className="text-cyan-400">⚙️</span> The Automation Engine
                        </h3>
                        <p className="text-emerald-100/50 text-base sm:text-lg leading-relaxed relative z-10">
                            {industry.automationNarrative}
                        </p>
                    </div>

                    <div className="p-8 sm:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors duration-700" />
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <span className="text-emerald-400">🪙</span> The Tokenization Engine
                        </h3>
                        <p className="text-emerald-100/50 text-base sm:text-lg leading-relaxed relative z-10">
                            {industry.tokenizationNarrative}
                        </p>
                    </div>
                </div>

                {/* Dynamic Process Flow */}
                <section className="mb-32">
                    <IndustryProcessFlow stages={industry.processStages} />
                </section>

                {/* Key Terminology / Codex Integration */}
                <div className="mb-32">
                    <h3 className="text-sm font-bold text-emerald-500/50 uppercase tracking-wider mb-8 font-mono">
                        INDUSTRY_LEXICON
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {(() => {
                            const relatedTerms = require('@/data/codex').CODEX.filter((term: any) =>
                                term.relatedIndustries.includes(industry.slug)
                            );

                            if (relatedTerms.length === 0) return null;

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

                {/* Compliance & Reporting Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    {/* Compliance */}
                    <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/20">
                        <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Compliance as Code
                        </h3>
                        <p className="text-lg sm:text-xl text-emerald-100/60 leading-relaxed">
                            {industry.complianceNarrative}
                        </p>
                    </div>

                    {/* Subsidiaries Sidebar */}
                    <div className="lg:col-span-1 row-span-2 p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/30">
                        <h3 className="text-sm font-bold text-emerald-500/50 uppercase tracking-wider mb-6 font-mono">POWERING_ECOSYSTEM</h3>
                        <div className="space-y-4">
                            {industry.subsidiaries.map((sub, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-emerald-500/10 p-4 rounded-xl transition-all border border-transparent hover:border-emerald-500/20">
                                    <div className="w-12 h-12 relative flex-shrink-0">
                                        <img
                                            src={getMedallionUrl(sub)}
                                            alt={sub}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <span className="font-semibold text-emerald-100/50 group-hover:text-white transition-colors">{sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reporting */}
                    <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-950/20">
                        <h3 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Real-Time Intelligence
                        </h3>
                        <p className="text-lg sm:text-xl text-emerald-100/60 leading-relaxed">
                            {industry.reportingNarrative}
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-emerald-500/10 to-transparent p-8 sm:p-12 rounded-3xl border border-emerald-500/20">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 italic">Ready to automate?</h2>
                    <p className="text-emerald-100/40 mb-8 max-w-2xl mx-auto">
                        Join the {industry.subsidiaries.length} specialized networks already transforming the {industry.title} landscape.
                    </p>
                    <Link href="/contact" className="px-8 py-4 bg-emerald-500 text-black font-black rounded-full hover:bg-emerald-400 transition-colors inline-block font-mono">
                        DEPLOY_INFRASTRUCTURE
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
}
