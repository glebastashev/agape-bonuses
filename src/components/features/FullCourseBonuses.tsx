"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BonusCard } from '@/components/ui/BonusCard';

const MAIN_BONUS = {
    title: "Функциональная анатомия — язык тела, которым говорит боль",
    description: "Полноценный курс, который научит вас понимать тело, а не просто запоминать названия мышц. Это ваш ключ к глубинному анализу движений, боли и дисфункций. Вы перестанете работать наугад и начнёте видеть тело как целостную систему.",
    oldPrice: "70 000₽",
    imageSrc: "/коробки/анатомия.png"
};

const ADDITIONAL_BONUSES = [
    {
        title: "Система партнерского трафикa",
        description: "Как за 1-2 месяца «забить» себя клиентами без бюджета на рекламу. Готовая рабочая связка привлечения клиентов за 0 рублей.",
        fullDescription: "Получите не общие советы, а готовую рабочую связку: где искать партнеров, как договариваться и системно привлекать доверенных клиентов за 0 рублей.\n\nМетод, который принес создателю $95 000, а ученикам — рост дохода в 2-10 раз, даже с маленькой аудиторией.",
        oldPrice: "35 000₽",
        imageSrc: "/коробки/система п.png"
    },
    {
        title: "Большой тренинг по продажам",
        description: "Убедительные продажи без страха и давления. Скрипты для звонков и переписок, алгоритмы доведения до оплаты.",
        fullDescription: "Перестаньте бояться продавать. Освойте скрипты для звонков и переписок, техники усиления уверенности и алгоритмы доведения сомневающихся клиентов до оплаты.\n\nПродавайте так легко, как будто просто даете рекомендацию.",
        oldPrice: "35 000₽",
        imageSrc: "/коробки/продажи.png"
    },
    {
        title: "ИИ для соцсетей: Генерация вирусного контента",
        description: "Автоматизируйте создание контента с помощью нейросетей. 800+ заявок за 2 недели.",
        fullDescription: "Автоматизируйте создание контента с помощью нейросетей: от продающих каруселей и презентаций до генерации картинок и сценариев для видео.\n\nГотовые шаблоны для любого текстового ИИ, которые помогли закрыть продаж на 1,6 млн рублей в остеопатии за 1 месяц.\n(работают даже с бесплатными версиями)",
        oldPrice: "35 000₽",
        imageSrc: "/коробки/ии.png"
    },
    {
        title: "Фундамент экспертного бизнеса",
        description: "Пошаговая сборка бизнеса с нуля: от позиционирования до воронки продаж. Практикум на реальных кейсах.",
        fullDescription: "Практикум, где вы на реальных кейсах (нутрициолог, телесный специалист) создадите свой продукт, контент-план и воронку.\n\nИнструкция, которая превращает вашу экспертизу в системный бизнес.",
        oldPrice: "50 000₽",
        imageSrc: "/коробки/экспертный.png"
    }
];

export function FullCourseBonuses() {
    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto mb-20 relative">
            {/* The Glass Background Layer (Z-0) */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-[2.5rem] pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-[2.5rem]" />
            </div>

            {/* The Foreground Content Layer (Z-20) - Allows the scroll diamond (Z-10) to pass underneath */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-20"
            >
                <SectionHeader
                    title="БОНУСЫ К КУРСУ «СПЕЦИАЛИСТ ОСТЕОКОРРЕКЦИИ ЗА 6 МЕСЯЦЕВ»"
                    subtitle="Выберите супер-бонус по анатомии ИЛИ один из 4-х бонусов по продажам и продвижению."
                />

                <div className="mt-16 flex flex-col items-center">
                    <div className="mb-12 w-full max-w-md">
                        <BonusCard
                            {...MAIN_BONUS}
                            isMain={true}
                        />
                    </div>

                    <div id="sales-bonuses" className="scroll-mt-24 flex items-center justify-center gap-4 my-16 opacity-60 w-full">
                        <div className="h-px bg-slate-300 w-full max-w-[200px]" />
                        <span className="font-bold text-slate-400 uppercase tracking-widest text-lg">ИЛИ</span>
                        <div className="h-px bg-slate-300 w-full max-w-[200px]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                        {ADDITIONAL_BONUSES.map((bonus, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BonusCard {...bonus} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
