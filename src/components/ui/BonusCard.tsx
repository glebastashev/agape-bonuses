"use client";

import Image from 'next/image';
import { CheckCircle2, X, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface BonusCardProps {
    title: string;
    description: string;
    fullDescription?: string;
    oldPrice: string;
    isMain?: boolean;
    imageSrc?: string;
}

export function BonusCard({ title, description, fullDescription, oldPrice, isMain = false, imageSrc }: BonusCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContactView, setIsContactView] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isModalOpen) {
            // Reset view shortly after close animation
            setTimeout(() => setIsContactView(false), 300);
        }
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <>
            <div className={`relative flex flex-col h-full rounded-[2rem] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.1)] group ${isMain ? 'ring-2 ring-slate-400/50' : 'hover:border-white/80'}`}>
                {/* 1. The Glass Background Layer (Z-0) */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2rem] pointer-events-none group-hover:bg-white/50 transition-colors duration-500 z-0 overflow-hidden" />

                {/* 2. The Foreground Content Layer (Z-20) */}
                <div className="relative z-20 flex flex-col h-full">
                    {isMain && (
                        <div className="absolute top-4 right-4 z-30 bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                            Главный бонус
                        </div>
                    )}

                    {imageSrc && (
                        <div className="relative w-full aspect-square p-2 shrink-0 transition-transform duration-500 hover:scale-105 z-10">
                            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl pointer-events-none" />
                            <Image src={imageSrc} alt={title} fill className="object-contain drop-shadow-2xl relative z-10 p-4" />
                        </div>
                    )}

                    <div className="flex flex-col flex-grow p-6 gap-4 text-center items-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                            <CheckCircle2 className={`${isMain ? 'text-slate-800' : 'text-blue-500'} shrink-0`} size={32} />
                            <h3 className={`font-bold text-slate-800 ${isMain ? 'text-xl' : 'text-lg'}`}>
                                {title}
                            </h3>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                            {description}
                        </p>

                        {fullDescription && (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-600/30 underline-offset-4"
                            >
                                Подробнее
                            </button>
                        )}

                        <div className="flex w-full items-center justify-between pt-4 border-t border-slate-200/50 mt-auto">
                            <span className="text-slate-400 line-through text-sm font-medium">{oldPrice}</span>
                            <span className="text-emerald-600 font-bold text-xl">Бесплатно</span>
                        </div>
                    </div>
                </div>
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[100] flex justify-center p-4 overflow-y-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsModalOpen(false)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 my-auto"
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-full z-10"
                                >
                                    <X size={20} />
                                </button>

                                {!isContactView ? (
                                    <>
                                        <div className="flex items-center gap-3 mb-6 pr-8">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="text-blue-500" size={20} />
                                            </div>
                                            <h3 className="font-bold text-xl text-slate-800 leading-tight">
                                                {title}
                                            </h3>
                                        </div>

                                        <div className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                                            {fullDescription}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-slate-200/50 flex justify-end">
                                            <button
                                                onClick={() => setIsContactView(true)}
                                                className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                Выбрать бонус
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="py-4 text-center flex flex-col items-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#229ED9]/10 flex items-center justify-center mb-6">
                                            <Send className="text-[#229ED9] ml-1" size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                            Отличный выбор!
                                        </h3>
                                        <p className="text-lg text-slate-600 mb-8 max-w-sm mx-auto">
                                            Напишите персональному менеджеру о вашем выборе.
                                        </p>
                                        <a
                                            href="https://t.me/TatyBondar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#229ED9] hover:bg-[#1C82B3] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                                        >
                                            <Send size={20} className="w-5 h-5" />
                                            Менеджер Татьяна
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
