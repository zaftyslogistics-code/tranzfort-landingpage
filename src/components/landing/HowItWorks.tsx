import { motion } from "framer-motion";
import { Search, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Post or Search",
    description:
      "Suppliers post loads instantly. Truckers search by route, vehicle type, or use Smart Split Search for return loads.",
    accent: "var(--neon-cyan)",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Connect & Negotiate",
    description:
      "Chat directly — no middlemen, no brokers. Share digital truck cards, negotiate rates, and close deals in minutes.",
    accent: "var(--neon-purple)",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Track & Deliver",
    description:
      "Real-time GPS tracking at zero cost. Upload POD, get payments faster. Full transparency from pickup to delivery.",
    accent: "var(--neon-lime)",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg grid-fade pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 sm:mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs sm:text-sm font-semibold text-[var(--neon-cyan)] uppercase tracking-wider mb-3"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Three Steps to{" "}
            <span className="text-neon-gradient">Smarter Logistics</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
          >
            From posting a load to delivery confirmation — everything happens
            on one platform, in minutes.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 max-w-5xl mx-auto relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px neon-line-gradient" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step Number + Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: `rgba(${step.accent === 'var(--neon-cyan)' ? '0,240,255' : step.accent === 'var(--neon-purple)' ? '168,85,247' : '57,255,20'},0.1)`,
                      border: `1px solid rgba(${step.accent === 'var(--neon-cyan)' ? '0,240,255' : step.accent === 'var(--neon-purple)' ? '168,85,247' : '57,255,20'},0.2)`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 sm:w-9 sm:h-9" style={{ color: step.accent }} />
                  </motion.div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-[var(--bg-primary)] text-xs font-mono font-bold flex items-center justify-center z-20"
                    style={{ background: step.accent }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 -right-3 z-10">
                  <ArrowRight className="w-5 h-5 text-[var(--text-dim)]" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
