import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Companies from "@/components/companies";
import Features from "@/components/features";
import ProductProof from "@/components/product-proof";
import ResearchAcademy from "@/components/research-academy";
import MediaCoverage from "@/components/media-coverage";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden">
      <Navbar />

      {/* Sections */}
      <div className="flex flex-col gap-12 sm:gap-16 fade-in">
        <Hero />
        <Companies />
        <Features />
        <ProductProof />
        <ResearchAcademy />
        <MediaCoverage />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
