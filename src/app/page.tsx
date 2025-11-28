import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-brand-red/30">
      <Navbar />
      <Hero />
      <ClientsSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <Footer />
    </main>
  );
}
