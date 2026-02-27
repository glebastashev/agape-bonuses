"use client";

import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import Image from 'next/image';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollTo = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

                {/* Logo and Title */}
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 flex items-center justify-center">
                        <Image
                            src="/лого.png"
                            alt="Логотип"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col text-[10px] md:text-xs font-bold text-slate-700 leading-[1.15] uppercase tracking-wide">
                        <span>Международный</span>
                        <span>Институт</span>
                        <span>Остеопатических</span>
                        <span>Технологий</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-3 font-medium text-sm">
                    <button onClick={() => scrollTo('hero')} className="flex items-center justify-center w-10 h-10 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-full transition-all text-slate-600 hover:text-[var(--color-accent)] hover:shadow" aria-label="Главная">
                        <Home size={18} />
                    </button>
                    <button onClick={() => scrollTo('full-course')} className="bg-white hover:bg-slate-50 border border-slate-200 shadow-sm px-5 py-2.5 rounded-full transition-all text-slate-600 hover:text-[var(--color-accent)] hover:shadow">Бонусы за полный курс</button>
                    <button onClick={() => scrollTo('module')} className="bg-white hover:bg-slate-50 border border-slate-200 shadow-sm px-5 py-2.5 rounded-full transition-all text-slate-600 hover:text-[var(--color-accent)] hover:shadow">Бонусы за модули</button>
                </nav>

                {/* Mobile Burger Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="p-2 -mr-2 text-[var(--color-primary)] hover:bg-slate-100 rounded-lg transition-colors lg:hidden"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4 font-medium text-slate-700">
                    <button onClick={() => scrollTo('hero')} className="text-left py-2 border-b border-slate-50">Главная</button>
                    <button onClick={() => scrollTo('full-course')} className="text-left py-2 border-b border-slate-50">Бонусы за полный курс</button>
                    <button onClick={() => scrollTo('module')} className="text-left py-2">Бонусы за модули</button>
                </div>
            )}
        </header>
    );
}
