import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import RoleCards from "@/components/landing/RoleCards";
import SuperLoad from "@/components/landing/SuperLoad";
import TrustSection from "@/components/landing/TrustSection";
import Testimonials from "@/components/landing/Testimonials";
import DownloadCTA from "@/components/landing/DownloadCTA";
import Footer from "@/components/landing/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      <Hero />
      <HowItWorks />
      <RoleCards />
      <SuperLoad />
      <TrustSection />
      <Testimonials />
      <DownloadCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
