import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Tranzfort";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-[var(--text-dim)] mb-8 text-sm">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Role Usage</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Users must accurately select their role (Supplier/Trucker). Misrepresentation
                of your role may result in account suspension or termination.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Verification</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Tranzfort reserves the right to ban users with forged documents. All KYC
                documents submitted must be genuine and valid. We conduct thorough verification
                of Aadhaar, PAN, and Driving Licenses.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Payments</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Tranzfort is a marketplace. Unless a load is a "Super Load," financial
                transactions happen directly between Supplier and Trucker. Tranzfort is
                not liable for private disputes regarding payments for non-Super Loads.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Zero Tolerance Policy</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mb-4">
                Abusive language in Chat will result in an immediate ban. We expect all
                users to maintain professional conduct during all interactions on our platform.
              </p>
            </section>

            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base">
                For any questions regarding these terms, please contact us at{" "}
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

export default TermsOfService;
