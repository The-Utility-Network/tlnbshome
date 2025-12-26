'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function SatelliteProject() {
    // Simplified background - no complex state needed

    return (
        <ImageLightbox src="/artifacts/tspprocess.png" alt="The Satellite Project Process">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 group bg-[#011a0f]">

                {/* ================= BACKGROUND LAYER (Mesh Gradient) ================= */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-[#000502]"> {/* Darker base */}

                    {/* Mesh Gradient Blobs */}
                    {/* Top Left - Emerald */}
                    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-emerald-600/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />

                    {/* Top Right - Cyan */}
                    <div className="absolute top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-700/20 blur-[100px] mix-blend-screen" />

                    {/* Center/Mid - Cobalt hint for contrast */}
                    <div className="absolute top-[30%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[80px] mix-blend-overlay" />

                    {/* Bottom - Darker Hues (Overlay to darken) */}
                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent" />

                    {/* Subtle sheen/noise texture */}
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                </div>

                {/* ================= DIAGRAM CONTAINER ================= */}
                <div className="relative z-20 w-full opacity-100 pointer-events-none">
                    <div className="relative w-full">
                        {/* High-fidelity diagram treatment */}
                        <Image
                            src="/artifacts/tspprocess.png"
                            alt="The Satellite Project Process"
                            width={1984}
                            height={2144}
                            className="w-full h-auto contrast-125 saturate-125 brightness-110"
                            priority
                        />
                    </div>
                </div>

                {/* ================= OVERLAY ================= */}
                <div className="absolute inset-0 z-30 pointer-events-none rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="hidden sm:block w-full bg-emerald-950/60 backdrop-blur-md py-4 border-t border-emerald-500/30 absolute bottom-0 left-0 rounded-b-3xl">
                        <p className="text-center text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">
                            Fig 3.0: High-Density Vertical Farming Infrastructure
                        </p>
                    </div>
                </div>
            </div>
        </ImageLightbox>
    );
}
