import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Tranzfort";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[var(--text-dim)] mb-8 text-sm">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Data Collection</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                We collect Mobile, Email, Location (for tracking), and KYC documents
                (Aadhaar/PAN/RC) to provide you with our logistics marketplace services.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Usage</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Location data is used only during active trips for shipment tracking.
                We do not track your location when you're not using the app for an active delivery.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Storage</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Documents are stored in encrypted private buckets and accessed via signed
                URLs only. Your sensitive information is protected using industry-standard
                encryption protocols.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Sharing</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                We do not sell your data. Trucker location is shared with the specific
                Supplier of the active load only. Once the delivery is complete, location
                sharing stops immediately.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base">
                For any privacy-related queries, please contact us at{" "}
                <a href="mailto:support@tranzfort.com" className="text-[var(--neon-cyan)] hover:underline">
                  support@tranzfort.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
