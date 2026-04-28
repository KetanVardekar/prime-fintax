"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Award, PhoneCall } from "lucide-react";

const trustItems = [
  "Experienced Tax Professionals",
  "Transparent Pricing",
  "End-to-End Compliance Support",
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Accuracy Rate" },
  { value: "50+", label: "Services Offered" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900"
      />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-6">
              <Award size={14} />
              <span>Trusted Financial Consultancy in Mumbai</span>
            </div>

            {/* Company name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="block text-white">Prime Fintax</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                Consultancy
              </span>
              <span className="block text-white text-3xl sm:text-4xl font-bold">
                Services
              </span>
            </h1>

            {/* Tagline */}
            <div className="mt-4 mb-3">
              <p className="text-xl sm:text-2xl font-semibold text-amber-300 italic">
                &ldquo;You Take The Credit, We Process The Debit&rdquo;
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-blue-200 mb-8 max-w-lg">
              Your Trusted Partner in Financial Excellence — delivering
              reliable, accurate, and professional financial solutions.
            </p>

            {/* Trust items */}
            <div className="flex flex-col gap-3 mb-10">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                  <span className="text-blue-100 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-gold flex items-center gap-2 px-7 py-4 rounded-xl text-white font-bold text-base shadow-2xl"
              >
                Get Consultation
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <PhoneCall size={18} />
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-blue-300 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl animate-float">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-white/60 text-xs font-mono">financial-dashboard.tsx</span>
                </div>

                {/* Dashboard content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                    <div>
                      <div className="text-white/60 text-xs mb-1">Tax Savings</div>
                      <div className="text-white font-bold text-xl">₹ 2,45,000</div>
                    </div>
                    <div className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-green-400" size={24} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-600/30 rounded-xl p-4">
                      <div className="text-blue-200 text-xs mb-1">ITR Filed</div>
                      <div className="text-white font-bold text-lg">500+</div>
                    </div>
                    <div className="bg-purple-600/30 rounded-xl p-4">
                      <div className="text-purple-200 text-xs mb-1">GST Returns</div>
                      <div className="text-white font-bold text-lg">1200+</div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    {[
                      { label: "Compliance", pct: 92, color: "bg-green-400" },
                      { label: "Accuracy", pct: 99, color: "bg-amber-400" },
                      { label: "Satisfaction", pct: 97, color: "bg-blue-400" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs text-white/70 mb-1">
                          <span>{item.label}</span>
                          <span>{item.pct}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-amber-500 text-white rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-xs font-medium opacity-80">This Year</div>
                <div className="font-bold text-sm">₹ 50L+ Saved</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <Shield className="text-blue-900" size={20} />
                  <div>
                    <div className="text-xs text-slate-500">100% Compliant</div>
                    <div className="text-blue-900 font-bold text-sm">& Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-16 sm:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
