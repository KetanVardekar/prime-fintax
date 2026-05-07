"use client";

import { useState } from "react";
import {
  FileText,
  Receipt,
  Wallet,
  BookOpen,
  Building2,
  Home,
  Briefcase,
  ArrowRight,
  X,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: FileText,
    title: "Income Tax Services",
    shortDesc: "Expert ITR filing, tax planning and assessment handling",
    details: [
      "ITR Filing for Individuals & Businesses",
      "Tax Planning & Optimization",
      "Income Tax Assessments",
      "Assitance and Coordination in filing appeals(CIT & ITAT)",
      "Advance Tax Computation",
      "Form 15CA / Coordination for Form 15CB (through CA)",
    ],
    color: "from-blue-600 to-blue-800",
    lightBg: "bg-blue-50",
    iconColor: "text-blue-700",
    badgeBg: "bg-blue-100",
    tag: "Most Popular",
  },
  {
    icon: Receipt,
    title: "GST Compliance & Advisory",
    shortDesc: "End-to-end GST registration, returns, and reconciliation",
    details: [
      "GST Registration",
      "Monthly / Quarterly Returns",
      "GSTR-1, 3B, 9 & 9C  Preparation & CA coordination",
      "Input Tax Credit Reconciliation",
      "GST Review & Advisory",
      "GST complaince check (Internal review)",
      "GST Notice Handling & Support",
      "Assistance in GST Disputes"
    ],
    color: "from-purple-600 to-purple-800",
    lightBg: "bg-purple-50",
    iconColor: "text-purple-700",
    badgeBg: "bg-purple-100",
    tag: "",
  },
  {
    icon: Wallet,
    title: "TDS & Payroll Compliance",
    shortDesc: "Seamless TDS returns, PF, ESI and payroll processing",
    details: [
      "TDS Deduction & Returns",
      "Form 24Q, 26Q, 27Q Filing",
      "Provident Fund (PF) Compliance",
      "ESIC Registration & Returns",
      "Salary Processing & Payslips",
      "Professional Tax",
    ],
    color: "from-emerald-600 to-emerald-800",
    lightBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    tag: "",
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    shortDesc: "Accurate books, financial statements and MIS reporting",
    details: [
      "Daily / Monthly Bookkeeping",
      "Tally & Accounting Software",
      "Financial Statements Preparation",
      "MIS Reports & Analysis",
      "Bank Reconciliation",
      "Accounts Payable & Receivable",
    ],
    color: "from-amber-600 to-amber-800",
    lightBg: "bg-amber-50",
    iconColor: "text-amber-700",
    badgeBg: "bg-amber-100",
    tag: "",
  },
  {
    icon: Building2,
    title: "Business Compliance & Finalisation",
    shortDesc: "Complete business compliance, audits and account finalization",
    details: [
      "Annual Accounts Finalisation",
      "Statutory Audit Support",
      "ROC Filings",
      "Director KYC & Annual Returns",
      "Company Secretarial Work",
    ],
    color: "from-rose-600 to-rose-800",
    lightBg: "bg-rose-50",
    iconColor: "text-rose-700",
    badgeBg: "bg-rose-100",
    tag: "",
  },
  {
    icon: Home,
    title: "Housing Society Accounting",
    shortDesc: "Specialized accounting for cooperative housing societies",
    details: [
      "CHS Accounts & Audit",
      "Maintenance Billing",
      "Fund Management",
      "AGM Report Preparation",
      "Sinking & Repair Fund",
      "Compliances under MCS Act",
    ],
    color: "from-cyan-600 to-cyan-800",
    lightBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    badgeBg: "bg-cyan-100",
    tag: "Specialized",
  },
  {
    icon: Briefcase,
    title: "Business Registrations & Setup",
    shortDesc: "End-to-end business incorporation and licensing",
    details: [
      "Private Limited Company",
      "LLP & Partnership Firm",
      "Sole Proprietorship",
      "MSME / Udyam Registration",
      "Trade License & FSSAI",
      "Startup India Registration",
    ],
    color: "from-indigo-600 to-indigo-800",
    lightBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    badgeBg: "bg-indigo-100",
    tag: "New",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-700" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Financial Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            From tax filing to business setup — we offer end-to-end financial
            and compliance services under one roof.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative card-hover bg-white border border-slate-100 rounded-2xl p-6 shadow-sm cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 70}ms` }}
                onClick={() => setActiveModal(i)}
              >
                {service.tag && (
                  <div className={`absolute top-3 right-3 ${service.badgeBg} ${service.iconColor} text-xs font-bold px-2 py-1 rounded-full`}>
                    {service.tag}
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} className="text-white" />
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                <button className={`flex items-center gap-1.5 text-sm font-semibold ${service.iconColor} group-hover:gap-2.5 transition-all duration-200`}>
                  Learn More <ArrowRight size={14} />
                </button>

                {/* Bottom gradient bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Not sure which service you need?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-xl"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-slate-700" />
            </button>

            {(() => {
              const s = services[activeModal];
              const Icon = s.icon;
              return (
                <>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon size={30} className="text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">{s.shortDesc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-slate-700 text-sm">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full py-3 rounded-xl text-white font-bold bg-gradient-to-r ${s.color} shadow-lg hover:opacity-90 transition-opacity`}
                  >
                    Get Started with this Service
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
