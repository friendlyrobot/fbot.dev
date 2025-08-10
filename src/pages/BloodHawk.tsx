import PageLayout from "@/components/PageLayout";

const BloodHawk = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            BloodHawk
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            AI-powered blood test analysis for better health insights
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is BloodHawk?
          </h2>
          <p>
            BloodHawk is a mobile app that helps you understand your blood test
            results using AI. Simply upload a photo or PDF of your blood test
            report, and get clear, actionable insights about your health markers
            in plain English.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How it works
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Take a photo of your blood test report or upload a PDF</li>
            <li>
              Our AI analyzes the results and identifies key health markers
            </li>
            <li>
              Get easy-to-understand explanations of what your results mean
            </li>
            <li>
              Receive personalized recommendations for improving your health
            </li>
            <li>Track your progress over time with multiple test uploads</li>
          </ol>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Features
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>AI-powered analysis of blood test results</li>
            <li>Support for photos and PDF uploads</li>
            <li>Clear explanations in plain English</li>
            <li>Personalized health recommendations</li>
            <li>Progress tracking over time</li>
            <li>Secure, private analysis</li>
            <li>No data stored on our servers</li>
            <li>Available on iOS (Android coming soon)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Supported Test Types
          </h2>
          <p>
            BloodHawk can analyze a wide variety of blood test reports,
            including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Complete Blood Count (CBC)</li>
            <li>Comprehensive Metabolic Panel (CMP)</li>
            <li>Lipid panels and cholesterol tests</li>
            <li>Thyroid function tests</li>
            <li>Liver function tests</li>
            <li>Kidney function tests</li>
            <li>Diabetes markers (glucose, HbA1c)</li>
            <li>Vitamin and mineral levels</li>
            <li>Hormone panels</li>
            <li>And many more standard blood tests</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy & Security
          </h2>
          <p>
            Your health data is precious, and we treat it that way. BloodHawk
            processes your blood test images in real-time and doesn't store them
            on our servers. All analysis happens securely, and your results are
            stored only on your device. Read our full{" "}
            <a
              href="/bloodhawk-privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>{" "}
            for complete details.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get BloodHawk
          </h2>
          <p>
            BloodHawk is currently available for iOS devices, with Android support coming soon.
            Start understanding your health better today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://apps.apple.com/app/bloodhawk/id6748911970"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download for iOS
            </a>
            <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-500 bg-gray-100 cursor-not-allowed">
              Android Coming Soon
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Important Disclaimer
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <strong>Medical Disclaimer:</strong> BloodHawk is for informational
            purposes only and is not intended to replace professional medical
            advice, diagnosis, or treatment. Always consult with a qualified
            healthcare provider about your health concerns and before making any
            medical decisions based on the information provided by this app.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default BloodHawk;
