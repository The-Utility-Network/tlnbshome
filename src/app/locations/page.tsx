import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';
import { LOCATIONS } from '@/data/seo';

export const metadata = {
    title: 'Global Locations | The Loch Ness Botanical Society',
    description: 'Explore our global network of botanical automation hubs and agricultural innovation centers powered by I3AS technology.',
};

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-transparent text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">GLOBAL NETWORK</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-500/30 pb-2 italic">
                        Local Impact, <br /> Global Scale
                    </h1>
                    <p className="text-lg sm:text-xl text-emerald-100/40 max-w-2xl mx-auto">
                        From São Paulo's agricultural corridors to Zurich's governance centers,
                        TLNBS is embedding decentralized botanical automation into regional ecosystems.
                    </p>
                </div>

                {/* Map Section */}
                <div className="mb-24">
                    <WorldMap />
                </div>

                {/* Grid of Locations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LOCATIONS.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-950/40 transition-all duration-300 hover:-translate-y-1 block"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{loc.city}</h2>
                                <span className="text-xs font-mono text-emerald-500/50 border border-emerald-500/20 px-2 py-1 rounded">
                                    {loc.country}
                                </span>
                            </div>
                            <p className="text-emerald-100/40 text-sm mb-4 line-clamp-3">
                                {loc.description}
                            </p>
                            <div className="flex items-center text-emerald-400 text-sm font-semibold font-mono">
                                EXPLORE_HUB <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
