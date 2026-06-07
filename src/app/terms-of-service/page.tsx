import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Terms of Service | rdhey infotech",
  description: "Review the terms and conditions for using rdhey infotech IT services and subscribing to technical SLAs on rdheyinfotech.in.",
};

export default function TermsOfServicePage() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16] font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Title */}
        <div className="border-b border-white/5 pb-8 mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms of Service</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Last Updated: June 8, 2026
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
            Welcome to <strong>rdhey infotech</strong>! These Terms of Service outline the rules and regulations for the use of 
            rdhey infotech&apos;s Website and IT services, located at <Link href="/" className="text-indigo-400 hover:underline">https://rdheyinfotech.in</Link>.
          </p>

          <p>
            By accessing this website or purchasing our IT service support modules, we assume you accept these terms and conditions 
            in full. Do not continue to use rdheyinfotech.in if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <hr className="border-white/5" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope of Services</h2>
            <p>
              rdhey infotech provides IT Service Management (ITSM), remote desktop assistance, hardware diagnostic support, cloud management, 
              and network configurations. All services are governed by their respective Service Level Agreements (SLAs) as defined in 
              individual corporate maintenance contracts.
            </p>
            <p>
              Our services are delivered digitally through remote administration platforms or physically via engineering dispatch 
              to client premises, primarily within Bawal, Rewari, and the NCR region.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. User Accounts & Infrastructure Access</h2>
            <p>
              When you subscribe to our managed IT desk, we may require access credentials to client endpoints, active directory nodes, 
              or firewall logs. You represent that you have authorized access to provide such credentials.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of any administrative portal logins created for your team and 
              for all operations occurring under your corporate profile.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Billing & Payment Gateway</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Pricing Tiers:</strong> Service fees are charged based on the support tier selected (e.g. Starter Support at ₹4,999/mo, Business ITSM at ₹14,999/mo) and endpoint counts.
              </li>
              <li>
                <strong>Taxes:</strong> All fees are subject to 18% GST as per Indian statutory tax regulations.
              </li>
              <li>
                <strong>Payment Processing:</strong> Online invoice payments are processed securely through our payment integration gateway, <strong>Cashfree Payments</strong>.
              </li>
              <li>
                <strong>Late Fees:</strong> We reserve the right to suspend remote active directory hosting or support desk access if accounts remain overdue for more than 15 calendar days from the invoice date.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Refund & Cancellation Terms</h2>
            <p>
              Subscription support plans can be cancelled by providing a written 30-day notice. Details of billing adjustments and refund 
              eligibility are detailed separately in our <Link href="/refund-policy" className="text-indigo-400 hover:underline">Refund & Cancellation Policy</Link>.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Limitation of Liability</h2>
            <p>
              While rdhey infotech guarantees a 99.9% uptime SLA on our managed server nodes, we are not liable for business downtime, 
              revenue losses, or data breaches caused by client-side security modifications, third-party software bugs, or force majeure events.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, rdhey infotech and/or its licensors own the intellectual property rights for all material on rdheyinfotech.in. 
              All intellectual property rights are reserved. You must not republish, sell, rent, or sub-license material from this website.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any legal disputes or claims 
              arising out of or in connection with our services will be subject to the exclusive jurisdiction of the courts located in 
              <strong> Rewari, Haryana, India</strong>.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 space-y-3">
            <h3 className="font-bold text-white">Legal Inquiries</h3>
            <p className="text-xs text-slate-400">
              For any clarification regarding these terms, please contact:
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 font-mono">
              <div><strong>Company:</strong> rdhey infotech</div>
              <div><strong>Email:</strong> rdheyinfotechsolution@gmail.com</div>
              <div><strong>Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
