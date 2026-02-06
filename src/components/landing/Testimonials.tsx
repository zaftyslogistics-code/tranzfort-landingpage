import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const testimonials = [
  {
    id: 1,
    quote:
      "Tranzfort cut our empty return trips from 40% to under 10%. My fleet of 15 trucks is now profitable on every single route.",
    name: "Ramesh Yadav",
    role: "Fleet Owner, 15 Trucks",
    location: "Nagpur, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "As a supplier, finding reliable truckers used to take days. With Tranzfort, I post a load and get verified responses within minutes. The GPS tracking gives me complete peace of mind.",
    name: "Priya Mehta",
    role: "Operations Head, Mehta Textiles",
    location: "Surat, Gujarat",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Super Load changed everything for me. Guaranteed payments mean I can focus on driving instead of worrying about collections. Best platform for truckers in India.",
    name: "Suresh Kumar",
    role: "Owner-Operator",
    location: "Jaipur, Rajasthan",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "We moved from traditional brokers to Tranzfort and saved 18% on logistics costs in the first quarter. The zero-commission model is a game changer for our business.",
    name: "Anita Sharma",
    role: "Logistics Manager, FreshFarm Foods",
    location: "Delhi NCR",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
      {/* Decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(0,240,255,0.04)" }} />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(168,85,247,0.04)" }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs sm:text-sm font-semibold text-[var(--neon-cyan)] uppercase tracking-wider mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Trusted by <span className="text-neon-gradient">Thousands</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Hear from suppliers and truckers who transformed their logistics with Tranzfort.
          </motion.p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative px-0 sm:px-12 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="neon-card p-6 sm:p-8 md:p-12 text-center"
              >
                {/* Quote Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.15)" }}>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--neon-cyan)]" />
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[var(--neon-amber)] text-[var(--neon-amber)]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/[0.08]"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)]">{testimonial.role}</p>
                    <p className="text-xs text-[var(--text-dim)]">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Desktop Navigation Arrows (hidden on mobile) */}
            <button
              onClick={prev}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-14 w-10 h-10 rounded-full border border-white/[0.08] items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[rgba(0,240,255,0.3)] transition-all"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-14 w-10 h-10 rounded-full border border-white/[0.08] items-center justify-center text-[var(--text-muted)] hover:text-[var(--neon-cyan)] hover:border-[rgba(0,240,255,0.3)] transition-all"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Navigation: mobile arrows + dots */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="sm:hidden w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] active:text-[var(--neon-cyan)] transition-all"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)]"
                      : "w-2 bg-white/[0.15] hover:bg-white/[0.3]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="sm:hidden w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[var(--text-muted)] active:text-[var(--neon-cyan)] transition-all"
              style={{ background: "var(--bg-elevated)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
