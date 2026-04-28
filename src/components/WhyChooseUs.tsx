"use client";

import {
  ShieldCheck,
  Layers,
  Clock,
  BadgeIndianRupee,
  Star,
  HeartHandshake,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Experienced Professionals",
    description:
      "Our team includes seasoned Chartered Accountants and Tax Professionals with decades of combined expertise in Indian tax and compliance.",
    color: "text-blue-700",
    bg: "bg-blue-100",
  },
  {
    icon: Layers,
    title: "Customized Solutions",
    description:
      "We don't believe in one-size-fits-all. Every client receives a tailored strategy aligned with their specific business model and goals.",
    color: "text-purple-700",
    bg: "bg-purple-100",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Deadlines in taxation are non-negotiable. We guarantee on-time filing and compliance submissions — every time, without exception.",
    color: "text-emerald-700",
    bg: "bg-emerald-100",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surprises. Our pricing is clear, competitive and communicated upfront — what you see is what you pay.",
    color: "text-amber-700",
    bg: "bg-amber-100",
  },
  {
    icon: Star,
    title: "Accurate & Reliable",
    description:
      "With meticulous attention to detail and rigorous quality checks, we deliver 99%+ accuracy across all our financial services.",
    color: "text-rose-700",
    bg: "bg-rose-100",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Support",
    description:
      "Every client gets a dedicated relationship manager. Reach us anytime — we're here for you beyond office hours too.",
    color: "text-cyan-700",
    bg: "bg-cyan-100",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #4c1d95 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-12">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            The Prime Fintax{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Advantage
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-blue-200">
            Thousands of clients trust us with their finances. Here's why.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 card-hover ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms`, transitionDuration: "700ms" }}
                >
                  <div className={`w-11 h-11 ${reason.bg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon size={20} className={reason.color} />
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">{reason.title}</h4>
                  <p className="text-blue-200 text-xs leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* Right: Large feature highlight */}
          <div className="text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
              End-to-End Financial &{" "}
              <span className="text-amber-400">Compliance Support</span>
            </h3>
            <p className="text-blue-200 mb-8 leading-relaxed text-lg">
              We handle everything from initial consultation to filing, from
              planning to dispute resolution — so you can focus entirely on
              growing your business.
            </p>

            {/* Timeline-style list */}
            <div className="space-y-6 relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-amber-400 via-purple-400 to-blue-400" />

              {[
                {
                  title: "Initial Free Consultation",
                  desc: "Understand your needs, assess your situation, no cost.",
                },
                {
                  title: "Customized Plan",
                  desc: "Tailored strategy and transparent quote presented to you.",
                },
                {
                  title: "Execution & Filing",
                  desc: "Our experts handle all paperwork, portals, and deadlines.",
                },
                {
                  title: "Ongoing Advisory",
                  desc: "Year-round support, proactive alerts, compliance reminders.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <div className="pt-1">
                    <div className="font-bold text-white mb-1">{step.title}</div>
                    <div className="text-blue-300 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold px-8 py-4 rounded-xl text-white font-bold shadow-2xl inline-flex items-center gap-2"
              >
                Start Your Journey
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-12">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
