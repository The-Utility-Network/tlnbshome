'use client';

import Navbar from '@/components/Navbar';
import LochNessHero from '@/components/LochNessHero';
import LochNessMission from '@/components/LochNessMission';
import BotanicalInfrastructure from '@/components/BotanicalInfrastructure';
import PerennialWaters from '@/components/PerennialWaters';
import ExploreSection from '@/components/ExploreSection';
import BotanicalFounders from '@/components/BotanicalFounders';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <LochNessHero />
        <LochNessMission />
        <BotanicalInfrastructure />
        <PerennialWaters />
        <ExploreSection />
        <BotanicalFounders />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
