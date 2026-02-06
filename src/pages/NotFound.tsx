import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Truck, BookOpen, HelpCircle } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | Tranzfort";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--void)" }}>
      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full blur-[120px] animate-float" style={{ background: "rgba(0,240,255,0.06)" }} />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full blur-[140px] animate-float-delayed" style={{ background: "rgba(168,85,247,0.05)" }} />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg grid-fade pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-lg"
      >
        {/* Animated Truck */}
        <motion.div variants={fadeUp} className="mb-8">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl border border-white/[0.08]"
            style={{ background: "rgba(0,240,255,0.05)" }}
          >
            <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--neon-cyan)]" />
          </motion.div>
        </motion.div>

        {/* 404 */}
        <motion.h1
          variants={fadeUp}
          className="text-7xl sm:text-8xl md:text-9xl font-display font-extrabold leading-none mb-2 text-neon-gradient"
        >
          404
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-4"
        >
          This route doesn't exist
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[var(--text-muted)] text-sm sm:text-base mb-10 leading-relaxed"
        >
          Looks like this load took a wrong turn. The page you're looking for
          has been moved or doesn't exist.
        </motion.p>

        {/* Actions */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            to="/"
            className="btn-neon px-6 py-3 rounded-xl text-sm sm:text-base inline-flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost px-6 py-3 rounded-xl text-sm sm:text-base inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 text-sm">
          <Link to="/blog" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors flex items-center gap-1.5">
            <BookOpen size={14} />
            Blog
          </Link>
          <Link to="/support" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors flex items-center gap-1.5">
            <HelpCircle size={14} />
            Support
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
