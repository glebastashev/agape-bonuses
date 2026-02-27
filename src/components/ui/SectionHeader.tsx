import { Flexbox } from '@lobehub/ui';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col mb-12 w-full mx-auto ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] max-w-4xl leading-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
