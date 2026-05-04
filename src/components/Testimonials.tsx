"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    company: "Sharma Enterprises, Andheri",
    review:
      "Prime Fintax has been handling our GST and income tax filings for 3 years now. Their attention to detail and proactive communication is exceptional. We've saved significantly on taxes due to their expert planning.",
    rating: 5,
    avatar: "RS",
    avatarColor: "from-blue-600 to-blue-800",
  },
  {
    name: "Priya Mehta",
    role: "Homemaker & Investor",
    company: "Individual Client",
    review:
      "As someone unfamiliar with taxation, I was nervous about filing my ITR. The team at Prime Fintax made it completely stress-free, explained everything clearly, and got me a refund I didn't even know I was entitled to!",
    rating: 5,
    avatar: "PM",
    avatarColor: "from-purple-600 to-purple-800",
  },
  {
    name: "Suresh Patil",
    role: "Chairman",
    company: "Shree Sai CHS, Borivali",
    review:
      "Our housing society's accounts were in a mess before we hired Prime Fintax. They organized everything, completed the pending audits, and now we have clean books. Their housing society expertise is unmatched.",
    rating: 5,
    avatar: "SP",
    avatarColor: "from-emerald-600 to-emerald-800",
  },
  {
    name: "Anjali Verma",
    role: "Founder & CEO",
    company: "TechStartup Pvt. Ltd.",
    review:
      "We engaged Prime Fintax for our startup's registration, GST, TDS and payroll. They handled everything seamlessly. Their team is knowledgeable, prompt and always reachable. Highly recommended for startups!",
    rating: 5,
    avatar: "AV",
    avatarColor: "from-amber-600 to-amber-800",
  },
  {
    name: "Mohammed Rizvi",
    role: "Chartered Accountant",
    company: "Partner, Rizvi & Associates",
    review:
      "I refer my overflow clients to Prime Fintax with full confidence. Their technical accuracy, client handling, and turnaround time is exceptional. A reliable professional team you can trust completely.",
    rating: 5,
    avatar: "MR",
    avatarColor: "from-rose-600 to-rose-800",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-700" />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            What Our Clients{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Don&apos;t just take our word for it — hear from the businesses and
            individuals who trust Prime Fintax with their finances.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl" />

            {/* Quote icon */}
            <div className="relative z-10">
              <Quote size={48} className="text-amber-400/40 mb-6" />

              {/* Review text */}
              <blockquote className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-medium min-h-[120px]">
                &ldquo;{testimonials[current].review}&rdquo;
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].avatarColor} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <span className="text-white font-bold text-base">
                    {testimonials[current].avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">
                    {testimonials[current].name}
                  </div>
                  <div className="text-blue-300 text-sm">{testimonials[current].role}</div>
                  <div className="text-amber-400 text-xs font-medium">
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              <button
                onClick={() => { prev(); setIsAutoPlaying(false); }}
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-600 flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => { next(); setIsAutoPlaying(false); }}
                className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-slate-600 flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-3 bg-blue-900"
                      : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="text-slate-400 text-sm font-medium">
              {current + 1} / {testimonials.length}
            </div>
          </div>
        </div>

        {/* Mini cards at bottom */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {[
            { emoji: "⭐", label: "Google Rating", value: "4.9/5" },
            { emoji: "👥", label: "Happy Clients", value: "300+" },
            { emoji: "📋", label: "Returns Filed", value: "500+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-slate-50 border border-slate-100 rounded-2xl p-5"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
