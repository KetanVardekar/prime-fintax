"use client";

import { MessageSquare, Search, CheckSquare, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free Consultation",
    description:
      "Book a free, no-obligation consultation with our experts. We listen to your needs, understand your financial situation, and identify the best way forward.",
    highlight: "No charges, no pressure",
    color: "from-blue-500 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    number: "02",
    icon: Search,
    title: "Analysis & Planning",
    description:
      "We conduct a thorough analysis of your financials, identify savings opportunities, compliance gaps, and create a customized action plan for you.",
    highlight: "Tailored to your business",
    color: "from-purple-500 to-purple-700",
    lightColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Compliance Execution",
    description:
      "Our team handles all filings, registrations, returns and compliance submissions — accurately and on time. You just sit back and relax.",
    highlight: "On-time, every time",
    color: "from-amber-500 to-amber-700",
    lightColor: "bg-amber-50",
    textColor: "text-amber-700",
    borderColor: "border-amber-200",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We're not just a one-time service. Our team provides year-round support, proactive compliance alerts, and is always available for your queries.",
    highlight: "Year-round partnership",
    color: "from-emerald-500 to-emerald-700",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-700" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Our Simple{" "}
            <span className="gradient-text">4-Step Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Getting started with Prime Fintax is effortless. Here's how we take
            you from first contact to full compliance.
          </p>
        </div>

        {/* Desktop: Horizontal steps with connector */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-amber-200 to-emerald-200" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`flex flex-col items-center text-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    {/* Step icon */}
                    <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl mb-6 z-10`}>
                      <Icon size={40} className="text-white" />
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <span className="text-xs font-extrabold text-slate-700">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${step.lightColor} ${step.textColor} text-xs font-semibold border ${step.borderColor}`}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {step.highlight}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical steps */}
        <div className="lg:hidden relative">
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 via-amber-300 to-emerald-300" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`flex gap-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Left: Icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                      <Icon size={30} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow border border-slate-100 flex items-center justify-center">
                      <span className="text-xs font-extrabold text-slate-700">{i + 1}</span>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-extrabold text-slate-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${step.lightColor} ${step.textColor} text-xs font-semibold border ${step.borderColor}`}>
                      ✓ {step.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-slate-100 max-w-lg">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-extrabold text-slate-900 text-xl mb-2">
              Ready to get started?
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Book your free consultation today. No commitment required.
            </p>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary w-full py-3 rounded-xl text-white font-bold shadow-lg"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
