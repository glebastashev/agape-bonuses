"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Send, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function FooterInstruction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
        <footer className="w-full bg-[#0f172a] text-white">
            <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center shadow-2xl"
                >
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                        <Gift className="text-white" size={32} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        КАК ЗАБРАТЬ СВОЙ БОНУС?
                    </h2>

                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
                        Выберите понравившийся бонус и назовите его вашему персональному менеджеру. При оплате обучения выбранный бонус будет автоматически добавлен в ваш личный кабинет на платформе.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-white text-slate-900 font-bold py-4 px-10 rounded-full transition-all hover:bg-slate-200 hover:scale-105 shadow-lg text-lg"
                    >
                        Написать менеджеру
                    </button>
                </motion.div>
            </section>

            <div className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Международный Институт Остеопатических Технологий. Все права защищены.</p>
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
                                className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 my-auto text-center flex flex-col items-center"
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-2 hover:bg-slate-100 rounded-full z-10"
                                >
                                    <X size={20} />
                                </button>

                                <div className="py-4">
                                    <div className="w-16 h-16 rounded-full bg-[#229ED9]/10 flex items-center justify-center mb-6 mx-auto">
                                        <Send className="text-[#229ED9] ml-1" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                        Связь с менеджером
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
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </footer>
    );
}
