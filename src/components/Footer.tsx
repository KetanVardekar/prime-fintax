"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Income Tax Services",
  "GST Compliance & Advisory",
  "TDS & Payroll Compliance",
  "Accounting & Bookkeeping",
  "Business Compliance",
  "Housing Society Accounting",
  "Business Registrations",
];

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white relative overflow-hidden" style={{ background: "linear-gradient(160deg, #3b1500 0%, #1e1060 45%, #0c1e42 100%)" }}>
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-12">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl" />

      <div className="relative pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-white rounded-xl px-3 py-2 shrink-0">
                  <Image
                    src="/prime_fintax_consultancy.png"
                    alt="Prime Fintax Consultancy"
                    width={120}
                    height={80}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-white text-lg leading-tight">
                    Prime Fintax
                  </div>
                  <div className="text-amber-400 text-xs font-medium leading-tight">
                    Consultancy Services
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Your trusted partner in financial excellence. Delivering reliable,
                accurate, and professional financial solutions since 2014.
              </p>

              <div className="italic text-amber-400 text-sm font-medium mb-5">
                &ldquo;You Take The Credit, We Process The Debit&rdquo;
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  {
                    label: "WhatsApp",
                    href: "https://wa.me/919820351901",
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ),
                    color: "bg-green-600 hover:bg-green-500",
                  },
                  {
                    label: "Email",
                    href: "mailto:info@primefintaxconsultancy.com",
                    icon: <Mail size={16} />,
                    color: "bg-blue-700 hover:bg-blue-600",
                  },
                  {
                    label: "Phone",
                    href: "tel:+919820351901",
                    icon: <Phone size={16} />,
                    color: "bg-purple-700 hover:bg-purple-600",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-lg ${s.color} flex items-center justify-center transition-colors`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo("#services")}
                      className="text-slate-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                Contact Info
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+919820351901"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors">
                    <Phone size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                    <div className="text-slate-300 text-sm font-medium group-hover:text-amber-400 transition-colors">
                      +91 9820 351 901
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@primefintaxconsultancy.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800 transition-colors">
                    <Mail size={14} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-slate-300 text-sm font-medium group-hover:text-amber-400 transition-colors break-all">
                      info@primefintaxconsultancy.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Location</div>
                    <div className="text-slate-300 text-sm font-medium">
                      Borivali (West),<br />Mumbai, Maharashtra
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Prime Fintax Consultancy Services. All rights reserved.
            </div>
            <div className="flex gap-4 text-slate-500 text-xs">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Disclaimer</span>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 md:bottom-8 md:right-6 w-12 h-12 bg-gradient-to-br from-blue-700 to-purple-700 rounded-full flex items-center justify-center shadow-2xl hover:-translate-y-1 transition-transform z-40"
        >
          <ArrowUp size={20} className="text-white" />
        </button>
      </div>
    </footer>
  );
}
