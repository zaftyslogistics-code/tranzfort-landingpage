import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, Phone, Clock } from "lucide-react";

const GrievanceOfficer = () => {
  useEffect(() => {
    document.title = "Grievance Officer | Tranzfort";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Grievance Officer</h1>
          <p className="text-[var(--text-muted)] mb-8 text-sm sm:text-base lg:text-lg">
            In accordance with the Information Technology Act, 2000 and rules made thereunder, 
            we have appointed a Grievance Officer to address your concerns.
          </p>

          {/* Grievance Officer Details */}
          <div className="neon-card p-6 sm:p-8 mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-6">
              Grievance Officer Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[var(--text-dim)] mb-1">Name</p>
                <p className="font-semibold text-white text-sm sm:text-base">Mr. Rajesh Kumar</p>
              </div>
              
              <div>
                <p className="text-xs text-[var(--text-dim)] mb-1">Designation</p>
                <p className="font-semibold text-white text-sm sm:text-base">Chief Compliance Officer</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-cyan)]" />
                <a href="mailto:grievance@tranzfort.com" className="text-[var(--neon-cyan)] hover:underline font-medium text-sm">grievance@tranzfort.com</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-cyan)]" />
                <span className="text-white text-sm">+91-98765-XXXXX</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-cyan)]" />
                <span className="text-white text-sm">Monday to Saturday, 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Process */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-white mb-6">
              Grievance Redressal Process
            </h2>
            
            <div className="space-y-5 sm:space-y-6">
              {[
                { n: "1", title: "Submit Your Grievance", desc: "Email your complaint to grievance@tranzfort.com with your registered phone number and detailed description of the issue." },
                { n: "2", title: "Acknowledgment", desc: "You will receive an acknowledgment within 24 hours along with a unique ticket number for tracking." },
                { n: "3", title: "Investigation", desc: "Our team will investigate your complaint and may contact you for additional information if required." },
                { n: "4", title: "Resolution", desc: "We aim to resolve all grievances within 15 working days. You will be notified of the resolution via email." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono font-bold flex-shrink-0 text-sm text-[var(--neon-cyan)]" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.2)" }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{step.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Note */}
          <div className="neon-card p-5 sm:p-6" style={{ borderColor: "rgba(251,191,36,0.15)" }}>
            <h3 className="font-semibold text-[var(--neon-amber)] mb-2 text-sm sm:text-base">Important Note</h3>
            <p className="text-[var(--text-muted)] text-sm">
              For urgent matters related to ongoing shipments, please use the in-app 
              support chat or call our 24/7 helpline for immediate assistance. The 
              Grievance Officer handles formal complaints that require investigation 
              and resolution as per regulatory requirements.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GrievanceOfficer;
