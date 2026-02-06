import { motion } from "framer-motion";
import { Factory, Truck, CheckCircle } from "lucide-react";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

const supplierFeatures = [
  "Post Loads Instantly: Access thousands of verified trucks in seconds.",
  "Best Market Rates: Negotiate directly or set fixed prices.",
  "Real-Time Tracking: Know exactly where your goods are with our Zero-Cost GPS tech.",
  "Verified Truckers: We check Aadhaar, PAN, and Driving Licenses so you don't have to.",
];

const truckerFeatures = [
  "Smart Split Search: Find loads specifically for your return route.",
  "Digital Fleet: Upload RC once, share digital truck cards instantly in chat.",
  "Direct Negotiation: Chat with suppliers and close deals without middlemen.",
  "Guaranteed Payments: Look for Super Loads for secured payouts.",
];

const featureItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const RoleCards = () => {
  return (
    <section id="suppliers" className="py-20 sm:py-24 md:py-32 relative" style={{ background: "var(--bg-primary)" }}>
      {/* Mesh decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-[120px] opacity-100 pointer-events-none" style={{ background: "rgba(0,240,255,0.04)" }} />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-[100px] opacity-100 pointer-events-none" style={{ background: "rgba(255,0,110,0.04)" }} />

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
            Who It's For
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Built for <span className="text-neon-gradient">Everyone</span> in Logistics
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Whether you're shipping goods or looking for your next haul, Tranzfort has you covered.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div id="truckers" className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Supplier Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="neon-card p-6 sm:p-8 md:p-10 group hover:!border-[rgba(0,240,255,0.25)]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.15)" }}>
              <Factory className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--neon-cyan)]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              For Suppliers & Factories
            </h3>
            <p className="text-base sm:text-lg text-[var(--neon-cyan)] font-semibold mb-6">
              Ship Smarter, Not Harder.
            </p>
            <motion.ul
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {supplierFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={featureItemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-cyan)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Trucker Card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="neon-card p-6 sm:p-8 md:p-10 group hover:!border-[rgba(255,0,110,0.25)]"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(255,0,110,0.1)", border: "1px solid rgba(255,0,110,0.15)" }}>
              <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--neon-magenta)]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              For Truckers & Fleet Owners
            </h3>
            <p className="text-base sm:text-lg text-[var(--neon-magenta)] font-semibold mb-6">
              No More Empty Return Trips.
            </p>
            <motion.ul
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {truckerFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={featureItemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-magenta)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
