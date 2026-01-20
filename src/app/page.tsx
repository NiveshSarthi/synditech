import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Modules } from "@/components/sections/Modules";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { AIAssistant } from "@/components/sections/AIAssistant";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Modules />
      <DashboardPreview />
      <AIAssistant />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
