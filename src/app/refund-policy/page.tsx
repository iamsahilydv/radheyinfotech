import React from "react";
import { Calendar, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | rdhey infotech",
  description: "Review our refund eligibility guidelines, contract cancellation windows, and payment return timelines (5-7 business days) on rdheyinfotech.in.",
};

export default function RefundPolicyPage() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16] font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Title */}
        <div className="border-b border-white/5 pb-8 mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Refund & Cancellation Policy</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Effective Date: June 8, 2026
            </span>
            <span>|</span>
            <span>Owner: rdhey infotech</span>
            <span>|</span>
            <span>Domain: rdheyinfotech.in</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <p>
            At <strong>rdhey infotech</strong>, we strive to deliver high-performance IT Support and ITSM consultancy. Because 
            our services are customized and delivered digitally, we maintain clear guidelines regarding plan cancellations and refunds.
          </p>

          {/* Alert Box for Gateway Requirements */}
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-5 flex gap-4 items-start">
            <AlertCircle className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm text-slate-350">
              <h4 className="font-bold text-white">Important Notice for Refunds:</h4>
              <p>
                Approved refunds are processed automatically back to the <strong>original payment source</strong> used during checkout 
                (Credit/Debit Card, Net Banking, or UPI) through the <strong>Cashfree</strong> gateway API. Refunds will reflect 
                in your account within <strong>5 to 7 business days</strong>.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Cancellation of Monthly Support Plans</h2>
            <p>
              Clients subscribing to our recurring monthly packages (e.g. Starter Support at ₹4,999/mo or Business ITSM at ₹14,999/mo) 
              may cancel their plans under the following terms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Written Notice:</strong> Cancellations must be initiated by sending a written notice to 
                <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-400 hover:underline"> rdheyinfotechsolution@gmail.com</a> at least <strong>30 days prior</strong> to the next billing cycle.
              </li>
              <li>
                <strong>Prorated Adjustments:</strong> If a cancellation is requested mid-month, support will continue until the end of that billing month, and no prorated refund will be provided for that active month. No future recurring invoices will be generated.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Refunds on Project Setup / Cabling Services</h2>
            <p>
              For one-time infrastructure setups, LAN cabling, and server rack installations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Pre-execution Cancellations:</strong> If you cancel a scheduled physical setup project at least 48 hours before engineers arrive, any advanced payments will be refunded in full.
              </li>
              <li>
                <strong>Post-execution Cancellations:</strong> Once materials are ordered or physical installation has commenced, advanced payments are non-refundable to cover materials and logistics.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Discrepancies & Service Failures</h2>
            <p>
              In the rare event that rdhey infotech fails to meet the guaranteed SLA uptime or fails to assign a remote engineer to a critical 
              outage within 24 hours of ticket submission:
            </p>
            <p>
              Clients may request a billing credit or partial refund by lodging a query with our Grievance Officer at 
              <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-450 hover:underline"> rdheyinfotechsolution@gmail.com</a>. Each dispute is evaluated on an audit of our central ITSM ticket logs.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Transaction & Gateway Charges</h2>
            <p>
              Please note that convenience fees or gateway transaction charges levied by bank servers during checkout are non-refundable, 
              as these are collected directly by third-party processors.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 space-y-3">
            <h3 className="font-bold text-white">Refund Request Department</h3>
            <p className="text-xs text-slate-400">
              To request a cancellation or verify a pending refund transaction, please write to:
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 font-mono">
              <div><strong>Email:</strong> rdheyinfotechsolution@gmail.com</div>
              <div><strong>Office Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
