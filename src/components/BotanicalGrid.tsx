'use client';

import { useEffect, useRef } from 'react';

export default function BotanicalGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width: number;
        let height: number;
        let particles: Particle[] = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            angle: number;
            rotationSpeed: number;
            color: string;
            veinColor: string;
            opacity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = Math.random() * 0.4 - 0.2; // Slow natural drift
                this.vy = Math.random() * 0.4 - 0.2;
                this.size = Math.random() * 18 + 10;
                this.angle = Math.random() * 360;
                this.rotationSpeed = Math.random() * 0.2 - 0.1;
                this.opacity = Math.random() * 0.15 + 0.05;

                const colors = ['#10b981', '#06b6d4', '#4ade80', '#22d3ee'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.veinColor = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Natural Autonomous Movement
                this.x += this.vx;
                this.y += this.vy;

                // Canvas Edge Wrap
                if (this.x < -100) this.x = width + 100;
                if (this.x > width + 100) this.x = -100;
                if (this.y < -100) this.y = height + 100;
                if (this.y > height + 100) this.y = -100;

                // Mouse Interaction (Subtle Magnetic Repulsion)
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let maxDistance = 250;

                if (distance < maxDistance) {
                    let force = (maxDistance - distance) / maxDistance;
                    this.x -= (dx / distance) * force * 4;
                    this.y -= (dy / distance) * force * 4;
                }

                this.angle += this.rotationSpeed;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle * Math.PI / 180);

                ctx.globalAlpha = this.opacity;

                // Detailed Poly-Art Leaf Structure
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(-this.size * 0.6, -this.size * 0.2);
                ctx.lineTo(-this.size * 0.4, this.size * 0.6);
                ctx.lineTo(0, this.size);
                ctx.lineTo(this.size * 0.4, this.size * 0.6);
                ctx.lineTo(this.size * 0.6, -this.size * 0.2);
                ctx.closePath();

                ctx.fillStyle = this.color;
                ctx.fill();

                ctx.strokeStyle = this.veinColor;
                ctx.globalAlpha = 0.3;
                ctx.lineWidth = 0.5;
                ctx.stroke();

                // Holographic Vein Details
                ctx.beginPath();
                ctx.moveTo(0, -this.size);
                ctx.lineTo(0, this.size);
                ctx.stroke();

                // Energy Orbit
                ctx.beginPath();
                ctx.arc(0, 0, this.size * 1.8, 0, Math.PI * 2);
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = 0.05;
                ctx.setLineDash([2, 8]);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.restore();
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = Math.floor((width * height) / 30000);
            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * width;
                let y = Math.random() * height;
                particles.push(new Particle(x, y));
            }
        };

        const connect = () => {
            const maxDistance = 250;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < Math.min(a + 12, particles.length); b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance / maxDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Background grid refinement
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.02)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < width; i += 80) {
                ctx.moveTo(i, 0); ctx.lineTo(i, height);
            }
            for (let j = 0; j < height; j += 80) {
                ctx.moveTo(0, j); ctx.lineTo(width, j);
            }
            ctx.stroke();

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            connect();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <canvas ref={canvasRef} className="block" />

            {/* High-Fidelity HUD Overlays */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-12 opacity-30">
                {/* Top Readouts */}
                <div className="flex justify-between items-start font-mono text-[8px] tracking-[0.4em] text-emerald-500">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-emerald-500 animate-pulse" />
                            GENETIC_MESH::OPERATIONAL
                        </div>
                        <div suppressHydrationWarning>NODE_COUNT: {(typeof window !== 'undefined' ? Math.floor((window.innerWidth * window.innerHeight) / 30000) : 0)}</div>
                        <div className="text-cyan-500">SYNC_PHASE: GOLDEN_RATIO_ALIGNED</div>
                    </div>
                    <div className="text-right space-y-2">
                        <div className="px-3 py-1 border border-emerald-500/30 bg-emerald-500/5">TLNBS_SECURE_GATEWAY_V4.0</div>
                        <div className="text-blue-400">ENCRYPTION: AES_256_BOTANICAL</div>
                    </div>
                </div>

                {/* Bottom Digital Telemetry */}
                <div className="flex justify-between items-end font-mono text-[8px] tracking-widest text-emerald-500/60">
                    <div className="max-w-xs space-y-1">
                        <div className="text-cyan-400">PROVENANCE_LOG:</div>
                        <div className="opacity-40">{'>'} SEED_ID_0x71A... verified</div>
                        <div className="opacity-40">{'>'} AUTOMATION_DAEMON_INITIALIZED</div>
                        <div className="opacity-40">{'>'} WATER_PH_LEVEL_6.2_STABLE</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/40" />
                        <div className="flex gap-4">
                            <span>LAT: 57.1497° N</span>
                            <span>LON: 4.4687° W</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scanning Laser Beam */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-20 w-full animate-[scan_8s_ease-in-out_infinite] pointer-events-none" />

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
            `}</style>
        </div>
    );
}
