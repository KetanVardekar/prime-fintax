"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-purple-800 flex items-center justify-center shadow-lg group-hover:shadow-blue-900/40 transition-shadow">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-bold text-base leading-tight ${
                    scrolled ? "text-blue-900" : "text-white"
                  }`}
                >
                  Prime Fintax
                </div>
                <div
                  className={`text-xs leading-tight ${
                    scrolled ? "text-amber-600" : "text-amber-300"
                  }`}
                >
                  Consultancy Services
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-blue-900 text-white shadow-md"
                      : scrolled
                      ? "text-slate-700 hover:text-blue-900 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919820351901"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white btn-gold shadow-lg"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } bg-white/98 backdrop-blur-md border-t border-slate-100`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-blue-900 text-white"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-900"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+919820351901"
              className="flex items-center justify-center gap-2 mt-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white btn-gold shadow"
            >
              <Phone size={15} />
              +91 9820 351 901
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-xl px-4 py-3">
        <a
          href="tel:+919820351901"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white btn-primary shadow-lg"
        >
          <Phone size={16} />
          Call Now — +91 9820 351 901
        </a>
      </div>
    </>
  );
}
