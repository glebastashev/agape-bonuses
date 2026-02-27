'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollAnimatedDiamond() {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    // Ensure we only render the animations on the client to avoid hydration mismatches
    useEffect(() => {
        setMounted(true);
    }, []);

    // 1. Vertical Movement (Y-axis)
    // Starts visible in the absolute top right (behind the Hero image)
    const yTransform = useTransform(scrollYProgress, [0, 1], ['15vh', '85vh']);

    // 2. Horizontal Movement (X-axis)
    // Starts on the right side behind the girl image, then moves across
    const xTransform = useTransform(scrollYProgress,
        [0, 0.4, 0.7, 1],
        ['70vw', '15vw', '80vw', '45vw']
    );

    // 3. Scale/Size
    // Starts quite small (0.3) so it peeks out, and grows moderately
    const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

    // 4. Opacity
    // Always visible from the start
    const opacityTransform = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 0.4]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            <motion.div
                style={{
                    y: yTransform,
                    x: xTransform,
                    scale: scaleTransform,
                    opacity: opacityTransform,
                }}
                className="absolute w-48 h-48 rounded-3xl"
            >
                {/* Continuous idle rotation container */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full"
                >
                    {/* The visual diamond itself, based on user's screenshot */}
                    <div
                        className="w-full h-full rounded-3xl backdrop-blur-md border border-white/30"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 218, 119, 0.8) 0%, rgba(255, 140, 105, 0.8) 100%)',
                            boxShadow: '0 20px 40px rgba(255, 140, 105, 0.2), inset 2px 2px 10px rgba(255,255,255,0.6)',
                            transform: 'rotate(45deg)'
                        }}
                    >
                        {/* Inner highlight for glass effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
