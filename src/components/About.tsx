"use client";

import { Users, Target, Heart, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accurate, reliable, and timely financial solutions that help our clients achieve compliance and growth.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Every client is unique. We deliver personalized financial strategies tailored to your specific needs and goals.",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our seasoned professionals bring deep expertise in taxation, GST, accounting, and business compliance.",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Zap,
    title: "Timely Delivery",
    description:
      "We understand deadlines matter. Count on us for prompt service without compromising on quality.",
    color: "text-green-700",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-700" />
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Who We{" "}
            <span className="gradient-text">Are</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Prime Fintax Consultancy Services is committed to delivering{" "}
            <strong className="text-blue-900">reliable, accurate</strong> and{" "}
            <strong className="text-blue-900">professional financial solutions</strong> for
            individuals, businesses and housing societies. We combine deep
            expertise with a personal touch, making compliance simple and
            stress-free.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Visual element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="text-amber-400 text-6xl font-extrabold mb-2">10+</div>
                <div className="text-white text-xl font-semibold mb-6">Years of Excellence</div>

                <div className="space-y-4">
                  {[
                    { label: "Individual Clients", value: "300+", color: "bg-blue-400" },
                    { label: "Business Clients", value: "150+", color: "bg-purple-400" },
                    { label: "Housing Societies", value: "50+", color: "bg-amber-400" },
                    { label: "Returns Filed", value: "5000+", color: "bg-green-400" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-white/80 text-sm">{item.label}</span>
                      </div>
                      <span className="text-white font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-white/70 text-sm text-center">
                  Serving clients across Mumbai & Maharashtra
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="text-slate-500 text-xs">Rated</div>
                  <div className="text-slate-900 font-bold text-sm">Top Consultancy</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i} className="text-amber-400 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              Your Financial Goals,{" "}
              <span className="gradient-text">Our Expertise</span>
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded with a vision to simplify taxation and compliance for every
              Indian, Prime Fintax has grown into a full-service financial
              consultancy trusted by individuals, startups, established businesses,
              and housing societies alike.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team of experienced Chartered Accountants, Tax Professionals, and
              Compliance Experts work closely with you — ensuring you never miss a
              deadline, never overpay taxes, and always stay on the right side of
              the law.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "ITAT, CIT Appeals handled successfully",
                "GST registrations & dispute resolution",
                "Payroll for 5 to 500+ employees",
                "Dedicated relationship manager for every client",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`card-hover ${pillar.bg} border ${pillar.border} rounded-2xl p-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 ${pillar.bg} rounded-xl flex items-center justify-center mb-4 shadow-sm border ${pillar.border}`}>
                  <Icon size={22} className={pillar.color} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
