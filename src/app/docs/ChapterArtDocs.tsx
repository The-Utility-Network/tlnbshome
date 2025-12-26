'use client';

import { motion } from 'framer-motion';

interface ChapterArtProps {
    chapterNumber: number;
    color: string;
}

export default function ChapterArtDocs({ chapterNumber, color }: ChapterArtProps) {
    const artVariants = {
        hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    // Helper for random positions
    const randomPos = (count: number) => [...Array(count)].map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5
    }));

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={artVariants}
            className="w-full aspect-video relative flex items-center justify-center mb-12 overflow-hidden rounded-3xl group border border-white/10 shadow-2xl bg-black"
        >
            {/* Deep Atmospheric Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-10" />
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 50% 120%, ${color}, transparent 70%)` }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Main Visual Container - Full Bleed SVG */}
            <svg
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full relative z-20 mix-blend-screen"
            >
                {/* 
                   CHAPTER 1: GENESIS / DNA
                   A rotating double helix structure representing biological coding.
                */}
                {chapterNumber === 1 && (
                    <g>
                        {[...Array(20)].map((_, i) => (
                            <motion.g key={i} opacity="0.8">
                                <motion.circle
                                    cx={800 + Math.sin(i * 0.5) * 200}
                                    cy={200 + i * 35}
                                    r={8}
                                    fill={color}
                                    animate={{
                                        cx: [800 + Math.sin(i * 0.5) * 200, 800 - Math.sin(i * 0.5) * 200, 800 + Math.sin(i * 0.5) * 200],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                />
                                <motion.circle
                                    cx={800 - Math.sin(i * 0.5) * 200}
                                    cy={200 + i * 35}
                                    r={8}
                                    fill={color}
                                    animate={{
                                        cx: [800 - Math.sin(i * 0.5) * 200, 800 + Math.sin(i * 0.5) * 200, 800 - Math.sin(i * 0.5) * 200],
                                        opacity: [1, 0.4, 1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                />
                                <motion.line
                                    x1={800 + Math.sin(i * 0.5) * 200} y1={200 + i * 35}
                                    x2={800 - Math.sin(i * 0.5) * 200} y2={200 + i * 35}
                                    stroke={color} strokeWidth="2" strokeOpacity="0.3"
                                    animate={{
                                        x1: [800 + Math.sin(i * 0.5) * 200, 800 - Math.sin(i * 0.5) * 200, 800 + Math.sin(i * 0.5) * 200],
                                        x2: [800 - Math.sin(i * 0.5) * 200, 800 + Math.sin(i * 0.5) * 200, 800 - Math.sin(i * 0.5) * 200]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                />
                            </motion.g>
                        ))}
                    </g>
                )}

                {/* 
                   CHAPTER 2: FUNDAMENTALS / AQUAPONIC FLUIDS
                   Rising bubbles and fluid wave simulations.
                */}
                {chapterNumber === 2 && (
                    <g>
                        {[...Array(5)].map((_, i) => (
                            <motion.path
                                key={i}
                                fill="none"
                                stroke={color}
                                strokeWidth="2"
                                d={`M -200 ${600 + i * 50} Q 400 ${500 + i * 100} 800 ${600 + i * 50} T 1800 ${600 + i * 50}`}
                                animate={{
                                    d: [
                                        `M -200 ${600 + i * 50} Q 400 ${500 - 100 + i * 100} 800 ${600 + i * 50} T 1800 ${600 + i * 50}`,
                                        `M -200 ${600 + i * 50} Q 400 ${500 + 100 + i * 100} 800 ${600 + i * 50} T 1800 ${600 + i * 50}`,
                                        `M -200 ${600 + i * 50} Q 400 ${500 - 100 + i * 100} 800 ${600 + i * 50} T 1800 ${600 + i * 50}`
                                    ]
                                }}
                                transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                                opacity="0.4"
                            />
                        ))}
                        {[...Array(30)].map((_, i) => {
                            const x = Math.random() * 1600;
                            return (
                                <motion.circle
                                    key={`bubble-${i}`}
                                    cx={x}
                                    cy={950}
                                    r={Math.random() * 5 + 2}
                                    fill={color}
                                    initial={{ cy: 950, opacity: 0 }}
                                    animate={{
                                        cy: -50,
                                        opacity: [0, 0.8, 0],
                                        cx: x + (Math.random() - 0.5) * 100
                                    }}
                                    transition={{
                                        duration: 5 + Math.random() * 10,
                                        repeat: Infinity,
                                        delay: Math.random() * 5,
                                        ease: "linear"
                                    }}
                                />
                            );
                        })}
                    </g>
                )}

                {/* 
                   CHAPTER 3: I3AS MODEL / DISTRIBUTED NODES
                   A 3D grid of connected nodes appearing and disappearing (The Satellite Project).
                */}
                {chapterNumber === 3 && (
                    <g>
                        <perspective-origin cx="800" cy="450" />
                        {/* Grid Floor */}
                        {[...Array(12)].map((_, i) => (
                            <motion.line
                                key={`h-${i}`}
                                x1="200" y1={200 + i * 50} x2="1400" y2={200 + i * 50}
                                stroke={color} strokeWidth="1" opacity="0.2"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                            />
                        ))}
                        {[...Array(24)].map((_, i) => (
                            <motion.line
                                key={`v-${i}`}
                                x1={200 + i * 50} y1="200" x2={200 + i * 50} y2="800"
                                stroke={color} strokeWidth="1" opacity="0.2"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                            />
                        ))}
                        {/* Active Nodes */}
                        {[...Array(15)].map((_, i) => (
                            <motion.g key={i}>
                                <motion.rect
                                    width="40" height="40"
                                    x={Math.floor(Math.random() * 20) * 50 + 205}
                                    y={Math.floor(Math.random() * 10) * 50 + 205}
                                    fill={color} fillOpacity="0.1"
                                    stroke={color} strokeWidth="2"
                                    animate={{
                                        opacity: [0, 1, 0, 1, 0],
                                        scale: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: Math.random() * 5,
                                        times: [0, 0.1, 0.4, 0.6, 1]
                                    }}
                                />
                            </motion.g>
                        ))}
                    </g>
                )}

                {/* 
                   CHAPTER 4: COLLECTIONS / DISTILLATION
                   Concentric rings pulsing like drops in water or looking down a barrel.
                */}
                {chapterNumber === 4 && (
                    <g>
                        {[...Array(10)].map((_, i) => (
                            <motion.circle
                                key={i}
                                cx="800" cy="450"
                                r={50 + i * 40}
                                fill="none"
                                stroke={color}
                                strokeWidth={Math.random() > 0.5 ? 4 : 1}
                                strokeDasharray={Math.random() > 0.5 ? "20 20" : "0 0"}
                                opacity="0.6"
                                animate={{
                                    rotate: i % 2 === 0 ? 360 : -360,
                                    scale: [1, 1.05, 1],
                                    strokeOpacity: [0.3, 0.8, 0.3]
                                }}
                                transition={{
                                    rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    strokeOpacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        ))}
                        <circle cx="800" cy="450" r="20" fill={color} className="animate-pulse" />
                    </g>
                )}

                {/* 
                   CHAPTER 5: PARTICIPATION / THE NETWORK
                   A complex web of interconnected people/nodes.
                */}
                {chapterNumber === 5 && (
                    <g>
                        {/* Central Hub */}
                        <motion.circle cx="800" cy="450" r="60" stroke={color} strokeWidth="4" fill="none" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} />
                        <motion.circle cx="800" cy="450" r="30" fill={color} opacity="0.5" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />

                        {/* Orbital Satellites */}
                        {[...Array(8)].map((_, i) => (
                            <motion.g key={i}>
                                <motion.circle
                                    cx="800" cy="450" r="4" fill={color}
                                    animate={{
                                        rotate: 360
                                    }}
                                    style={{
                                        originX: "0px", originY: "0px",
                                        translateX: 200 + i * 30
                                    }}
                                    transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d={`M 800 450 L ${800 + 200 + i * 30} 450`}
                                    stroke={color} strokeWidth="1" strokeDasharray="4 4"
                                    opacity="0.2"
                                    animate={{ rotate: 360 }}
                                    style={{ originX: "800px", originY: "450px" }}
                                    transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.g>
                        ))}
                    </g>
                )}

            </svg>

            {/* Cinematic Scanlines & Grain */}
            <div className="absolute inset-0 z-30 pointer-events-none opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
            <motion.div
                className="absolute inset-0 z-40 pointer-events-none mix-blend-soft-light"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)', height: '10%' }}
                animate={{ top: ['-100%', '200%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Tech Corners */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: color }} />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: color }} />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: color }} />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: color }} />
        </motion.div>
    );
}
