import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> June 18, 2026
          </p>

          <p>
            Friendly Robot ("we," "our," or "us") is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            fbot.dev.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Information We Collect
          </h2>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
            Information You Provide to Us
          </h3>
          <p>
            We may collect personal information that you voluntarily provide
            when you:
          </p>
          <ul>
            <li>Contact us via email at contact@fbot.dev</li>
            <li>Submit an inquiry through our website</li>
            <li>Sign up for any newsletters or updates</li>
          </ul>
          <p>
            The personal information we collect may include your name, email
            address, company name, and any other information you choose to
            provide in your message.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">
            Information Collected Automatically
          </h3>
          <p>
            When you visit our website, we may automatically collect certain
            information about your device and usage, including:
          </p>
          <ul>
            <li>
              <strong>Log Data:</strong> IP address, browser type, operating
              system, referring URLs, pages visited, and time stamps.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We may use
              cookies and similar tracking technologies to enhance your browsing
              experience and analyze website traffic. You can control cookies
              through your browser settings.
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>
              Improve our website and services based on usage patterns and
              feedback
            </li>
            <li>
              Communicate with you about our services, updates, and promotional
              offers (with your consent)
            </li>
            <li>Analyze website traffic and user behavior</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How We Share Your Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information in the following
            circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We may share information with
              third-party vendors who perform services on our behalf, such as
              hosting, analytics, and email delivery.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required to do so by law or in response to valid
              legal requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Retention
          </h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at
            contact@fbot.dev.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these external
            sites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date. Your continued use of the
            website after changes are posted constitutes acceptance of the
            updated policy.
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            <strong>Email:</strong> contact@fbot.dev
            <br />
            <strong>Location:</strong> Sydney, Australia
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
