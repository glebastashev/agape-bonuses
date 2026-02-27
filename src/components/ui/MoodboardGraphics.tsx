'use client';

import { motion } from 'framer-motion';

export function MoodboardGraphics() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Soft Ambient Orbs (These enhance the background gradients) */}
            <div className="absolute top-[-5%] left-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-gradient-to-tr from-blue-500/30 to-rose-300/30 rounded-full blur-[120px]" />
            <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tl from-orange-400/25 to-amber-200/30 rounded-full blur-[140px]" />

            {/* Floating 3D "Liquid" Sphere (Top Right) */}
            <motion.div
                initial={{ y: 0, rotate: 0 }}
                animate={{
                    y: [-20, 20, -20],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(255, 185, 210, 0.6) 40%, rgba(86, 123, 255, 0.8) 80%, rgba(20, 50, 150, 0.9) 100%)',
                    boxShadow: 'inset -15px -15px 30px rgba(0,0,0,0.1), inset 15px 15px 30px rgba(255,255,255,0.8), 0 20px 40px rgba(86, 123, 255, 0.3)'
                }}
            />

            {/* Glowing "Sun" Orb (Middle Left) */}
            <motion.div
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[45%] left-[5%] w-80 h-80 rounded-full blur-md"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 140, 105, 0.9), rgba(255, 234, 167, 0.6) 50%, transparent 80%)',
                    boxShadow: '0 0 80px rgba(255, 140, 105, 0.5)'
                }}
            />

            {/* Frosted Glass Geometric Prism (Bottom Right) */}
            <motion.div
                initial={{ y: 0, rotate: -15 }}
                animate={{
                    y: [0, -30, 0],
                    rotate: [-15, -5, -15]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[20%] right-[5%] w-56 h-72 rounded-3xl backdrop-blur-xl border border-white/40"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
                    boxShadow: '0 30px 60px rgba(31,38,135,0.15), inset 2px 2px 10px rgba(255,255,255,0.8), inset -2px -2px 15px rgba(255,255,255,0.1)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                }}
            >
                {/* Inner reflection detail */}
                <div className="absolute top-4 left-4 right-4 h-1/2 rounded-2xl bg-gradient-to-b from-white/30 to-transparent blur-sm" />
            </motion.div>

            {/* Small Floating Accent Elements */}
            <motion.div
                animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[25%] left-[25%] w-12 h-12 rounded-full"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, #FFB9D2, #FF8C69)',
                    boxShadow: '0 10px 20px rgba(255, 140, 105, 0.3)'
                }}
            />
            <motion.div
                animate={{ y: [15, -15, 15], x: [5, -5, 5], rotate: [0, 45, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] left-[35%] w-16 h-16 rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, #FFEAA7, #FF8C69)',
                    boxShadow: '0 10px 20px rgba(255, 140, 105, 0.2)'
                }}
            />
        </div>
    );
}
