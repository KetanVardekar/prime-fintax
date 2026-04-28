"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #d97706 0%, #f59e0b 30%, #7c3aed 70%, #1e3a8a 100%)",
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
          <Sparkles size={14} />
          Limited Time — Free Consultation Offer
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to Simplify Your{" "}
          <span className="text-yellow-200">Finances?</span>
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Contact us today and take the first step towards stress-free compliance,
          maximum tax savings, and financial clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-900 font-bold text-base shadow-2xl hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300"
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </button>
          <a
            href="tel:+919820351901"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Call +91 9820 351 901
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
          {["✓ Free Consultation", "✓ No Hidden Fees", "✓ Expert Professionals", "✓ Fast Turnaround"].map((item) => (
            <span key={item} className="font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
