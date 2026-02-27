import { HeroSection } from '@/components/features/HeroSection';
import { FullCourseBonuses } from '@/components/features/FullCourseBonuses';
import { ModuleBonuses } from '@/components/features/ModuleBonuses';
import { FooterInstruction } from '@/components/features/FooterInstruction';
import { Header } from '@/components/ui/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f0f4f8] text-slate-900 flex flex-col pt-24 relative overflow-hidden">
        {/* Global Moodboard Background Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-amber-300/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-fuchsia-300/15 rounded-full blur-[140px] pointer-events-none" />

        <div id="hero" className="relative z-10">
          <HeroSection />
        </div>
        <div id="full-course" className="scroll-mt-20 relative z-10">
          <FullCourseBonuses />
        </div>
        <div id="module" className="scroll-mt-20 relative z-10">
          <ModuleBonuses />
        </div>
        <div className="relative z-10">
          <FooterInstruction />
        </div>
      </main>
    </>
  );
}
