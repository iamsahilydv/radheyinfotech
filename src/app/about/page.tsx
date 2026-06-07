import React from "react";
import Link from "next/link";
import { Shield, Sparkles, Target, Users, MapPin, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | rdhey infotech",
  description: "Learn more about rdhey infotech, our mission, core operational values, and our commitment to providing quality IT and ITSM support solutions.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Target className="h-6 w-6 text-indigo-400" />,
      title: "Client-Centric SLAs",
      desc: "Our support operations are customized entirely around client uptime. We guarantee performance parameters and ticket resolutions strictly aligned to agreed-upon frameworks."
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Proactive Defense",
      desc: "We believe in prevention rather than cure. Our infrastructure monitoring tools run 24/7 scanning endpoints and routing nodes for errors to prevent sudden outages."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      title: "Integrity & Compliance",
      desc: "We assist businesses in passing security compliance reviews for onboarding payment processing gateways like Cashfree, enforcing rigid standards at every terminal."
    },
    {
      icon: <Users className="h-6 w-6 text-pink-400" />,
      title: "Regional Expertise",
      desc: "Being locally rooted in the Rewari industrial belt gives us an edge in dispatching technical field teams for immediate physical network repairs and server room setups."
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16]">
      {/* Background Radial Glow */}
      <div className="absolute top-[10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Title */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            About Our Company
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Reliable IT Infrastructure Management
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Founded with the goal of bringing robust, enterprise-grade IT Service Management (ITSM) to modern businesses, 
            <strong> rdhey infotech</strong> streamlines technical support for growing startups and industrial plants.
          </p>
        </div>

        {/* Brand Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="glass-card rounded-3xl p-8 sm:p-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To empower corporate ecosystems with high-performing, resilient, and standardized IT systems. We design, 
              deploy, and support IT infrastructure with a focus on maximum uptime, modern security controls, 
              and smooth ticket management, ensuring business-critical workflows never halt.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-8 sm:p-10 space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To become the leading regional technology partner and ITSM authority across Haryana and the NCR region. 
              We aim to continuously innovate our remote management platforms and build a seamless support ecosystem that 
              delivers instantaneous problem-solving capabilities.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Operational Pillars</h2>
            <p className="text-3xl font-extrabold text-white">What Defines rdhey infotech</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6.5 flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-white/10">
                  {val.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Address & Compliance Card */}
        <div className="mt-20 rounded-3xl border border-white/5 bg-slate-950/60 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white">Corporate Governance & Address</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                rdhey infotech operates out of Rewari, Haryana. We maintain full statutory alignment to 
                guarantee safety and transparency for online customer invoicing and payment aggregation.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Registered Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-400">
                  <Mail className="h-4.5 w-4.5 text-indigo-400 shrink-0" />
                  <span>
                    <strong>Corporate Inquiry:</strong> <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-400 hover:text-indigo-300">rdheyinfotechsolution@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-end w-full">
              <Link
                href="/contact"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-colors"
              >
                Inquire Online
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
