import React from "react";
import Link from "next/link";
import { Info, ArrowRight, Server, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Pricing Packages | rdhey infotech",
  description: "View our transparent ITSM support and IT maintenance contract packages. Transparent monthly tiers in INR for corporate onboarding.",
};

export default function PricingPage() {
  /*
  const plans = [
    {
      name: "Starter Support",
      price: "4,999",
      period: "month",
      desc: "Designed for small startups or regional shops needing remote desktop assistance.",
      icon: <Zap className="h-5 w-5 text-indigo-400" />,
      features: [
        "Up to 10 client endpoints",
        "Business hours remote L1 support",
        "4-hour response time SLA",
        "OS updating & standard patch routine",
        "Email & Chat ticket logging",
        "Single-node firewall check"
      ],
      popular: false,
      cta: "Select Starter Support"
    },
    {
      name: "Business ITSM",
      price: "14,999",
      period: "month",
      desc: "Perfect for growing mid-sized firms requiring structured IT management and cybersecurity policies.",
      icon: <Flame className="h-5 w-5 text-emerald-400" />,
      features: [
        "Up to 30 client endpoints",
        "24/7 remote L1 & L2 support",
        "2-hour response time SLA",
        "Active Directory & user management",
        "Daily secure database backup logs",
        "Endpoint Antivirus deployment",
        "Monthly audit & SLA reviews"
      ],
      popular: true,
      cta: "Select Business Plan"
    },
    {
      name: "Enterprise SLA",
      price: "Custom",
      period: "quote",
      desc: "Custom-scale operations requiring physical network setups and priority field dispatch.",
      icon: <Award className="h-5 w-5 text-pink-400" />,
      features: [
        "Unlimited client endpoints",
        "Dedicated IT Account Manager",
        "15-minute response SLA for outages",
        "Physical cabling & switch repairs",
        "On-site emergency field team dispatch",
        "Full gateway audit readiness reports",
        "Custom compliance consulting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];
  */

  return (
    <div className="relative pt-24 pb-24 overflow-hidden bg-[#090d16] flex flex-col justify-center items-center min-h-[70vh]">
      {/* Background Radial Glow */}
      <div className="absolute top-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        {/* Under Update Graphic / Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/35 shadow-lg shadow-indigo-600/10 animate-bounce">
            <Server className="h-8 w-8" />
          </div>
        </div>

        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-indigo-400">
            Pricing Updates In Progress
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            SLA Packages Under Review
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            We are currently updating our standard support pricing matrices to include new endpoint packages. 
            In the meantime, our sales team is processing custom SLA inquiries directly.
          </p>
        </div>

        {/* CTA triggers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-colors"
          >
            Get Custom Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="mailto:rdheyinfotechsolution@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            Email Sales
          </a>
        </div>

        {/* Pricing Disclosures - Mandatory for Cashfree */}
        <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 text-left max-w-2xl mx-auto mt-12">
          <div className="flex gap-4 items-start">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 mt-0.5">
              <Info className="h-5 w-5" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-450 leading-relaxed">
              <h4 className="font-bold text-white">Gateway & Compliance Notice:</h4>
              <p className="text-slate-400 text-xs">
                All customized SLA pricing contracts are billed in Indian Rupees (INR) and are subject to 18% GST. 
                Transaction security is managed securely via Cashfree Payments. Refund details are covered in our 
                <Link href="/refund-policy" className="text-indigo-400 hover:underline mx-1">Refund Policy</Link>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
