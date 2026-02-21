import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Companies from "@/components/companies";

// Dynamic Imports for below-the-fold content to drastically reduce initial JS bundle size
const Steps = dynamic(() => import("@/components/steps"), { ssr: true });
const Features = dynamic(() => import("@/components/features"), { ssr: true });
const Security = dynamic(() => import("@/components/security"), { ssr: true });
const ProductProof = dynamic(() => import("@/components/product-proof"), { ssr: true });
const Rewards = dynamic(() => import("@/components/rewards"), { ssr: true });
const ResearchAcademy = dynamic(() => import("@/components/research-academy"), { ssr: true });
const MediaCoverage = dynamic(() => import("@/components/media-coverage"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Sections */}
      <div className="flex flex-col gap-12 sm:gap-16 fade-in">
        <Hero />
        <Companies />
        <Steps />
        <Features />
        <ProductProof />
        <Security />
        <Rewards />
        <ResearchAcademy />
        <MediaCoverage />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
