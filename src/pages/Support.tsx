import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Support = () => {
  useEffect(() => {
    document.title = "Support Center | Tranzfort";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Support Center</h1>
          <p className="text-[var(--text-muted)] mb-10 sm:mb-12 text-sm sm:text-base lg:text-lg">
            We're here to help you with any questions or concerns about Tranzfort.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="neon-card p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.15)" }}>
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-cyan)]" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Email Support</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">For general inquiries and support requests</p>
              <a href="mailto:support@tranzfort.com" className="text-[var(--neon-cyan)] hover:underline font-medium text-sm">support@tranzfort.com</a>
            </div>

            <div className="neon-card p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,0,110,0.1)", border: "1px solid rgba(255,0,110,0.15)" }}>
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-magenta)]" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Phone Support</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">Available Mon-Sat, 9 AM - 6 PM IST</p>
              <span className="text-white font-medium text-sm">+91-98765-XXXXX</span>
            </div>

            <div className="neon-card p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.15)" }}>
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-purple)]" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">In-App Chat</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">Get instant help through the Tranzfort app</p>
              <span className="text-[var(--text-dim)] text-sm">Available 24/7</span>
            </div>

            <div className="neon-card p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.15)" }}>
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-amber)]" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Response Time</h3>
              <p className="text-[var(--text-muted)] text-sm mb-3">We aim to respond within</p>
              <span className="text-white font-medium text-sm">24 hours</span>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { q: "How do I register as a Trucker?", a: "Download the Tranzfort app, select \"I am a Trucker\" during signup, and complete the KYC verification by uploading your Aadhaar, PAN, and Driving License." },
                { q: "What is a Super Load?", a: "Super Loads are premium verified loads with guaranteed payments. Tranzfort handles the logistics, tracking, and paperwork for these shipments." },
                { q: "Is there a commission on transactions?", a: "Tranzfort operates on a zero-commission model for regular loads. Direct transactions between suppliers and truckers are free." },
                { q: "How does GPS tracking work?", a: "Our Zero-Cost GPS feature uses smart location sharing through the app. No expensive hardware required - location is shared only during active trips." },
              ].map((faq) => (
                <div key={faq.q} className="neon-card p-5 sm:p-6">
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-[var(--text-muted)] text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Office Address */}
          <section>
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-6">Office Address</h2>
            <div className="neon-card p-5 sm:p-6 flex items-start gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.15)" }}>
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-lime)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">Tranzfort Logistics Pvt. Ltd.</h3>
                <p className="text-[var(--text-muted)] text-sm">
                  123 Business Park, Sector 5<br />
                  Gurugram, Haryana 122001<br />
                  India
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
