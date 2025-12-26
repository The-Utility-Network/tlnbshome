'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import ChapterArtDocs from './ChapterArtDocs';
import { chapters, ChapterData, ChapterSection } from './chapters';

// Table of Contents Component
function TableOfContents({
    chapters: chapterList,
    activeChapter,
    onChapterClick
}: {
    chapters: ChapterData[],
    activeChapter: string,
    onChapterClick: (id: string) => void
}) {
    return (
        <nav className="space-y-2">
            <div className="text-[10px] font-mono tracking-[0.4em] uppercase mb-6 text-emerald-500/50">
                Documentation_Index
            </div>
            {chapterList.map((chapter) => (
                <button
                    key={chapter.id}
                    onClick={() => onChapterClick(chapter.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-500 group relative overflow-hidden ${activeChapter === chapter.id
                        ? 'bg-emerald-500/10 border-l-2'
                        : 'hover:bg-white/5'
                        }`}
                    style={{
                        borderColor: activeChapter === chapter.id ? chapter.color : 'transparent'
                    }}
                >
                    {activeChapter === chapter.id && (
                        <motion.div
                            layoutId="active-bg"
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none"
                        />
                    )}
                    <div className="flex items-baseline gap-4 relative z-10">
                        <span
                            className={`text-[10px] font-mono ${activeChapter === chapter.id ? 'opacity-100' : 'opacity-40'}`}
                            style={{ color: chapter.color }}
                        >
                            {chapter.number}
                        </span>
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${activeChapter === chapter.id ? 'text-white' : 'text-emerald-100/30 group-hover:text-emerald-100'
                            }`}>
                            {chapter.title}
                        </span>
                    </div>
                </button>
            ))}
        </nav>
    );
}

// Section Component
function Section({ section, color }: { section: ChapterSection, color: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
        >
            <h3
                className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-tight flex items-center gap-4"
                style={{ color }}
            >
                <span className="w-8 h-[1px] opacity-30" style={{ backgroundColor: color }} />
                {section.heading}
            </h3>
            <div className="prose prose-invert max-w-none">
                {section.content.split('\n\n').map((paragraph, i) => (
                    <p
                        key={i}
                        className="text-emerald-100/60 leading-relaxed mb-6 text-lg font-light"
                    >
                        {paragraph.split('**').map((part, j) => (
                            j % 2 === 1 ? <strong key={j} className="text-emerald-400 font-bold">{part}</strong> : part
                        ))}
                    </p>
                ))}
            </div>
        </motion.div>
    );
}

// Chapter Component
function Chapter({ chapter, index }: { chapter: ChapterData, index: number }) {
    return (
        <motion.section
            id={chapter.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="scroll-mt-32 mb-40"
        >
            <ChapterArtDocs chapterNumber={index + 1} color={chapter.color} />

            <div className="mb-16">
                <div
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border mb-8 bg-black/40 backdrop-blur-sm"
                    style={{ borderColor: `${chapter.color}30`, color: chapter.color }}
                >
                    <span className="font-mono text-[10px] tracking-[0.5em] uppercase">SECTION_{chapter.number}</span>
                </div>

                <h2
                    className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
                    style={{
                        background: `linear-gradient(135deg, ${chapter.color}, white)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    {chapter.title}
                </h2>

                <p className="text-xl text-emerald-100/40 font-light italic border-l-2 pl-6" style={{ borderColor: `${chapter.color}40` }}>
                    {chapter.subtitle}
                </p>
            </div>

            {chapter.sections.map((section, i) => (
                <Section key={i} section={section} color={chapter.color} />
            ))}

            <blockquote
                className="my-20 py-12 px-12 border-l-4 relative bg-emerald-950/10 rounded-r-3xl"
                style={{ borderColor: chapter.color }}
            >
                <div
                    className="absolute left-4 top-2 text-7xl leading-none font-serif select-none opacity-10"
                    style={{ color: chapter.color }}
                >
                    &ldquo;
                </div>
                <p
                    className="text-2xl font-light italic leading-relaxed relative z-10 pl-8"
                    style={{ color: chapter.color }}
                >
                    {chapter.pullQuote}
                </p>
            </blockquote>

            {index < chapters.length - 1 && (
                <div className="flex items-center justify-center gap-6 py-24 opacity-20">
                    <div className="w-16 h-[1px]" style={{ backgroundColor: colorToRgba(chapter.color, 0.3) }} />
                    <div className="w-2 h-2 rounded-full rotate-45 border" style={{ borderColor: chapter.color }} />
                    <div className="w-16 h-[1px]" style={{ backgroundColor: colorToRgba(chapters[index + 1].color, 0.3) }} />
                </div>
            )}
        </motion.section>
    );
}

function colorToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function DocsPage() {
    const [activeChapter, setActiveChapter] = useState(chapters[0].id);
    const [showToc, setShowToc] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start start", "end end"]
    });

    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const currentChapter = chapters.find(c => c.id === activeChapter) || chapters[0];
    const currentColor = currentChapter.color;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveChapter(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        chapters.forEach((chapter) => {
            const element = document.getElementById(chapter.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToChapter = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShowToc(false);
        }
    };

    return (
        <main
            ref={mainRef}
            className="bg-[#000502] text-white min-h-screen relative selection:bg-emerald-500/30 selection:text-emerald-400"
        >
            <Navbar themeColor={currentColor} />
            <BackButton color={currentColor} />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 z-[100]"
                style={{
                    width: progressWidth,
                    backgroundColor: currentColor,
                    boxShadow: `0 0 20px ${colorToRgba(currentColor, 0.5)}`
                }}
            />

            {/* Mobile Index Toggle */}
            <button
                onClick={() => setShowToc(!showToc)}
                className="fixed bottom-8 right-8 z-[60] lg:hidden w-14 h-14 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/10"
                style={{ backgroundColor: colorToRgba(currentColor, 0.2) }}
            >
                <div className="w-6 h-6 flex flex-col justify-between p-1">
                    <div className="w-full h-0.5 bg-white rounded-full" />
                    <div className="w-full h-0.5 bg-white rounded-full" />
                    <div className="w-1/2 h-0.5 bg-white rounded-full" />
                </div>
            </button>

            {/* Mobile TOC Drawer */}
            <AnimatePresence>
                {showToc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] lg:hidden"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowToc(false)} />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 h-full w-80 bg-[#000502] border-l border-emerald-500/10 p-8 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h3 className="text-xs font-mono tracking-widest text-emerald-500">INDEX</h3>
                                <button onClick={() => setShowToc(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                    <svg className="w-5 h-5 text-emerald-100/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <TableOfContents
                                chapters={chapters}
                                activeChapter={activeChapter}
                                onChapterClick={scrollToChapter}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Header */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-emerald-500/10">
                {/* Background holographic effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.1),transparent_70%)]" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border text-[10px] font-mono tracking-[0.6em] uppercase mb-12 bg-black/40 backdrop-blur-xl"
                            style={{ borderColor: `${currentColor}30`, color: currentColor }}
                        >
                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                            Society_Fundamentals_Archive
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                    >
                        THE
                        <br />
                        <span
                            className="italic"
                            style={{
                                background: `linear-gradient(135deg, ${chapters[0].color}, ${chapters[2].color}, ${chapters[4].color})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            FOUNDATIONS
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-xl md:text-2xl text-emerald-100/40 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
                    >
                        Deep-dive into the technical, biological, and decentralized architecture
                        of the world&apos;s first NFT-mediated botanical automation society.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            onClick={() => scrollToChapter(chapters[0].id)}
                            className="px-12 py-5 rounded-full font-bold text-black group relative overflow-hidden transition-all duration-500 hover:scale-105"
                            style={{
                                backgroundColor: currentColor,
                                boxShadow: `0 0 50px ${colorToRgba(currentColor, 0.4)}`
                            }}
                        >
                            <span className="relative z-10 uppercase tracking-widest text-xs">Initialize_Reading</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6 py-32 relative">
                <div className="flex gap-20 items-start">
                    {/* Sticky Sidebar - Desktop */}
                    <aside className="hidden lg:block w-72 shrink-0 sticky top-32">
                        <div className="max-h-[calc(100vh-10rem)] overflow-y-auto pr-6 custom-scrollbar">
                            <TableOfContents
                                chapters={chapters}
                                activeChapter={activeChapter}
                                onChapterClick={scrollToChapter}
                            />

                            {/* Status Card */}
                            <motion.div
                                className="mt-12 p-6 rounded-2xl border bg-black/40 backdrop-blur-xl"
                                style={{ borderColor: `${currentColor}20` }}
                                animate={{ borderColor: [`${currentColor}10`, `${currentColor}30`, `${currentColor}10`] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="text-[9px] font-mono text-emerald-500/40 mb-3 tracking-widest">SYSTEM_STATUS</div>
                                <div className="text-sm font-bold tracking-wide transition-colors duration-500" style={{ color: currentColor }}>
                                    {currentChapter.title}
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-mono text-emerald-100/20">ACCESS_VERIFIED</span>
                                </div>
                            </motion.div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article className="flex-1 max-w-3xl lg:border-l border-emerald-500/5 lg:pl-20">
                        {/* Chapters */}
                        {chapters.map((chapter, index) => (
                            <Chapter key={chapter.id} chapter={chapter} index={index} />
                        ))}

                        {/* Colophon */}
                        <motion.section
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-40 pt-20 border-t border-emerald-500/10 text-center"
                        >
                            <div
                                className="w-16 h-16 mx-auto mb-10 rounded-2xl flex items-center justify-center rotate-45 border"
                                style={{
                                    borderColor: `${currentColor}30`,
                                    background: `linear-gradient(135deg, ${colorToRgba(currentColor, 0.1)}, transparent)`
                                }}
                            >
                                <div className="-rotate-45 font-black text-xl" style={{ color: currentColor }}>
                                    LN
                                </div>
                            </div>
                            <p className="text-emerald-500/40 text-[10px] font-mono mb-6 tracking-[0.4em] uppercase">
                                Archive_Completion
                            </p>
                            <h3 className="text-4xl font-bold mb-8 tracking-tighter">Growth Beyond Bounds</h3>
                            <p className="text-emerald-100/40 max-w-md mx-auto leading-relaxed mb-12 text-sm font-light">
                                This documentation is a living archive of the society&apos;s technological
                                and biological evolution. Participation is open to all who align
                                with the vision of decentralized abundance.
                            </p>
                            <a
                                href="/"
                                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border transition-all duration-500 hover:bg-emerald-500/5 group text-sm font-bold tracking-widest uppercase"
                                style={{ borderColor: `${currentColor}30`, color: currentColor }}
                            >
                                <span>Home_Return</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.section>
                    </article>
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(16, 185, 129, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(16, 185, 129, 0.3);
                }
            `}</style>
        </main>
    );
}
