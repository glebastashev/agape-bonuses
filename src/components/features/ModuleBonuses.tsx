"use client";

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BonusCard } from '@/components/ui/BonusCard';
import { Flexbox } from '@lobehub/ui';
import Image from 'next/image';

const MODULE_BONUSES = [
    {
        title: "Сам себе остеопат 2.0",
        description: "Техники самопомощи для снятия напряжения и восстановления подвижности.",
        fullDescription: "Откройте для себя уникальные техники самопомощи, которые помогут снять напряжение, восстановить подвижность суставов и улучшить общее самочувствие без обращения к специалисту.\n\nЭтот курс — ваш личный инструмент для работы с телом, основанный на принципах остеопатии и адаптированный для самостоятельного применения.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/сам себе остеопат.png"
    },
    {
        title: "ОстеоРодители",
        description: "Мягкие и безопасные техники для развития ребенка с рождения до 7 лет.",
        fullDescription: "Станьте уверенным проводником в здоровом развитии своего ребёнка!\nЭтот курс предлагает проверенные, мягкие и безопасные практики, которые помогут поддержать нервную систему, опорно-двигательный аппарат и общее развитие малыша с рождения до 7 лет.\n\nВсё, что нужно знать и уметь — в простом и доступном формате для родителей и специалистов.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/родители.png"
    },
    {
        title: "ОстеоЭстетика. Сброс напряжения",
        description: "Глубокая работа с костями черепа и мышцами лица против асимметрии и морщин.",
        fullDescription: "Забудьте о постоянных посещениях косметолога и рискованных процедурах! Глубокая работа с костями черепа и мышцами. Убираем асимметрию, носогубки, брыли и синяки под глазами. Возвращаем лицу симметрию, свежий цвет и естественный молодой каркас.\n\nЛицо после — отдохнувшее, «открытое» и сияющее.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/эстетика.png"
    },
    {
        title: "Психосоматика для себя",
        description: "Инструкция по осознанному здоровью и избавлению от хронического стресса.",
        fullDescription: "Вы устали быть «в режиме автопилота»? Этот гид научит вас слышать и понимать своё тело.\n\nВы узнаете, как хронический стресс и усталость превращаются в симптомы, и как вернуть себе энергию, работая с источником проблем.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/психосом.png"
    },
    {
        title: "Висцеральные технологии",
        description: "Нормализация пищеварения и устранение застойных процессов ЖКТ.",
        fullDescription: "В обучении вы узнаете:\n\n• Как висцеральные техники помогают нормализовать пищеварение, кровообращение и снять функциональные ограничения органов.\n• Как органы брюшной полости связаны с осанкой, дыханием и подвижностью тела.\n• Какие техники позволяют устранять застойные процессы и функциональные нарушения ЖКТ.\n\nВ результате появится лёгкость организма и внутренний баланс.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/вис.PNG"
    },
    {
        title: "Краниосакральная самокоррекция",
        description: "Простые техники работы с ритмами тела для расслабления и снятия головной боли.",
        fullDescription: "Ваш личный ключ к снятию напряжения «изнутри». Простые безопасные техники работы с ритмами тела для мгновенного расслабления, снятия головной боли, тревоги и восстановления энергии.\n\nПомогайте себе где угодно — без посторонней помощи.",
        oldPrice: "9 000₽/мес",
        imageSrc: "/коробки/кранио.png"
    }
];

export function ModuleBonuses() {
    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto mb-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-12">
                    <SectionHeader
                        title="БОНУСЫ К ОТДЕЛЬНЫМ ПРОГРАММАМ"
                    />
                </div>

                <div className="relative mb-12">
                    {/* The Glass Background Layer (Z-0) */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[2rem] border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] pointer-events-none z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-[2rem]" />
                    </div>

                    {/* The Foreground Content Layer (Z-20) */}
                    <div className="relative z-20 p-8 md:p-10">
                        <p className="text-slate-600 font-medium text-lg md:text-xl lg:text-center mb-6">
                            При покупке любой из следующих программ:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                            {[
                                "Отдельные блоки курса «Специалист остеокоррекции»",
                                "Курс «Функциональная анатомия»",
                                "Курс «Специалист остеоэстетики»",
                                "Курс «Специалист психосоматики»"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/80 shadow-[0_4px_12px_rgba(31,38,135,0.03)] flex items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(31,38,135,0.08)] group"
                                >
                                    <span className="text-slate-700 font-medium text-sm md:text-base leading-snug group-hover:text-blue-600 transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <p className="text-xl md:text-[22px] font-bold text-slate-900 lg:text-center bg-slate-50/50 rounded-2xl p-6 border border-slate-100 shadow-inner">
                            🎁 Вы можете выбрать <span className="text-blue-600">ОДИН курс</span> для себя ИЛИ <span className="text-blue-600">пакет из 3-х интенсивов</span> в качестве бонуса.
                        </p>
                    </div>
                </div>

                <div id="module-courses" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
                    {MODULE_BONUSES.map((bonus, index) => (
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

                <motion.div
                    id="module-pack"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="scroll-mt-24 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] p-8 relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] z-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                    <div className="absolute top-0 right-10 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-bold py-2 px-8 rounded-b-xl uppercase text-sm shadow-lg z-20">
                        Бесплатно
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 mt-4 leading-tight">
                            ЛИБО ПАКЕТ ЛУЧШИХ ИНТЕНСИВОВ ОТ МИОТ (Забираете сразу 3)
                        </h3>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between">
                            <div className="flex-1 flex flex-col gap-4 text-slate-700">
                                <div className="flex items-start gap-4">
                                    <span className="font-bold text-blue-500">01.</span>
                                    <p><strong>«Профилактика и самопомощь при ОРВИ»</strong> (разбор работы с температурой и лечением).</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="font-bold text-blue-500">02.</span>
                                    <p><strong>«Функциональный живот»</strong> (избавление от боли в пояснице и подтяжка живота).</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="font-bold text-blue-500">03.</span>
                                    <p><strong>«Детокс Интенсив»</strong> (устранение усталости, отечности и головных болей).</p>
                                </div>
                            </div>
                            <div className="relative w-full max-w-[360px] aspect-[4/3] shrink-0 flex items-center justify-center mt-6 md:mt-0">
                                {/* ОРВИ - Left, slightly back */}
                                <div className="absolute left-0 top-[10%] w-[45%] h-[80%] z-10 -translate-x-2 -rotate-[6deg] transition-all duration-500 hover:scale-105 hover:z-40 hover:rotate-0 hover:-translate-y-2 drop-shadow-xl cursor-pointer">
                                    <Image src="/коробки/орви.png" alt="ОРВИ" fill className="object-contain" />
                                </div>

                                {/* Детокс - Right, slightly back */}
                                <div className="absolute right-0 top-[10%] w-[45%] h-[80%] z-10 translate-x-2 rotate-[6deg] transition-all duration-500 hover:scale-105 hover:z-40 hover:rotate-0 hover:-translate-y-2 drop-shadow-xl cursor-pointer">
                                    <Image src="/коробки/детокс.png" alt="Детокс" fill className="object-contain" />
                                </div>

                                {/* Живот - Center, Front */}
                                <div className="absolute left-1/2 -translate-x-1/2 top-[15%] w-[55%] h-[85%] z-20 transition-all duration-500 hover:scale-110 hover:-translate-y-4 drop-shadow-2xl cursor-pointer">
                                    <Image src="/коробки/функцживот.png" alt="Функциональный живот" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
