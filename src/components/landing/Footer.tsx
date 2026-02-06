import { Linkedin, Twitter, Facebook, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo-tranzfort.png";

const Footer = () => {
  return (
    <footer className="text-white pt-16 sm:pt-20 pb-8 sm:pb-10 relative" style={{ background: "var(--void)" }}>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Newsletter Row */}
        <div className="neon-card p-5 sm:p-6 md:p-8 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1">Stay in the loop</h3>
              <p className="text-[var(--text-muted)] text-sm">Get logistics insights and Tranzfort updates. No spam.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-xl text-white placeholder:text-[var(--text-dim)] text-sm focus:outline-none transition-colors"
                style={{ background: "var(--bg-tertiary)", border: "1px solid rgba(255,255,255,0.08)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,240,255,0.3)"; e.currentTarget.style.boxShadow = "0 0 15px rgba(0,240,255,0.08)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
              />
              <button
                type="submit"
                className="btn-neon px-5 py-2.5 rounded-xl text-sm flex items-center gap-2"
              >
                <Send size={14} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-14">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Tranzfort Logo"
                className="h-8 sm:h-10 brightness-0 invert"
              />
              <span className="font-display font-bold text-lg sm:text-xl">Tranzfort</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
              India's most trusted logistics marketplace. Connecting suppliers and truckers with zero commission.
            </p>
            {/* App Store Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <a href="#" className="rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/[0.08] hover:border-[rgba(0,240,255,0.2)] transition-colors" style={{ background: "var(--bg-tertiary)" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <span className="text-white text-xs font-medium">Google Play</span>
              </a>
              <a href="#" className="rounded-lg px-3 py-1.5 flex items-center gap-2 border border-white/[0.08] hover:border-[rgba(0,240,255,0.2)] transition-colors" style={{ background: "var(--bg-tertiary)" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-white text-xs font-medium">App Store</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Home</Link></li>
              <li><a href="/#suppliers" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">For Suppliers</a></li>
              <li><a href="/#truckers" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">For Truckers</a></li>
              <li><Link to="/blog" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/support" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:support@tranzfort.com" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors text-sm">support@tranzfort.com</a></li>
              <li><span className="text-[var(--text-muted)] text-sm">+91-98765-XXXXX</span></li>
              <li><span className="text-[var(--text-muted)] text-sm">Mon-Sat, 9 AM - 6 PM IST</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to="/privacy-policy" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/grievance-officer" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Grievance Officer</Link></li>
            </ul>
          </div>
        </div>

        {/* Neon gradient divider */}
        <div className="neon-line-gradient w-full mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-dim)] text-xs sm:text-sm">
            © 2026 Tranzfort Logistics Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", hoverColor: "rgba(0,240,255,0.15)" },
              { icon: Twitter, label: "Twitter", hoverColor: "rgba(168,85,247,0.15)" },
              { icon: Facebook, label: "Facebook", hoverColor: "rgba(255,0,110,0.15)" },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-[rgba(0,240,255,0.2)] transition-colors flex items-center justify-center text-[var(--text-muted)] hover:text-white"
                style={{ background: "var(--bg-tertiary)" }}
                aria-label={label}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
