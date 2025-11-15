import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ImpactSection } from './components/sections/ImpactSection';
import { VisionSection } from './components/sections/VisionSection';
import { StatsSection } from './components/sections/StatsSection';
import { TeamSection } from './components/sections/TeamSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-10 lg:pt-15">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ImpactSection />
        <VisionSection />
        <StatsSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
