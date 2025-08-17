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
