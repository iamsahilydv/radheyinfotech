import React from "react";
import { Calendar, Monitor, Cpu } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy | rdhey infotech",
  description: "Read our Shipping & Delivery policy explaining how rdhey infotech delivers digital IT services and support solutions on rdheyinfotech.in.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16] font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Title */}
        <div className="border-b border-white/5 pb-8 mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Shipping & Delivery Policy</h1>
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
            This Shipping & Delivery Policy explains how services purchased on <strong>rdheyinfotech.in</strong> are provisioned 
            and delivered to our clients.
          </p>

          <p>
            Please read this policy carefully to understand delivery structures, timelines, and communication methods for 
            our IT services.
          </p>

          <hr className="border-white/5" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Monitor className="h-5.5 w-5.5 text-indigo-400" />
              1. Digital & Virtual Service Delivery
            </h2>
            <p>
              rdhey infotech offers Managed IT Support, ITSM help desk administration, cybersecurity audits, and cloud configuration. 
              <strong> These services are entirely digital in nature and do not require the shipping of physical goods.</strong>
            </p>
            <p>
              Upon verification of payment via our payment integration partner, <strong>Cashfree Payments</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Setup Time:</strong> Technical account setup, including ticket portal registration and remote agent installation links, will be processed and sent to your registered business email within <strong>24 to 48 hours</strong>.
              </li>
              <li>
                <strong>Email Confirmation:</strong> A payment confirmation invoice and a service activation notice will be sent automatically to your registered email address (e.g. from <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-400 hover:underline">rdheyinfotechsolution@gmail.com</a>).
              </li>
              <li>
                <strong>Access Delivery:</strong> User accounts, administrative dashboard links, and remote active directory credentials will be delivered electronically over secure channels.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="h-5.5 w-5.5 text-emerald-400" />
              2. On-Site Network Deployment Timelines
            </h2>
            <p>
              For physical network setups, cabling support, and server rack deployments:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Scheduling:</strong> Once project fees are confirmed, our scheduling team will contact you within <strong>24 hours</strong> to coordinate a deployment date.
              </li>
              <li>
                <strong>On-Site Dispatch:</strong> Technical field teams are dispatched to client locations within Bawal, Rewari, and Haryana corridors on the scheduled date.
              </li>
              <li>
                <strong>Materials:</strong> Any hardware routing nodes, switch modules, or cabling materials purchased through us will be hand-delivered by our technical crew during the scheduled on-site deployment day. No courier or postal delivery is used.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Shipping Costs</h2>
            <p>
              Since we do not dispatch physical products through public shipping systems, no shipping fees, handling taxes, or shipping tariffs 
              are charged on transactions processed on our checkout gateway.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Support & Delay Inquiries</h2>
            <p>
              If you experience a delay in receiving your service desk login portals, payment receipt, or technical credentials, 
              please contact us immediately at <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-400 hover:underline">rdheyinfotechsolution@gmail.com</a>. 
              Our service desk resolves support access queries within 4 hours.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 space-y-3">
            <h3 className="font-bold text-white">Delivery Support Desk</h3>
            <p className="text-xs text-slate-400">
              For any queries regarding setup or delivery timelines, please contact:
            </p>
            <div className="space-y-1.5 text-xs text-slate-500 font-mono">
              <div><strong>Email:</strong> rdheyinfotechsolution@gmail.com</div>
              <div><strong>Corporate Address:</strong> House No. 140, Vill Asalwas, Opp- Minda Camp, NH-48, Bawal, Rewari, Haryana, 123501</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
