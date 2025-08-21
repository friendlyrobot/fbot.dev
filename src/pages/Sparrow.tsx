import PageLayout from "@/components/PageLayout";

const Sparrow = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sparrow Property Calculator
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Australia's smartest mortgage calculator with instant stamp duty for
            all states. Get ROI analysis & first home buyer savings in one app.
          </p>

          <div className="mt-8">
            <a
              href="https://apps.apple.com/app/sparrow-property-calculator/id6751142315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-8"
            >
              📱 Download on the App Store
            </a>
          </div>

          <div className="mt-8">
            <img
              src="/sparrow-preview.png"
              alt="Sparrow Property Calculator Interface"
              className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Australia's Most Comprehensive Property Calculator
          </h2>
          <p>
            Calculate mortgage payments, stamp duty, and investment returns
            instantly with Australia's smartest property calculator. Whether
            you're a first home buyer or seasoned investor, get the insights you
            need to make informed property decisions.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mortgage Calculator
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Weekly, monthly & annual payment breakdowns</li>
            <li>Interest-only vs principal & interest comparisons</li>
            <li>Total interest and loan cost calculations</li>
            <li>Deposit amount and loan-to-value ratio analysis</li>
            <li>Adjustable loan terms and interest rates</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Stamp Duty Calculator
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All Australian states and territories supported</li>
            <li>NSW, Victoria, Queensland, WA, SA, Tasmania, ACT & NT</li>
            <li>First home buyer concessions automatically applied</li>
            <li>Investment property surcharges included</li>
            <li>Instant total property cost calculations</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Investment Analysis
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time return on investment (ROI) calculations</li>
            <li>Annual rental income vs expenses breakdown</li>
            <li>Council rates and water rates factoring</li>
            <li>Positive vs negative gearing insights</li>
            <li>Cash flow analysis for property investors</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Clean, intuitive Neo-Brutal design</li>
            <li>Instant calculations as you type</li>
            <li>Australian currency formatting</li>
            <li>Data persistence across app sessions</li>
            <li>No ads, no subscriptions, no hidden costs</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Perfect For
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>First home buyers exploring affordability</li>
            <li>Property investors analyzing deals</li>
            <li>Mortgage holders comparing scenarios</li>
            <li>Real estate professionals and clients</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Built for Australia
          </h2>
          <p>
            Designed specifically for the Australian property market with
            accurate state-based stamp duty calculations and local property
            investment insights.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy & Security
          </h2>
          <p>
            Your financial information is important to us. Sparrow processes all
            calculations locally on your device, ensuring your sensitive
            financial data never leaves your phone. Read our full
            <a
              href="/products/sparrow/privacy-policy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {" "}
              Privacy Policy{" "}
            </a>
            for complete details.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Download Now
          </h2>
          <p>
            Take the guesswork out of property purchasing and investment
            decisions. Download Sparrow Property Calculator from the App Store
            today.
          </p>
          <div className="mt-6">
            <a
              href="https://apps.apple.com/app/sparrow-property-calculator/id6751142315"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              📱 Download on the App Store
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sparrow;
