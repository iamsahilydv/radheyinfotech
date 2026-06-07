import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | rdhey infotech",
  description: "Read our privacy policy outlining how rdhey infotech collects, protects, and manages customer information on rdheyinfotech.in.",
};

export default function PrivacyPolicyPage() {

  return (
    <div className="relative pt-24 pb-20 overflow-hidden bg-[#090d16] font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Title */}
        <div className="border-b border-white/5 pb-8 mb-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
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
            At <strong>rdhey infotech</strong>, accessible from <Link href="/" className="text-indigo-400 hover:underline">https://rdheyinfotech.in</Link>, 
            one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of 
            information that is collected and recorded by rdhey infotech and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us 
            at <a href="mailto:rdheyinfotechsolution@gmail.com" className="text-indigo-400 hover:underline">rdheyinfotechsolution@gmail.com</a>.
          </p>

          <hr className="border-white/5" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>
                <strong>Direct Communications:</strong> If you contact us directly via email or our contact page forms, we may receive additional information about you such as your name, email address, phone number, company name, and the contents of the message or attachments you may send us.
              </li>
              <li>
                <strong>Invoicing and Transaction Details:</strong> When you purchase or subscribe to our IT services, we collect invoicing details (GSTIN, company name, address) and transition logs. We do <em>not</em> store your payment card numbers on our servers; all payments are processed securely by our certified aggregator, <strong>Cashfree Payments</strong>.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Provide, operate, and maintain our IT service desk and network solutions.</li>
              <li>Improve, personalize, and expand our website features and service packages.</li>
              <li>Understand and analyze how you interact with our website and support tools.</li>
              <li>Develop new services, service level configurations, and technical utilities.</li>
              <li>Communicate with you, either directly or through one of our support partners, to provide you with updates and other information relating to the service desk, and for marketing and promotional purposes.</li>
              <li>Send you invoicing updates, transactional alerts, and support tickets.</li>
              <li>Find and prevent fraudulent actions and system crashes.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Log Files & Analytics</h2>
            <p>
              rdhey infotech follows a standard procedure of using log files. These files log visitors when they visit websites. 
              The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
              date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information 
              that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking 
              users&apos; movement on the website, and gathering demographic information.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, rdheyinfotech.in uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; 
              preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the 
              users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Data Protection Rights (GDPR / Indian IT Act 2000)</h2>
            <p>We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data stored with us.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain billing conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Third-Party Integrations & Gateways</h2>
            <p>
              Our website links to third-party payment aggregation tools (specifically, <strong>Cashfree Payments</strong>) to process billing. 
              These third-party tools use security measures including SSL encryption and tokenized transactions. We advise you to consult 
              the respective Privacy Policies of these third-party payment servers for more detailed information.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-6 space-y-3">
            <h3 className="font-bold text-white">Data Controller Contact</h3>
            <p className="text-xs text-slate-400">
              For any request concerning data corrections, removal, or compliance reports, please contact:
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
