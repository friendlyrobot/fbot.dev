import PageLayout from "@/components/PageLayout";

const SparrowPrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Privacy Policy for Calculating Sparrow
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last updated: January 2025</strong>
          </p>

          <p>
            This Privacy Policy describes how Calculating Sparrow ("we", "our",
            or "us") collects, uses, and protects your information when you use
            our mobile application.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Information We Collect
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Data You Provide
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Calculator Inputs</strong>: Property prices, interest
              rates, loan terms, deposit amounts, rental income, and other
              financial data you enter into the app
            </li>
            <li>
              <strong>Settings Preferences</strong>: Your app configuration
              choices and saved calculations
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
            Automatically Collected Data
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Usage Analytics</strong>: We collect anonymous usage data
              through Firebase Analytics to understand how our app is used,
              including:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Screen views and navigation patterns</li>
                <li>Feature usage (calculator interactions, button taps)</li>
                <li>App performance metrics</li>
                <li>Crash reports for debugging purposes</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
            Data We Do NOT Collect
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Personal identifying information (name, email, phone number)
            </li>
            <li>Location data</li>
            <li>Contact information</li>
            <li>Financial account details</li>
            <li>Social media profiles</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Local Data Storage
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All calculator inputs and settings are stored locally on your
              device using iOS AppStorage
            </li>
            <li>
              This data never leaves your device and is not transmitted to our
              servers
            </li>
            <li>You can reset all stored data through the Settings tab</li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
            Analytics Usage
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Anonymous usage data helps us improve app functionality</li>
            <li>
              We analyze user interaction patterns to enhance user experience
            </li>
            <li>Performance data helps us identify and fix bugs</li>
            <li>No personal identification is possible from this data</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Sharing and Disclosure
          </h2>

          <p>We do NOT:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Sell your personal information to third parties</li>
            <li>Share your calculator data with anyone</li>
            <li>Use your data for advertising purposes</li>
            <li>Transfer data outside of necessary analytics services</li>
          </ul>

          <p className="mt-4">
            We only share anonymous, aggregated usage statistics with:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Firebase Analytics</strong>: Google's analytics service
              for app improvement (data is anonymized)
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Security
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All personal calculator data remains on your device</li>
            <li>
              We use industry-standard security measures for any data
              transmission
            </li>
            <li>Firebase Analytics data is encrypted in transit and at rest</li>
            <li>We regularly review and update our security practices</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Rights and Choices
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Data Control
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Local Data</strong>: You can reset all stored calculator
              data through the app's Settings
            </li>
            <li>
              <strong>Analytics</strong>: You cannot opt out of anonymous usage
              analytics, but this data contains no personal information
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
            Data Retention
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Local data is retained until you delete the app or reset settings
            </li>
            <li>
              Analytics data is retained according to Firebase Analytics
              policies (typically 26 months)
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Children's Privacy
          </h2>
          <p>
            This app is designed for users 13 years and older. We do not
            knowingly collect personal information from children under 13. If
            you believe we have inadvertently collected such information, please
            contact us immediately.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Third-Party Services
          </h2>
          <p>This app uses:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Firebase Analytics</strong>: For anonymous usage tracking
              (Google Privacy Policy applies)
            </li>
            <li>
              <strong>iOS AppStorage</strong>: For local data persistence (Apple
              Privacy Policy applies)
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Changes to This Privacy Policy
          </h2>
          <p>We may update this Privacy Policy periodically. When we do:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>The "Last updated" date will be revised</li>
            <li>Material changes will be communicated through app updates</li>
            <li>Continued use of the app constitutes acceptance of changes</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Australian Privacy Compliance
          </h2>
          <p>
            This app complies with the Australian Privacy Principles (APPs)
            under the Privacy Act 1988. As we collect minimal data and store
            most information locally on your device, privacy risks are
            minimized.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices:
          </p>
          <p>
            <strong>Email</strong>: contact@fbot.dev
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Minimization Commitment
          </h2>
          <p>
            We believe in collecting only the minimum data necessary to provide
            our service. Most of your financial calculations remain private on
            your device, ensuring your sensitive financial information stays
            secure.
          </p>

          <hr className="my-8 border-gray-300 dark:border-gray-600" />

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            This privacy policy is designed to be transparent about our minimal
            data collection practices while ensuring you understand how
            Calculating Sparrow protects your privacy.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SparrowPrivacyPolicy;
