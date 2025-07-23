import { PageLayout } from "@/components/PageLayout";

export const BloodhawkPrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="prose lg:prose-xl max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1>Privacy Policy for BloodHawk</h1>
        <p>
          <strong>Last Updated:</strong> July 23, 2025
        </p>
        <p>
          Welcome to BloodHawk! This Privacy Policy explains how we collect,
          use, and protect your information when you use our mobile application.
        </p>
        <p>
          Your privacy is critically important to us. At BloodHawk, we have a
          few fundamental principles:
        </p>
        <ul>
          <li>
            We are thoughtful about the personal information we ask you to
            provide and the personal information that we collect about you
            through the operation of our services.
          </li>
          <li>
            We store personal information for only as long as we have a reason
            to keep it.
          </li>
          <li>
            We aim for full transparency on how we gather, use, and share your
            personal information.
          </li>
          <li>
            We do not save user-uploaded files or analysis results on our
            servers.
          </li>
        </ul>
        <h2>Information We Collect</h2>
        <h3>Information You Provide to Us</h3>
        <ul>
          <li>
            <strong>Uploaded Documents:</strong> When you upload a blood test
            report (image or PDF), the file is sent to our secure server for
            processing. We do not store these files on our servers after
            processing is complete. The analysis is performed in memory, and the
            results are sent directly back to your device.
          </li>
        </ul>
        <h3>Information We Collect Automatically</h3>
        <ul>
          <li>
            <strong>Anonymous User ID:</strong> We use Firebase Anonymous
            Authentication to create a unique, anonymous user ID for you. This
            ID is not linked to your real-world identity and is used to provide
            a continuous experience and manage your usage limits.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about your usage
            of the app, such as the number of uploads you perform. This data is
            associated with your anonymous user ID and helps us manage our
-            service and enforce usage limits. This includes:
            <ul>
              <li>Daily and monthly upload counts.</li>
              <li>The date of your last daily and monthly usage reset.</li>
            </ul>
          </li>
          <li>
            <strong>Analytics Data:</strong> We use PostHog for analytics to
            understand how our users interact with the app. This helps us
            improve the user experience. The data we collect includes:
            <ul>
              <li>
                <strong>Screen Views:</strong> Which screens you visit within
                the app.
              </li>
              <li>
                <strong>Interactions:</strong> Actions you take, such as tapping
                buttons or using features.
              </li>
              <li>
                <strong>Session Information:</strong> A unique session ID to
                group events within a single usage session.
              </li>
              <li>
                <strong>Device and App Information:</strong> Your device type
                (iOS, Android, web), app version, and theme preference
                (light/dark).
              </li>
            </ul>
            All analytics data is associated with your anonymous user ID. We do
            not track any Personally Identifiable Information (PII) or sensitive
            health data in our analytics.
          </li>
        </ul>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>
            <strong>To Provide and Maintain Our Service:</strong> We use the
            uploaded documents to perform the blood test analysis and deliver
            the results to you.
          </li>
          <li>
            <strong>To Improve Our App:</strong> We analyze usage and
            interaction data to understand what features are most popular and
            where we can make improvements.
          </li>
          <li>
            <strong>To Enforce Usage Limits:</strong> We track your upload
            counts to manage our free and premium service tiers.
          </li>
          <li>
            <strong>To Personalize Your Experience:</strong> We save your
            preferences, such as your preferred theme, on your device.
          </li>
        </ul>
        <h2>How We Share Your Information</h2>
        <p>
          We do not share your personal information with third parties, except
          in the limited circumstances described below:
        </p>
        <ul>
          <li>
            <strong>With Your Consent:</strong> We may share information with
            your consent.
          </li>
          <li>
            <strong>For Legal Reasons:</strong> We may disclose information if
            required by law, such as in response to a subpoena, court order, or
            other governmental request.
          </li>
          <li>
            <strong>To Protect Rights and Property:</strong> We may disclose
            information when we believe in good faith that disclosure is
            necessary to protect our rights, your safety, or the safety of
            others.
          </li>
        </ul>
        <h2>Data Storage and Security</h2>
        <ul>
          <li>
            <strong>On-Device Storage:</strong> Your analysis results are stored
            locally on your device. You have full control over this data and can
            delete it at any time through the app's settings.
          </li>
          <li>
            <strong>Server-Side Processing:</strong> As stated previously,
            uploaded files are processed in memory on our servers and are not
            stored. We use secure, encrypted connections (HTTPS) for all data
            transmission between your device and our servers.
          </li>
        </ul>
        <h2>Your Choices</h2>
        <ul>
          <li>
            <strong>Clearing Data:</strong> You can clear all your stored blood
            test data from your device at any time from the "Profile &
            Settings" screen in the app.
          </li>
          <li>
            <strong>Analytics:</strong> While we do not offer an opt-out for
            analytics at this time, we are committed to collecting only the data
            necessary to improve our service and ensuring it remains anonymous.
          </li>
        </ul>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at contact@fbot.dev.
        </p>
      </div>
    </PageLayout>
  );
};