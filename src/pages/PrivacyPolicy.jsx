import SEO from "../components/SEO";

const sections = [
  {
    heading: "1. Information We Collect",
    body: "We collect personal information (such as name, email, phone number, and shipping details) when you place an order, subscribe to our newsletter, or reach out through support channels. We also gather non-personal usage data to improve our services and website experience.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "Your information helps us fulfil orders, provide tailored customer support, share product updates, and improve our offerings. We may send promotional emails, from which you can opt out at any time.",
  },
  {
    heading: "3. Data Security",
    body: "We use reasonable administrative, technical, and physical safeguards to protect your personal data. While we strive for best practices, no online method is 100% secure; therefore, we cannot guarantee absolute security.",
  },
  {
    heading: "4. Third-Party Services",
    body: "We may rely on trusted third-party logistics, analytics, and payment processors. These partners receive only the necessary information to perform their services and are obligated to protect it in line with contractual agreements.",
  },
  {
    heading: "5. Cookies & Tracking",
    body: "Our site may use cookies to remember preferences, analyse traffic, and deliver relevant content. You may adjust browser settings to refuse cookies, though some features may not function as intended.",
  },
  {
    heading: "6. Children’s Privacy",
    body: "Greate Awala products and content are intended for adults. We do not knowingly collect personal information from children under 16; please contact us if you believe a child has provided personal data so we can remove it.",
  },
  {
    heading: "7. Updates to This Policy",
    body: "We may update this Privacy Policy periodically. Changes will be posted on this page with a revised effective date. Continued use of our site indicates acceptance of the updated policy.",
  },
  {
    heading: "8. Contact Us",
    body: "For questions about this policy or your data, email support@greateawala.com or write to Greate Awala Pvt. Ltd., New Delhi, India.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 pt-20 pb-16 px-4">
      <SEO
        title="Privacy Policy | Greate Awala"
        description="Review the Greate Awala privacy policy to understand how we collect, use, and protect your personal information when you shop with us."
        keywords="greate awala privacy policy, data protection, amla products privacy"
        url="https://greateawala.com/privacy-policy"
      />

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Effective date: {new Date().getFullYear()}.</p>
          <p className="mt-3 text-base text-gray-600">
            At Greate Awala, we value your trust. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our wellness products and services.
          </p>
        </header>

        <section className="space-y-10">
          {sections.map(({ heading, body }) => (
            <article key={heading} className="border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#b7651a] mb-3">{heading}</h2>
              <p className="text-gray-600 leading-7">{body}</p>
            </article>
          ))}
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          <p>
            This document is provided for informational purposes only and does not create contractual obligations. We encourage you to review this page regularly for updates.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

