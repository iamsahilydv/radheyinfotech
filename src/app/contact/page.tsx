"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactFormSection({ defaultPlan }: { defaultPlan: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: defaultPlan,
    message: ""
  });

  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        msg: "Please fill in all mandatory fields (Name, Email, and Message)."
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, msg: "" });

    // Read environment variables or fallback to placeholders
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_company: formData.company,
      selected_plan: formData.plan,
      message: formData.message,
    };

    try {
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        // Fallback simulation in dev mode if variables are unset
        console.warn("EmailJS credentials are not configured in environment variables. Simulating submission...");
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } else {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setStatus({
        type: "success",
        msg: "Thank you! Your ticket has been logged in our ITSM queue. An engineer will reach out within 2 hours."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        plan: defaultPlan,
        message: ""
      });
    } catch (err) {
      console.error("EmailJS submission failure:", err);
      setStatus({
        type: "error",
        msg: "Failed to send ticket. Please try again or email us directly at rdheyinfotechsolution@gmail.com."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10">
      <h2 className="text-xl font-bold text-white mb-6">Log a Support Ticket / Inquiry</h2>
      
      {status.type && (
        <div
          className={`flex gap-3 p-4 rounded-xl mb-6 text-sm ${
            status.type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
              : "bg-red-500/10 border border-red-500/30 text-red-400"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0" />
          )}
          <span>{status.msg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Radhe Solutions"
              className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="plan" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Required Service Module / Plan
          </label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors appearance-none"
          >
            <option value="General Inquiry">General Corporate Inquiry</option>
            <option value="Starter Support">Starter Support Package (₹4,999/mo)</option>
            <option value="Business ITSM">Business ITSM Package (₹14,999/mo)</option>
            <option value="Enterprise SLA">Enterprise SLA / Custom Quote</option>
            <option value="Cybersecurity Audit">Cybersecurity & Compliance Audit</option>
          </select>
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Inquiry / Issue Description *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your support request, endpoint count, or service expectations..."
            className="w-full rounded-xl border border-white/5 bg-slate-950 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging Ticket..." : "Submit Ticket to Queue"}
        </button>
      </form>
    </div>
  );
}

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "General Inquiry";
  return <ContactFormSection key={planParam} defaultPlan={planParam} />;
}

export default function ContactPage() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16]">
      {/* Background Radial Glow */}
      <div className="absolute top-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            Contact Us
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Need urgent IT assistance or ready to scale your infrastructure? Reach out to our local office or 
            log a ticket directly in our ITSM dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6.5 space-y-5">
              <h3 className="text-lg font-bold text-white">Office Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Physical Address</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Technical Support & Sales</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      <a href="mailto:rdheyinfotechsolution@gmail.com" className="hover:text-indigo-400 transition-colors">rdheyinfotechsolution@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Support Timings</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      Monday - Saturday: 09:00 AM - 06:00 PM IST
                      <br />
                      <em>(24/7 Priority Emergency dispatch active for Enterprise SLA customers)</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grievance Redressal Card - Cashfree Requirement */}
            <div className="glass-card rounded-2xl p-6.5 space-y-3">
              <h3 className="text-base font-bold text-white">Grievance Redressal</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                In accordance with the Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
              </p>
              <div className="border-t border-white/5 pt-3 space-y-1.5 text-xs text-slate-500 font-mono">
                <div><strong>Officer Name:</strong> Rajesh Shaw</div>
                <div><strong>Designation:</strong> Director</div>
                <div><strong>Contact Number:</strong> +91 70142 88578</div>
                <div><strong>Email:</strong> rdheyinfotechsolution@gmail.com</div>
                <div><strong>Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501</div>
              </div>
            </div>

            {/* Static Simulated Map Visual (Premium Aesthetics) */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-1 overflow-hidden relative group aspect-[4/3] max-w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute top-4 left-4 z-20 bg-slate-950/80 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                <span className="text-[10px] font-mono text-emerald-400 animate-pulse mr-1.5">●</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">NH-48 Corridor, Bawal</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                {/* Custom SVG stylized map graphic */}
                <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2050/svg">
                  <path d="M50 0 L150 120 L250 180 L400 300" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M0 150 H400" stroke="#1e293b" strokeWidth="1" />
                  <path d="M100 0 V300" stroke="#1e293b" strokeWidth="1" />
                  <path d="M280 0 V300" stroke="#1e293b" strokeWidth="1" />
                  <path d="M0 250 H400" stroke="#1e293b" strokeWidth="1" />
                  
                  {/* Highway NH-48 */}
                  <path d="M0 80 Q 180 140, 400 240" stroke="#312e81" strokeWidth="12" />
                  <path d="M0 80 Q 180 140, 400 240" stroke="#4338ca" strokeWidth="2" strokeDasharray="6 4" />
                  
                  {/* Bawal Node */}
                  <circle cx="210" cy="150" r="16" fill="#4f46e5" fillOpacity="0.15" />
                  <circle cx="210" cy="150" r="8" fill="#4f46e5" fillOpacity="0.4" />
                  <circle cx="210" cy="150" r="3" fill="#6366f1" />
                  
                  {/* Asalwas Office location marker */}
                  <path d="M210 135 L215 145 H205 Z" fill="#10b981" />
                  <text x="225" y="153" fill="#f8fafc" fontSize="10" fontFamily="sans-serif" fontWeight="bold">rdhey infotech</text>
                  <text x="225" y="165" fill="#64748b" fontSize="8" fontFamily="sans-serif">H. No. 140, Asalwas</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="glass-card rounded-3xl p-8 text-center text-slate-400">Loading form parameters...</div>}>
              <ContactFormWrapper />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
