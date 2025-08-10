import PageLayout from "@/components/PageLayout";

export const XWriterPrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Privacy Policy for XWriter
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> August 10, 2025
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Overview
          </h2>
          <p>
            XWriter is a browser extension that helps users generate AI-powered
            content for X (formerly Twitter) posts. This Privacy Policy explains
            how we collect, use, and protect your information when you use our
            extension.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Information We Collect
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Automatically Collected Information
          </h3>
          <ul>
            <li>
              <strong>Device Identifier</strong>: We generate a unique,
              anonymous device ID (UUIDv7 format) to authenticate your extension
              with our services
            </li>
            <li>
              <strong>Authentication Tokens</strong>: Temporary JWT tokens are
              stored locally to maintain your session
            </li>
            <li>
              <strong>Usage Data</strong>: Basic extension usage patterns for
              service improvement
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            User-Provided Information
          </h3>
          <ul>
            <li>
              <strong>Content Prompts</strong>: Text you enter to generate posts
              (processed temporarily, not stored permanently)
            </li>
            <li>
              <strong>Style Preferences</strong>: Your selected writing styles
              and post formats
            </li>
            <li>
              <strong>Generated Content</strong>: AI-generated posts are created
              in real-time and not stored on our servers
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Core Functionality
          </h3>
          <ul>
            <li>Authenticate your extension with our secure API</li>
            <li>Generate AI-powered post suggestions based on your prompts</li>
            <li>Maintain your session across browser restarts</li>
            <li>Provide personalized writing style recommendations</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Service Improvement
          </h3>
          <ul>
            <li>Analyze usage patterns to improve AI generation quality</li>
            <li>Monitor system performance and reliability</li>
            <li>Debug technical issues and enhance user experience</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Storage and Security
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Local Storage
          </h3>
          <ul>
            <li>
              <strong>Device ID</strong>: Stored in your browser's localStorage
            </li>
            <li>
              <strong>JWT Tokens</strong>: Stored locally with automatic
              expiration (refreshed every hour)
            </li>
            <li>
              <strong>User Preferences</strong>: Stored locally in your browser
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            External Services
          </h3>
          <ul>
            <li>
              <strong>Authentication</strong>: Secure JWT token management via
              `auth.fbot.dev`
            </li>
            <li>
              <strong>AI Generation</strong>: Content processing via our
              Cloudflare Workers API
            </li>
            <li>
              <strong>Encryption</strong>: All data transmission uses HTTPS
              encryption
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Data Retention
          </h3>
          <ul>
            <li>
              <strong>Prompts</strong>: Not stored permanently; processed in
              real-time only
            </li>
            <li>
              <strong>Generated Content</strong>: Not stored on our servers
            </li>
            <li>
              <strong>Authentication Data</strong>: JWT tokens expire
              automatically within hours
            </li>
            <li>
              <strong>Device ID</strong>: Persists locally until extension is
              uninstalled
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Third-Party Services
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            OpenAI Integration
          </h3>
          <ul>
            <li>
              We use OpenAI's API to generate content based on your prompts
            </li>
            <li>
              Your prompts are sent to OpenAI for processing but are not stored
              by us
            </li>
            <li>OpenAI's privacy policy applies to this data processing</li>
            <li>
              Generated content is returned to you and not retained by our
              services
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Cloudflare Workers
          </h3>
          <ul>
            <li>Our API runs on Cloudflare's infrastructure</li>
            <li>
              Cloudflare may process request data according to their privacy
              policy
            </li>
            <li>
              No personal information is permanently stored in Cloudflare
              systems
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Rights and Choices
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Data Control
          </h3>
          <ul>
            <li>
              <strong>Access</strong>: You can view all locally stored data in
              your browser's developer tools
            </li>
            <li>
              <strong>Deletion</strong>: Uninstalling the extension removes all
              local data
            </li>
            <li>
              <strong>Opt-out</strong>: You can stop using the extension at any
              time
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Browser Permissions
          </h3>
          <ul>
            <li>
              <strong>Host Permissions</strong>: Required only for
              authentication and API access
            </li>
            <li>
              <strong>Alarms</strong>: Used solely for automatic token refresh
              to maintain your session
            </li>
            <li>
              <strong>Side Panel</strong>: Provides the extension's user
              interface
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Sharing
          </h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties except:
          </p>
          <ul>
            <li>
              <strong>Service Providers</strong>: OpenAI for AI content
              generation (as described above)
            </li>
            <li>
              <strong>Legal Requirements</strong>: If required by law or to
              protect our rights
            </li>
            <li>
              <strong>Security</strong>: To prevent fraud or abuse of our
              services
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Children's Privacy
          </h2>
          <p>
            XWriter is not intended for users under 13 years of age. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            International Users
          </h2>
          <p>
            Our services are hosted in the United States. By using XWriter, you
            consent to the transfer of your information to the United States.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            posted with an updated "Last Updated" date. Continued use of the
            extension after changes constitutes acceptance of the updated
            policy.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <p>
            For questions about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email</strong>: contact@fbot.dev
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical Details
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Authentication Flow
          </h3>
          <ol>
            <li>Extension generates anonymous device ID</li>
            <li>Device ID is used to obtain JWT token from auth service</li>
            <li>JWT token authenticates API requests</li>
            <li>Tokens are automatically refreshed every hour</li>
            <li>No personal identifying information is required</li>
          </ol>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Data Minimization
          </h3>
          <ul>
            <li>
              We collect only the minimum data necessary for functionality
            </li>
            <li>
              Content prompts are processed in real-time without permanent
              storage
            </li>
            <li>Authentication uses anonymous device identifiers</li>
            <li>
              No tracking cookies or persistent identifiers beyond functional
              requirements
            </li>
          </ul>

          <hr className="my-12" />

          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            This privacy policy is designed to be transparent about our data
            practices while ensuring XWriter can provide its core AI-powered
            content generation functionality.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
