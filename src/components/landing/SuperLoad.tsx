import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, FileCheck, Truck, BadgeCheck, Headphones } from "lucide-react";
import { staggerContainer, fadeUp, fadeRight } from "@/lib/animations";

const SuperLoad = () => {
  return (
    <section
      id="superload"
      className="py-20 sm:py-24 md:py-32 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Decorative glow blobs */}
      <div className="absolute top-10 right-10 w-52 h-52 rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(251,191,36,0.06)" }} />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(168,85,247,0.05)" }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6" style={{ borderColor: "rgba(251,191,36,0.2)", background: "rgba(251,191,36,0.05)" }}>
                <Sparkles className="w-4 h-4 text-[var(--neon-amber)]" />
                <span className="text-[var(--neon-amber)] font-semibold text-xs sm:text-sm">Premium Feature</span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Experience the{" "}
                <span className="text-neon-gradient">Super Load</span> Advantage
              </motion.h2>

              <motion.p variants={fadeUp} className="text-sm sm:text-base lg:text-lg text-[var(--text-muted)] mb-8">
                Want a hassle-free experience? Look for the{" "}
                <span className="font-semibold text-[var(--neon-amber)]">Super</span> badge.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.15)" }}>
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-cyan)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">For Suppliers</h4>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      Hand over your logistics to Tranzfort Ops. We find the truck, track
                      the cargo, and handle the paperwork.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.15)" }}>
                    <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-amber)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">For Truckers</h4>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                      Guaranteed payments, verified loads, and priority support. Upload
                      POD and get paid faster.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Super Load Card Visual */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              {/* Background glow */}
              <div className="absolute inset-0 rounded-3xl blur-2xl transform rotate-2 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.08), rgba(168,85,247,0.06))" }} />

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -left-4 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--neon-cyan)] z-20 border"
                style={{ background: "var(--bg-elevated)", borderColor: "rgba(0,240,255,0.2)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <BadgeCheck className="w-3.5 h-3.5" />
                Verified
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-2 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-[var(--neon-amber)] z-20 border"
                style={{ background: "var(--bg-elevated)", borderColor: "rgba(251,191,36,0.2)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Headphones className="w-3.5 h-3.5" />
                24/7 Support
              </motion.div>

              <motion.div
                className="neon-card p-5 sm:p-6 md:p-8 relative"
                whileHover={{ y: -4, rotateY: 2, rotateX: -1 }}
                transition={{ duration: 0.3 }}
                style={{ transformPerspective: 1000 }}
              >
                {/* Super Badge */}
                <div className="absolute -top-3 -right-3 text-[var(--bg-primary)] px-4 py-1.5 rounded-full text-sm font-bold animate-glow-pulse" style={{ background: "linear-gradient(135deg, var(--neon-cyan), var(--neon-magenta))" }}>
                  ⚡ SUPER
                </div>

                <div className="flex items-start gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.15)" }}>
                    <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--neon-cyan)]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base sm:text-lg">Mumbai → Bangalore</h4>
                    <p className="text-[var(--text-muted)] text-sm">20 Ton Container Load</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="rounded-xl p-3 sm:p-4" style={{ background: "var(--bg-tertiary)" }}>
                    <p className="text-xs text-[var(--text-dim)] mb-1">Estimated Rate</p>
                    <p className="font-display font-bold text-white text-base sm:text-lg">₹45,000</p>
                  </div>
                  <div className="rounded-xl p-3 sm:p-4" style={{ background: "rgba(0,240,255,0.05)", border: "1px solid rgba(0,240,255,0.1)" }}>
                    <p className="text-xs text-[var(--text-dim)] mb-1">Payment</p>
                    <p className="font-display font-bold text-[var(--neon-cyan)] text-base sm:text-lg">Guaranteed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Pick up: Tomorrow</span>
                  </div>
                  <span className="text-[var(--text-dim)]">•</span>
                  <span>Full Truck Load</span>
                </div>

                <button className="w-full btn-neon py-3 rounded-xl text-sm sm:text-base">
                  Accept Super Load
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperLoad;
