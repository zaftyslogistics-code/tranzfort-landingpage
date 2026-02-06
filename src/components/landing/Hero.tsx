import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/animations";
import warehouseImg from "@/assets/warehouse-logistics.jpg";
import fleetImg from "@/assets/fleet-highway.jpg";

const Hero = () => {
  return (
    <section
      id="download"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Dot grid overlay with radial fade */}
      <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none" />

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-[rgba(0,240,255,0.06)] blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[rgba(168,85,247,0.05)] blur-[100px] animate-float-delayed" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10 pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--neon-lime)] animate-pulse shadow-[0_0_8px_var(--neon-lime)]" />
              <span className="text-[var(--text-muted)] text-xs sm:text-sm font-medium">Now live across India</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-white leading-[1.1] mb-5"
            >
              India's Most Trusted{" "}
              <span className="text-[var(--neon-cyan)] neon-text">Logistics</span>{" "}
              Marketplace
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Connect directly with verified transporters and suppliers. Book trucks,
              find return loads, and track shipments in real-time.{" "}
              <span className="font-medium text-[var(--text-secondary)]">Zero commission, 100% transparency.</span>
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-5"
            >
              <a href="#" className="btn-ghost rounded-xl px-5 py-2.5 flex items-center gap-3 w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase tracking-wider">Get it on</div>
                  <div className="text-white font-semibold text-sm -mt-0.5">Google Play</div>
                </div>
              </a>
              <a href="#" className="btn-ghost rounded-xl px-5 py-2.5 flex items-center gap-3 w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase tracking-wider">Download on the</div>
                  <div className="text-white font-semibold text-sm -mt-0.5">App Store</div>
                </div>
              </a>
            </motion.div>

            {/* Direct APK */}
            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-3 text-xs mb-10">
              <a href="/tranzfort.apk" download className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] underline underline-offset-4 flex items-center gap-1.5 font-medium transition-colors">
                <Download size={12} />
                Direct APK (v1.1)
              </a>
              <span className="text-[var(--text-dim)]">|</span>
              <span className="text-[var(--text-dim)] flex items-center gap-1">
                <Smartphone size={11} />
                Android 10+
              </span>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8"
            >
              {[
                { value: "10K+", label: "Verified Truckers" },
                { value: "500+", label: "Cities Covered" },
                { value: "₹0", label: "Commission" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4 sm:gap-8">
                  {i > 0 && <div className="w-px h-8 bg-white/[0.08]" />}
                  <div className="text-center lg:text-left">
                    <div className="text-lg sm:text-2xl font-mono font-bold text-[var(--neon-cyan)] neon-text">{stat.value}</div>
                    <div className="text-[var(--text-dim)] text-[9px] sm:text-[11px] mt-0.5 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Bento Grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <motion.div
                  className="neon-card rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={warehouseImg} alt="Warehouse logistics" className="w-full h-36 object-cover opacity-80" />
                </motion.div>
                <motion.div
                  className="neon-card rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={fleetImg} alt="Fleet on highway" className="w-full h-36 object-cover opacity-80" />
                </motion.div>
              </div>
              <div className="pt-6">
                <motion.div
                  className="neon-card rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center"
                  whileHover={{ scale: 1.02, borderColor: "rgba(0,240,255,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl font-mono font-bold text-[var(--neon-cyan)] neon-text mb-1">₹0</div>
                  <div className="text-[var(--text-muted)] text-sm mb-4">Commission</div>
                  <div className="w-12 h-px bg-white/[0.08] mb-4" />
                  <p className="text-[var(--text-dim)] text-xs leading-relaxed">
                    No hidden fees. No broker cuts. You keep 100% of your earnings.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="neon-line-gradient w-full" />
    </section>
  );
};

export default Hero;
