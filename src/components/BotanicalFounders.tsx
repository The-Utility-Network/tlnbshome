import { botanicalData } from '@/data/botanicalData';
import Link from 'next/link';

export default function BotanicalFounders() {
    return (
        <section id="founders" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase">
                        COUNCIL_OF_INNOVATION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 italic font-black">
                        TLNBS <span className="text-emerald-500">FOUNDERS</span>
                    </h2>
                    <p className="text-emerald-100/40 mt-4 max-w-2xl mx-auto italic font-light">
                        Bringing automation to the world with a heart and a mission: automation for all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {botanicalData.founders.map((member) => (
                        <div key={member.name} className="group p-8 bg-white/5 border border-white/5 hover:border-emerald-500/30 rounded-3xl transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">{member.name}</h3>
                            <div className="text-emerald-600 font-mono text-[10px] tracking-widest mb-4 uppercase">
                                {member.role}
                            </div>
                            <p className="text-sm text-emerald-100/30 leading-relaxed font-light italic">
                                &quot;{member.bio}&quot;
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sister Companies */}
                <div className="mt-32 pt-16 border-t border-white/5">
                    <div className="text-center mb-12">
                        <span className="text-emerald-500/40 font-mono text-[10px] tracking-[0.4em] uppercase">SISTER_OPERATIONS</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
                        {[
                            { name: 'THE UTILITY COMPANY', href: 'https://theutilitycompany.co' },
                            { name: 'GRAINE LEDGER', href: 'https://thegraineledger.com' },
                            { name: 'OSIRIS PROTOCOL', href: 'https://osiris.theutilitycompany.co' },
                            { name: 'ADAPTABLE', href: 'https://www.adaptable.pro' },
                            { name: 'REQUIEM ELECTRIC', href: 'https://www.requiem-electric.com' }
                        ].map((company) => (
                            <Link key={company.name} href={company.href} target="_blank" className="text-[10px] font-mono font-bold tracking-[0.2em] text-white hover:text-emerald-500 transition-colors uppercase">
                                {company.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
