import React from "react";
import Link from "next/link";
import {
  Layers,
  Shield,
  Cloud,
  Cpu,
  ArrowRight,
  Check,
  Activity,
  Terminal,
  Clock
} from "lucide-react";

export const metadata = {
  title: "IT & ITSM Services | rdhey infotech",
  description: "Explore our detailed IT service catalog including Managed Service Desk, Cybersecurity Audits, Cloud Hosting, and Network Infrastructure Support.",
};

export default function ServicesPage() {
  const serviceModules = [
    {
      id: "service-desk",
      icon: <Layers className="h-7 w-7 text-indigo-400" />,
      title: "Managed IT Service Desk & Support",
      badge: "ITIL V4 Aligned",
      description: "Our dedicated service desk acts as the single point of contact (SPOC) for all customer IT incidents and requests. We resolve software errors, configuration problems, and manage desktop assets.",
      features: [
        "L1 & L2 remote technical desktop support",
        "Active Directory & user credential management",
        "Software deployment & OS patching",
        "Strict ticket response and resolution SLAs",
        "Detailed monthly service reports"
      ],
      color: "indigo"
    },
    {
      id: "cybersecurity",
      icon: <Shield className="h-7 w-7 text-emerald-400" />,
      title: "Cybersecurity Audits & Threat Defense",
      badge: "Compliance Ready",
      description: "We secure endpoints and network gateways against breaches. Our systems are engineered to help clients satisfy rigid security checklists required for merchant onboarding on payment gateways.",
      features: [
        "Endpoint Protection & Antivirus deployment",
        "Firewall policy audit and hardware configuration",
        "Multi-Factor Authentication (MFA) enforcement",
        "Security threat assessments & scanning",
        "Payment aggregator alignment checklists"
      ],
      color: "emerald"
    },
    {
      id: "cloud",
      icon: <Cloud className="h-7 w-7 text-cyan-400" />,
      title: "Cloud Migration & Remote Servers",
      badge: "Enterprise Ready",
      description: "We transition static legacy software pipelines into optimized public or private cloud systems, creating high availability and automated daily backup routines.",
      features: [
        "AWS, Microsoft Azure & Google Cloud migration",
        "VPS & Linux/Windows server administration",
        "Automated encrypted daily database backups",
        "Microsoft 365 & Google Workspace setup",
        "Secure remote VPN tunneling"
      ],
      color: "cyan"
    },
    {
      id: "network",
      icon: <Cpu className="h-7 w-7 text-pink-400" />,
      title: "Network Infrastructure Operations",
      badge: "High Availability",
      description: "We plan and deploy resilient office networks, switchboards, router arrays, and cabling systems to ensure standard business operations suffer minimal lag or interruption.",
      features: [
        "LAN/WAN configuration & network cabling",
        "Router & enterprise switch management",
        "Network load balancing & failover setups",
        "Physical server rack diagnostic support",
        "Wi-Fi range extension & hardware audits"
      ],
      color: "pink"
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16]">
      {/* Background Radial Glow */}
      <div className="absolute top-[15%] right-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            Our Service Catalog
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Technical Support & ITSM Solutions
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Professional technical support engineered for security, high uptime, and modern industry standards. 
            All solutions are delivered online or via local dispatch.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12 mb-20">
          {serviceModules.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className="scroll-mt-24 rounded-3xl border border-white/5 bg-slate-900/20 p-8 sm:p-12 hover:border-indigo-500/25 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Side: Summary */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-white/10">
                      {svc.icon}
                    </div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/40 px-3 py-1.5 rounded-md border border-indigo-500/15">
                      {svc.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {svc.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {svc.description}
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/15"
                    >
                      Request Support Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Features Checklist */}
                <div className="lg:col-span-6 lg:pl-8 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Features & Delivery Scope</h3>
                  <ul className="space-y-3">
                    {svc.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-350 leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SLA Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-6.5 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Clock className="h-5.5 w-5.5" />
            </div>
            <h4 className="text-base font-bold text-white">Guaranteed Response</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We respond to normal issues within 2 to 4 hours. Critical server problems are picked up within 15 minutes.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6.5 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Activity className="h-5.5 w-5.5" />
            </div>
            <h4 className="text-base font-bold text-white">Continuous Monitoring</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated alarms check status on primary connections, data stores, and firewalls 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6.5 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <Terminal className="h-5.5 w-5.5" />
            </div>
            <h4 className="text-base font-bold text-white">Detailed IT Reporting</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Each month, we export audit logs of completed support work, system health parameters, and performance data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
