"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const BONUS_TAGS = [
    { title: "Функциональная анатомия", target: "full-course" },
    { title: "Продвижения и продажи", target: "sales-bonuses" },
    { title: "Самокоррекция", target: "module-courses" },
    { title: "Родителям", target: "module-courses" },
    { title: "Красота и омоложение", target: "module-courses" },
    { title: "Психосоматика", target: "module-courses" },
    { title: "Пакет интенсивов", target: "module-pack" }
];

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-gradient-to-br from-[#6b7b90] via-[#a8b8c8] to-[#e4edf4]">
            {/* Опциональный темный оверлей для лучшей читаемости белого текста */}
            <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

            <div className="relative z-10 w-full pt-10 md:pt-20 pb-8 md:pb-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-20">
                <motion.div
                    className="flex flex-col flex-1 text-center lg:text-left text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="bg-white/20 text-white font-semibold tracking-wider uppercase text-[10px] sm:text-xs px-4 py-1.5 rounded-full mb-4 lg:mb-6 inline-block backdrop-blur-sm shadow-sm border border-white/30 self-center lg:self-start">
                        Специальное предложение
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] mb-3 lg:mb-8 tracking-tight drop-shadow-sm">
                        УСИЛЬТЕ СВОЁ ОБУЧЕНИЕ:<br />
                        <span className="text-white/90">ВЫБЕРИТЕ БОНУС ПРИ ПОКУПКЕ</span>
                    </h1>

                    <p className="text-[15px] sm:text-lg md:text-xl leading-snug sm:leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4 lg:mb-10 opacity-90 drop-shadow-sm">
                        Любой бонус дополнит и усилит выбранный вами курс, помогая достичь ещё лучших результатов в работе с пациентами и развитии вашей практики.
                    </p>

                    {/* Desktop layout: 2 rows */}
                    <div className="hidden lg:flex flex-col gap-3 mb-10 w-full max-w-2xl">
                        <div className="flex flex-wrap gap-2.5">
                            {BONUS_TAGS.slice(0, 3).map((tag, idx) => (
                                <button
                                    key={`desktop-row1-${idx}`}
                                    onClick={() => document.getElementById(tag.target)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-2.5 rounded-full text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    {tag.title}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {BONUS_TAGS.slice(3).map((tag, idx) => (
                                <button
                                    key={`desktop-row2-${idx}`}
                                    onClick={() => document.getElementById(tag.target)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-2.5 rounded-full text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    {tag.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet Photo (Inserted here to appear between text and mobile buttons) */}
                    <motion.div
                        className="w-full max-w-xl mx-auto my-4 lg:hidden relative z-10 order-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[1.5rem] bg-gradient-to-tr from-white/10 to-white/40 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden p-1.5 md:p-2">
                            <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden">
                                <Image
                                    src="/photo/Олег1292.jpg"
                                    alt="Остеопатия обучение"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile/Tablet layout: flex-wrap */}
                    <div className="flex lg:hidden flex-wrap justify-center gap-2 mb-2 max-w-2xl">
                        {BONUS_TAGS.map((tag, idx) => (
                            <button
                                key={`mobile-${idx}`}
                                onClick={() => document.getElementById(tag.target)?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-3.5 py-2 md:px-5 md:py-2.5 rounded-full text-[12px] md:text-sm shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                            >
                                {tag.title}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Desktop Photo (Hidden on mobile) */}
                <motion.div
                    className="w-full lg:w-5/12 max-w-md mx-auto hidden lg:block relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-white/10 to-white/40 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden p-2">
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                            <Image
                                src="/photo/Олег1606.jpg"
                                alt="Остеопатия обучение"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
