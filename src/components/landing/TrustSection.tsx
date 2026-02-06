import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Lock, Headphones } from "lucide-react";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified Network",
    description:
      "Every user undergoes strict KYC (Aadhaar, PAN, GST/DL). We ensure you deal with real people.",
    accent: "#00F0FF",
  },
  {
    icon: MapPin,
    title: "Zero-Cost GPS",
    description:
      "Smart location sharing via the app without expensive hardware trackers.",
    accent: "#A855F7",
  },
  {
    icon: Lock,
    title: "Secure Documentation",
    description:
      "Share RCs and Invoices via secure, time-limited links. Your data stays private.",
    accent: "#39FF14",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance via in-app chat, email, and phone. We're always here for you.",
    accent: "#FF006E",
  },
];

const CounterItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { ref, formatted } = useCountUp({ end, suffix, duration: 2200 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-[var(--neon-cyan)] neon-text">
        {formatted}
      </div>
      <div className="text-[var(--text-muted)] text-xs sm:text-sm mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const TrustSection = () => {
  return (
    <section id="support" className="py-20 sm:py-24 md:py-32 relative" style={{ background: "var(--bg-primary)" }}>
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs sm:text-sm font-semibold text-[var(--neon-cyan)] uppercase tracking-wider mb-3"
          >
            Why Tranzfort
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Trust & <span className="text-neon-gradient">Technology</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Built with enterprise-grade security to protect your business and data.
          </motion.p>
        </motion.div>

        {/* Animated Counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto mb-14 sm:mb-16 md:mb-20"
        >
          {[
            { end: 50, suffix: "K+", label: "Verified Users" },
            { end: 1, suffix: "M+", label: "Loads Moved" },
            { end: 500, suffix: "+", label: "Cities" },
            { end: 99.5, suffix: "%", label: "Uptime" },
          ].map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <CounterItem end={item.end} suffix={item.suffix} label={item.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {trustFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="neon-card p-6 sm:p-7 text-center group"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `${feature.accent}15`,
                  border: `1px solid ${feature.accent}25`,
                }}
              >
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: feature.accent }} />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
