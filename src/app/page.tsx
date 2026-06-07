"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Cloud,
  Cpu,
  Layers,
  CheckCircle,
  Clock,
  PhoneCall,
  Terminal,
  ChevronDown
} from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      icon: <Layers className="h-6 w-6 text-indigo-400" />,
      title: "Managed IT Desk (ITSM)",
      desc: "Comprehensive IT Service Management aligned with ITIL standards. We handle incident resolution, ticketing, and user onboarding.",
      link: "/services#service-desk"
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Cybersecurity & Audit",
      desc: "Robust endpoints defense, network firewall policies, threat hunting, and compliance audits for payment aggregators (Cashfree, etc.).",
      link: "/services#cybersecurity"
    },
    {
      icon: <Cloud className="h-6 w-6 text-cyan-400" />,
      title: "Cloud & Virtualization",
      desc: "Cloud migration, remote server provisioning, active directory management, and automated daily backup routines.",
      link: "/services#cloud"
    },
    {
      icon: <Cpu className="h-6 w-6 text-pink-400" />,
      title: "Enterprise Infrastructure",
      desc: "LAN/WAN cabling, server rack assembly, hardware diagnostic support, and on-site hardware maintenance.",
      link: "/services#network"
    }
  ];

  const itsmSteps = [
    {
      number: "01",
      title: "Service Desk Intake",
      desc: "Tickets are logged via email, phone, or portal. Every request is instantly assigned a tracking ticket code."
    },
    {
      number: "02",
      title: "Triage & SLA Match",
      desc: "Automated routing logs category, priority levels, and matching SLAs. Urgent incidents are resolved within 2 hours."
    },
    {
      number: "03",
      title: "Remediation & Fix",
      desc: "Engineers connect via secure portals or execute on-site visits to resolve the underlying technical root cause."
    },
    {
      number: "04",
      title: "Root Cause Review",
      desc: "Problem management evaluates repeating tickets. System logs are analyzed to prevent future infrastructure blocks."
    }
  ];

  const faqs = [
    {
      q: "What regions do you support for on-site services?",
      a: "Our physical operations are centered in Bawal, Rewari, and NCR Haryana, allowing us to offer rapid on-site dispatch. Remote operations and cloud management are supported globally."
    },
    {
      q: "Are your IT systems audit-ready for Cashfree/Payment Gateways?",
      a: "Yes. We design and implement network architecture, security controls, and endpoint protections that fulfill major payment gateway onboarding requirements (PCI-DSS standards, firewall configs, and data access policies)."
    },
    {
      q: "What is your typical SLA response time?",
      a: "For critical infrastructure outages (P1), our response time is under 15 minutes, with resolution targets under 2 hours. Standard desktop support tickets are resolved within 4-8 business hours."
    },
    {
      q: "Do we need to sign a long-term contract?",
      a: "We offer flexible agreements ranging from monthly support packages to multi-year enterprise service level agreements (SLAs), tailored to your business scale."
    }
  ];

  return (
    <div className="relative overflow-hidden pt-12 pb-24 bg-[#090d16]">
      {/* Background Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-400">
              <Terminal className="h-3.5 w-3.5" />
              ITSM & IT Support Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Smarter IT Service Delivery for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                Modern Operations
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              From reliable service desks and automated workflows to secure network architectures, 
              <strong> rdhey infotech</strong> builds and manages high-uptime infrastructures that keep your 
              operations secure, compliant, and ready for expansion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all hover:translate-y-[-1px]"
              >
                Schedule Free Audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-400">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-400">ISO 27001 Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-400">24/7 Active Monitoring</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Tech Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl border border-white/10 bg-slate-900/40 p-2 shadow-2xl shadow-indigo-950/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <Image
                src="/images/hero_itsm.png"
                alt="rdhey infotech ITSM Server Infrastructure"
                width={440}
                height={440}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Comprehensive Solutions</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Our Core Service Modules</p>
          <p className="text-slate-400 leading-relaxed text-base">
            Expertly-designed service catalog aligned with ITIL foundations, supporting your team with robust operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6.5 flex flex-col justify-between transition-all duration-300 group hover:translate-y-[-4px]"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-white/10 group-hover:border-indigo-500/40 transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
              <div className="pt-6 mt-auto">
                <Link
                  href={svc.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ITSM Process Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Process Left */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Operational Excellence</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Structured ITSM Workflow Lifecycle
            </h3>
            <p className="text-slate-400 leading-relaxed">
              We replace chaotic support tickets with systematic ITIL-driven workflows. By categorizing requests 
              into incidents, changes, and standard events, we minimize downtime and guarantee high availability.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">SLA-bound Response</h4>
                  <p className="text-xs text-slate-500">Every ticket is governed by a strict resolution timeline matching your tier.</p>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Asset & License Lifecycle</h4>
                  <p className="text-xs text-slate-500">We track hardware allocation, software licenses, and warranty renewals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {itsmSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6.5 space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-white/5 absolute top-4 right-4 tracking-tight">
                  {step.number}
                </div>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest font-mono">
                  Phase {step.number}
                </div>
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Presence Info Box */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900/60 to-indigo-950/20 p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Regional IT Experts</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Proudly Based in Bawal, Rewari, Haryana
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We provide rapid on-site troubleshooting and physical network provisioning across asalwas, bawal industrial sectors, 
              Minda camp region, and NH-48 business corridors. Save on latency and travel dispatch costs with local engineers.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#090d16] px-5 py-3 text-sm font-semibold hover:bg-slate-200 transition-colors shadow-lg"
            >
              <PhoneCall className="h-4 w-4" />
              Contact Local Office
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              About rdhey infotech
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 border-t border-white/5">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Frequently Asked Questions</h2>
          <h3 className="text-3xl font-extrabold text-white">Have Any Questions?</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isSelected = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-slate-900/20 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-4.5 text-left text-white hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-base">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isSelected ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isSelected ? "max-h-[200px] border-t border-white/5" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 py-4.5 text-sm text-slate-400 leading-relaxed bg-[#05070a]/40">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
