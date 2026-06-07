import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "IT Service Desk", href: "/services#service-desk" },
    { name: "Cybersecurity Support", href: "/services#cybersecurity" },
    { name: "Cloud Management", href: "/services#cloud" },
    { name: "Network Infrastructure", href: "/services#network" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    // { name: "Pricing Plans", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Refund & Cancellation", href: "/refund-policy" },
    { name: "Shipping & Delivery", href: "/shipping-policy" },
  ];

  return (
    <footer className="w-full bg-[#05070a] border-t border-white/5 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-indigo-600/5 group-hover:border-indigo-500/30 transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="rdhey infotech logo"
                  fill
                  sizes="40px"
                  className="object-cover scale-[1.3] translate-y-[-10%]"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                rdhey <span className="text-indigo-500">infotech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mt-4">
              Premium IT Service Management & solutions engineered to help modern businesses operate securely and scale seamlessly.
            </p>
          </div>

          {/* Service Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-indigo-400 flex items-center gap-1 transition-colors">
                    <ChevronRight className="h-3 w-3 text-indigo-500/75" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-indigo-400 flex items-center gap-1 transition-colors">
                    <ChevronRight className="h-3 w-3 text-indigo-500/75" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Cashfree Compliance Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Policies & Compliance</h3>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-indigo-400 flex items-center gap-1 transition-colors">
                    <ChevronRight className="h-3 w-3 text-emerald-500/75" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-white/5 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Address & Contact details - Mandatory for Cashfree */}
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 text-sm text-slate-500">
              <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
              <span>
                <strong>Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501, India
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-500">
              <Mail className="h-4.5 w-4.5 text-indigo-500 shrink-0" />
              <span>
                <strong>Email:</strong> <a href="mailto:rdheyinfotechsolution@gmail.com" className="hover:text-indigo-400 transition-colors">rdheyinfotechsolution@gmail.com</a>
              </span>
            </div>
          </div>

          {/* Legal and Copyright */}
          <div className="lg:text-right space-y-2">
            <p className="text-sm text-slate-600">
              &copy; {currentYear} rdhey infotech. All rights reserved.
            </p>
            <p className="text-xs text-slate-700">
              All transactions are secured and processed under regulatory guidelines. Website owned by rdhey infotech (domain: rdheyinfotech.in).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
