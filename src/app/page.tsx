import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import WorkflowSection from "@/components/WorkflowSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-brand-red/30">
      <Navbar />
      <Hero />
      <ClientsSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <WorkflowSection />
      <Footer />
    </main>
  );
}
