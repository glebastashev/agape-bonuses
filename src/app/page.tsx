import { HeroSection } from '@/components/features/HeroSection';
import { FullCourseBonuses } from '@/components/features/FullCourseBonuses';
import { ModuleBonuses } from '@/components/features/ModuleBonuses';
import { FooterInstruction } from '@/components/features/FooterInstruction';
import { Header } from '@/components/ui/Header';
import { MoodboardGraphics } from '@/components/ui/MoodboardGraphics';
import { ScrollAnimatedDiamond } from '@/components/ui/ScrollAnimatedDiamond';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f0f4f8] text-slate-900 flex flex-col pt-20 relative overflow-hidden">
        <ScrollAnimatedDiamond />
        {/* <MoodboardGraphics /> - Temporarily hidden per user request */}

        <div id="hero">
          <HeroSection />
        </div>
        <div id="full-course" className="scroll-mt-20">
          <FullCourseBonuses />
        </div>
        <div id="module" className="scroll-mt-20">
          <ModuleBonuses />
        </div>
        <div>
          <FooterInstruction />
        </div>
      </main>
    </>
  );
}
