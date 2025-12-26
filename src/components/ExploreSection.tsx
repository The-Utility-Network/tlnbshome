'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const exploreLinks = [
    {
        title: 'LOCATIONS',
        href: '/locations',
        description: 'Explore our global network of botanical automation hubs.',
        icon: (
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        count: '16',
        label: 'HUBS',
    },
    {
        title: 'INDUSTRIES',
        href: '/industries',
        description: 'See how I3AS transforms economic sectors.',
        icon: (
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        count: '8',
        label: 'VERTICALS',
    },
    {
        title: 'RESOURCES',
        href: '/comparisons',
        description: 'Discover how TLNBS compares to legacy systems.',
        icon: (
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        count: '16',
        label: 'ANALYSES',
    },
];

export default function ExploreSection() {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase">
                        KNOWLEDGE_BASE
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 italic">
                        EXPLORE <span className="text-emerald-500">TLNBS</span>
                    </h2>
                    <p className="text-emerald-100/40 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
                        Dive deeper into our global infrastructure, industry transformations, and technological advantages.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {exploreLinks.map((link, idx) => (
                        <motion.div
                            key={link.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="group block p-8 bg-emerald-950/20 border border-emerald-500/10 hover:border-emerald-500/40 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-950/40"
                            >
                                {/* Icon & Count */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">{link.icon}</div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-emerald-400">{link.count}</div>
                                        <div className="text-[9px] font-mono text-emerald-500/50 tracking-wider">{link.label}</div>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-wider">
                                    {link.title}
                                </h3>
                                <p className="text-sm text-emerald-100/40 mb-6 leading-relaxed">
                                    {link.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-emerald-400 text-sm font-mono">
                                    EXPLORE_NOW
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
