import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import logo from "@/assets/logo-tranzfort.png";

const navItems = [
  { label: "For Suppliers", href: "/#suppliers" },
  { label: "For Truckers", href: "/#truckers" },
  { label: "Super Load", href: "/#superload" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/") && !href.includes("#")) {
      return location.pathname === href;
    }
    return false;
  };

  const renderNavLink = (item: { label: string; href: string }, className: string) => {
    const active = isActive(item.href);
    const activeStyle = active ? " !text-[var(--neon-cyan)]" : "";
    
    if (item.href.startsWith("/") && !item.href.includes("#")) {
      return (
        <Link to={item.href} className={className + activeStyle} onClick={() => setIsMenuOpen(false)}>
          {item.label}
          {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_6px_var(--neon-cyan)]" />}
        </Link>
      );
    }
    
    if (location.pathname === "/") {
      return (
        <a href={item.href.replace("/", "")} className={className} onClick={() => setIsMenuOpen(false)}>
          {item.label}
        </a>
      );
    }
    
    return (
      <Link to={item.href} className={className} onClick={() => handleNavClick(item.href)}>
        {item.label}
      </Link>
    );
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`mx-3 mt-3 sm:mx-4 sm:mt-4 md:mx-6 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--void)]/80 backdrop-blur-xl border border-white/[0.06] shadow-lg"
            : "bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Tranzfort Logo"
              className="h-8 sm:h-9 md:h-10 transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
            />
            <span className="font-display font-bold text-base sm:text-lg md:text-xl tracking-tight text-white">
              Tranzfort
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <span key={item.label} className="relative">
                {renderNavLink(
                  item,
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-[var(--text-muted)] hover:text-white hover:bg-white/[0.05]"
                )}
              </span>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/#download"
              className="btn-neon px-5 py-2.5 rounded-xl text-sm inline-flex items-center gap-2 animate-glow-breathe"
            >
              <Download size={15} />
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-white/[0.06]"
            >
              <nav className="flex flex-col px-3 pb-4 pt-2 gap-0.5">
                {navItems.map((item, index) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {renderNavLink(
                      item,
                      "text-[var(--text-muted)] hover:text-white hover:bg-white/[0.05] transition-all font-medium py-2.5 px-3 rounded-lg block text-sm"
                    )}
                  </motion.span>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <Link
                    to="/#download"
                    className="btn-neon px-6 py-3 rounded-xl text-sm text-center mt-2 flex items-center justify-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Download size={15} />
                    Download App
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
