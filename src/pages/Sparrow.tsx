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
            Comprehensive mortgage calculator designed specifically for
            Australian property investors
          </p>

          <div className="mt-8">
            <img
              src="/sparrow-preview.png"
              alt="Sparrow Property Calculator Interface"
              className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is Sparrow Property Calculator?
          </h2>
          <p>
            Sparrow is a comprehensive property calculator built specifically
            for Australian property markets. Whether you're a first-time buyer
            or seasoned investor, Sparrow helps you make informed decisions with
            accurate calculations tailored to Australian lending practices and
            regulations.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Mortgage Calculator:</strong> Calculate repayments with
              Australian-specific loan terms and interest rates
            </li>
            <li>
              <strong>Return on Investment (ROI) Calculator:</strong> Analyze
              rental yields and capital growth potential
            </li>
            <li>
              <strong>Stamp Duty Calculator:</strong> Accurate calculations for
              all Australian states and territories
            </li>
            <li>
              <strong>Property Investment Analysis:</strong> Compare multiple
              properties side-by-side
            </li>
            <li>
              <strong>Cash Flow Projections:</strong> Detailed analysis of
              ongoing costs and returns
            </li>
            <li>
              <strong>First Home Buyer Grants:</strong> Factor in state-based
              incentives and concessions
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mortgage Calculator
          </h2>
          <p>
            Our mortgage calculator accounts for Australian lending standards
            including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Principal and interest vs interest-only repayments</li>
            <li>Weekly, fortnightly, and monthly payment options</li>
            <li>Extra repayment scenarios and offset account benefits</li>
            <li>Lenders Mortgage Insurance (LMI) calculations</li>
            <li>Variable and fixed rate options</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ROI Calculator
          </h2>
          <p>
            Make smart investment decisions with our comprehensive ROI analysis:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rental yield calculations (gross and net)</li>
            <li>Capital growth projections</li>
            <li>Tax implications and depreciation benefits</li>
            <li>Negative gearing scenarios</li>
            <li>Total return on investment over time</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Stamp Duty Calculator
          </h2>
          <p>
            Accurate stamp duty calculations for all Australian jurisdictions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              State-specific duty rates for NSW, VIC, QLD, WA, SA, TAS, ACT, NT
            </li>
            <li>First home buyer concessions and exemptions</li>
            <li>Foreign buyer additional duty calculations</li>
            <li>Off-the-plan purchase concessions</li>
            <li>Investment property vs owner-occupier rates</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Who Should Use Sparrow?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>First Home Buyers:</strong> Understanding true costs and
              available government incentives
            </li>
            <li>
              <strong>Property Investors:</strong> Analyzing potential returns
              and cash flow scenarios
            </li>
            <li>
              <strong>Real Estate Professionals:</strong> Providing accurate
              calculations to clients
            </li>
            <li>
              <strong>Financial Advisors:</strong> Supporting client property
              investment strategies
            </li>
            <li>
              <strong>Property Developers:</strong> Calculating costs for
              marketing and sales
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Australian Property Market Focus
          </h2>
          <p>
            Sparrow is specifically designed for the Australian property market,
            incorporating:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>APRA lending guidelines and serviceability requirements</li>
            <li>State and territory government schemes and incentives</li>
            <li>Australian Taxation Office (ATO) depreciation schedules</li>
            <li>Reserve Bank of Australia (RBA) interest rate trends</li>
            <li>Local council rates and charges</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy & Security
          </h2>
          <p>
            Your financial information is important to us. Sparrow processes all
            calculations locally in your browser, ensuring your sensitive
            financial data never leaves your device. Read our full
            <a
              href="/products/sparrow/privacy-policy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>{" "}
            for complete details.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get Started
          </h2>
          <p>
            Sparrow Property Calculator is available as a web application. Start
            making informed property decisions today with calculations you can
            trust.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Launch Calculator
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sparrow;
