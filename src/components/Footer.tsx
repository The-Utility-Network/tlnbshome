import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Mission', href: '#mission' },
    { label: 'Collection', href: '#collection' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Founders', href: '#founders' },
];

const externalLinks = [
    { label: 'The Utility Company', href: 'https://www.theutilitycompany.co' },
    { label: 'The Graine Ledger', href: 'https://www.theutilitycompany.co/the-graine-ledger' },
    { label: 'Osiris Protocol', href: 'https://www.theutilitycompany.co/osiris-protocol' },
    { label: 'Adaptable', href: 'https://www.adaptable.pro' },
];

const socialLinks = [
    { label: 'Bloom (Blog)', href: 'https://medium.com/@theutilityco' },
    { label: 'Discord', href: 'https://discord.gg/A4RtzUEN7X' },
];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/Medallions/TLN_opt.png"
                                    alt="TLNBS Logo"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                />
                            </div>
                            <div>
                                <span className="text-white font-bold tracking-widest text-lg">TLNBS//I3AS</span>
                                <p className="text-[10px] font-mono text-emerald-500/60 uppercase">Botanical Automation</p>
                            </div>
                        </div>
                        <p className="text-emerald-100/30 text-sm leading-relaxed mb-6 italic">
                            Harnessing decentralized power to enable greater access to botanical automation.
                        </p>
                        <a
                            href="mailto:info@thelochnessbotanicalsociety.com"
                            className="text-emerald-500 font-mono text-xs hover:underline"
                        >
                            info@thelochnessbotanicalsociety.com
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-emerald-500/40 mb-4 uppercase">NAVIGATE</h4>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-emerald-100/40 text-sm hover:text-emerald-400 transition-colors uppercase font-mono text-[11px] tracking-wider"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-emerald-500/40 mb-4 uppercase">ECOSYSTEM</h4>
                        <ul className="space-y-2">
                            {externalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-100/40 text-xs hover:text-white transition-colors flex items-center gap-1 uppercase font-mono"
                                    >
                                        {link.label}
                                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-[10px] font-mono tracking-widest text-emerald-500/40 mt-8 mb-4 uppercase">CONNECT</h4>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-100/40 text-xs hover:text-emerald-500 transition-colors uppercase font-mono"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mission Text Instead of Team */}
                    <div>
                        <h4 className="text-[10px] font-mono tracking-widest text-emerald-500/40 mb-4 uppercase">CORE_OBJECTIVE</h4>
                        <p className="text-xs text-emerald-100/20 leading-relaxed font-mono">
                            The Perennial Waters Collection is an I3AS venture providing membership tokens that
                            offer control over grow spots in automated aquaponics operations. TLNBS is committed
                            to developing self-sustaining automated processes for global accessibility.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} The Utility Company LLC. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
