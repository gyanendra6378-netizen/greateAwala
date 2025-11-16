import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 pt-24 pb-16 px-4">
      <SEO
        title="Privacy Policy | Greate Awala"
        description="Read how Greate Awala collects, uses, and protects your personal data when you browse our website and purchase Amla products."
        keywords="privacy policy, data protection, cookies, personal data, Greate Awala"
        url="https://myawala.com/privacy-policy"
        image="https://myawala.com/bg-1.png"
      />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Greate Awala</strong> (“we”, “our”, “us”). We are
              committed to protecting your privacy and handling your personal
              data in a transparent and secure manner. This Privacy Policy
              explains how we collect, use, store, and share information when
              you visit our website, create an account, or purchase our Amla
              products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Account &amp; Contact Details:</strong> name, email
                address, phone number, shipping and billing addresses.
              </li>
              <li>
                <strong>Order &amp; Payment Information:</strong> order
                history, cart details, transaction totals. Payment card details
                are processed securely by our payment gateway and are not
                stored by Greate Awala.
              </li>
              <li>
                <strong>Usage Data:</strong> pages visited, time spent on
                pages, clicks, and technical information such as browser type,
                device type, and IP address.
              </li>
              <li>
                <strong>Communication Data:</strong> messages you send via
                contact forms, email, or other support channels.
              </li>
              <li>
                <strong>Marketing Preferences:</strong> your newsletter
                subscription status and consent choices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process and deliver your orders.</li>
              <li>
                Manage your account, cart, and order history.
              </li>
              <li>
                Communicate with you about orders, support requests, and
                important updates.
              </li>
              <li>
                Send marketing emails and offers (only if you have opted in,
                and you can unsubscribe at any time).
              </li>
              <li>
                Improve our website, products, and customer experience through
                analytics.
              </li>
              <li>
                Detect, prevent, and address fraud or security issues.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p className="mb-2">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Keep your cart and session active.</li>
              <li>Remember your preferences (language, consent, etc.).</li>
              <li>
                Analyze website traffic and performance (for example, via
                analytics tools).
              </li>
              <li>
                Show relevant offers or ads, where applicable.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings, but
              disabling essential cookies may affect the functionality of the
              website (such as login or checkout).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Payments &amp; Third‑Party Services
            </h2>
            <p className="mb-2">
              We may use trusted third‑party providers to process payments,
              manage analytics, send emails, or host infrastructure.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Payment Gateways:</strong> handle card and UPI
                payments on their secure servers. We do not store your full
                payment card details.
              </li>
              <li>
                <strong>Analytics &amp; Marketing Tools:</strong> may collect
                anonymized or pseudonymized usage data to help us understand
                how the site is used.
              </li>
            </ul>
            <p className="mt-2">
              These providers process your data in accordance with their own
              privacy policies and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Legal Basis &amp; Data Retention
            </h2>
            <p className="mb-2">
              Where required by law, we rely on one or more of the following
              legal bases to process your data:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performance of a contract (e.g., fulfilling your order).</li>
              <li>
                Your consent (e.g., for marketing communications and certain
                cookies).
              </li>
              <li>
                Legitimate interests (e.g., improving our services, preventing
                fraud).
              </li>
              <li>Compliance with legal obligations.</li>
            </ul>
            <p className="mt-2">
              We retain your data only for as long as necessary for the
              purposes described in this policy or as required by law (for
              example, tax and accounting records).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              7. How We Protect Your Data
            </h2>
            <p>
              We use appropriate technical and organizational measures to
              protect your personal data, including encryption where suitable,
              restricted access, and secure hosting. However, no method of
              transmission over the internet is 100% secure, so we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              8. Your Rights
            </h2>
            <p className="mb-2">
              Depending on your location and applicable law, you may have the
              right to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, where applicable.</li>
              <li>Object to or restrict certain types of processing.</li>
              <li>Withdraw consent at any time, where processing is based on consent.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us using the details
              below. We may need to verify your identity before responding to
              certain requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our website and products are not directed to children under the
              age of 13 (or other age as defined by local law). We do not
              knowingly collect personal data from children. If you believe a
              child has provided us with personal information, please contact
              us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              10. International Transfers
            </h2>
            <p>
              Our services may be operated from or rely on servers located in
              different countries. Where data is transferred across borders, we
              take steps to ensure an appropriate level of protection in
              accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or for other
              operational reasons. When we do, we will update the &quot;Last
              updated&quot; date at the top of this page. We encourage you to
              review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              12. Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy or how we
              handle your data, you can contact us at:
            </p>
            <ul className="list-none pl-0 space-y-1 text-sm">
              <li>
                <strong>Email:</strong> gyanendra9506@gmail.com
              </li>
              <li>
                <strong>Support email:</strong> shubhamyadav0533@gmail.com
              </li>
              <li>
                <strong>Address:</strong> Greate Awala Pvt. Ltd., New Delhi,
                India
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;


