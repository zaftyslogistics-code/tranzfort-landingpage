import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const DownloadCTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
          {/* Mesh gradient blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full blur-[120px] animate-float" style={{ background: "rgba(0,240,255,0.08)" }} />
            <div className="absolute bottom-[10%] left-[10%] w-48 h-48 rounded-full blur-[100px] animate-float-delayed" style={{ background: "rgba(168,85,247,0.06)" }} />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[140px]" style={{ background: "rgba(255,0,110,0.04)" }} />
          </div>

          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 text-center max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Ready to Transform Your{" "}
              <span className="text-neon-gradient">Logistics</span>?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed"
            >
              Join thousands of suppliers and truckers who are already saving time
              and money with Tranzfort. Download the app and start today.
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
            >
              <a href="#" className="btn-ghost rounded-xl px-5 sm:px-6 py-3 flex items-center gap-3 w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase tracking-wider">Get it on</div>
                  <div className="text-white font-semibold text-sm sm:text-base -mt-0.5">Google Play</div>
                </div>
              </a>

              <a href="#" className="btn-ghost rounded-xl px-5 sm:px-6 py-3 flex items-center gap-3 w-full sm:w-auto justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase tracking-wider">Download on the</div>
                  <div className="text-white font-semibold text-sm sm:text-base -mt-0.5">App Store</div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2">
              <a
                href="/app-release.apk"
                download
                className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] underline underline-offset-4 flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <Download size={14} />
                Direct APK Download
              </a>
              <span className="text-[var(--text-dim)]">•</span>
              <span className="text-[var(--text-dim)] text-xs flex items-center gap-1">
                <Smartphone size={12} />
                Android 10+
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
