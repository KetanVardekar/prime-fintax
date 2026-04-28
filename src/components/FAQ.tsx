"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "What documents do I need for ITR filing?",
    a: "For ITR filing you typically need your PAN card, Aadhaar card, Form 16 (from employer), bank statements, investment proofs (80C, 80D), and details of any other income (rental, capital gains, etc.). Our team guides you through the exact list based on your specific situation.",
  },
  {
    q: "How long does GST registration take?",
    a: "GST registration is typically completed within 3–7 working days after submission of all required documents. The process involves submitting an online application on the GST portal, document verification by the tax authority, and issuance of GSTIN. We handle the entire process for you.",
  },
  {
    q: "Is it mandatory for me to file ITR if my income is below the taxable limit?",
    a: "While it may not be mandatory in all cases, filing ITR is highly recommended even if your income is below the taxable limit. It helps in visa applications, loan approvals, claiming TDS refunds, and establishes a financial track record. Our experts can advise based on your specific case.",
  },
  {
    q: "Do you handle GST for e-commerce sellers?",
    a: "Yes, absolutely! We have extensive experience handling GST compliance for e-commerce sellers on platforms like Amazon, Flipkart, and Meesho. This includes GST registration, monthly GSTR-1 & 3B filings, TCS/TDS compliance, and reconciliation with platform reports.",
  },
  {
    q: "What is TDS and why is it important?",
    a: "TDS (Tax Deducted at Source) is a mechanism where tax is deducted at the point of payment (salaries, rent, professional fees, etc.) by the payer and deposited with the government. Compliance is critical — missing TDS deadlines attracts interest and penalties. We ensure timely deduction, deposit, and quarterly return filing.",
  },
  {
    q: "Can you handle accounting for our housing society?",
    a: "Yes, we specialize in Housing Society accounting! This includes preparing annual accounts, conducting audits, maintenance billing, sinking fund management, AGM report preparation, and all compliances under the Maharashtra Cooperative Societies Act.",
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing varies based on the scope of services required. We believe in transparent, competitive pricing — no hidden charges, ever. Contact us for a free consultation and we'll provide a clear, detailed quote tailored to your specific needs.",
  },
  {
    q: "Can I communicate with you over WhatsApp?",
    a: "Absolutely! We understand the importance of quick and easy communication. You can reach us on WhatsApp at +91 9820 351 901 for queries, document sharing, and updates. Our team typically responds within a few hours.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-70" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-700" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Have questions? We have answers. If you don't find what you're
            looking for, feel free to contact us directly.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === i
                  ? "border-blue-200 shadow-blue-100/50"
                  : "border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
              >
                <span
                  className={`font-semibold text-base transition-colors ${
                    openIndex === i ? "text-blue-900" : "text-slate-900"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-blue-900 text-white rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="h-px bg-slate-100 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Still have questions? We'd love to help.
          </p>
          <a
            href="https://wa.me/919820351901"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
