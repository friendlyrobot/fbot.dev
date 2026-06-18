import PageLayout from "@/components/PageLayout";

const BenderBotTermsOfService = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Terms of Service for Bender Bot
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> June 18, 2026
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By inviting and using Bender Bot ("the Bot") on your Discord server,
            you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use the Bot.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            2. Description of Service
          </h2>
          <p>
            Bender Bot is a Discord bot that provides moderation tools, server
            management features, entertainment commands, and utility functions.
            The Bot is provided "as is" and may be updated, modified, or
            discontinued at any time without prior notice.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            3. User Responsibilities
          </h2>
          <p>When using Bender Bot, you agree to:</p>
          <ul>
            <li>
              Comply with Discord's Terms of Service and Community Guidelines
            </li>
            <li>
              Not use the Bot for any illegal activities or to harass, abuse, or
              harm others
            </li>
            <li>
              Not attempt to exploit, reverse engineer, or disrupt the Bot's
              functionality
            </li>
            <li>
              Not use the Bot to distribute malware, spam, or unauthorized
              advertising
            </li>
            <li>
              Not overload the Bot with excessive or automated requests that
              degrade performance for other users
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            4. Server Owner Responsibilities
          </h2>
          <p>
            Server owners and administrators who add Bender Bot to their servers
            are responsible for:
          </p>
          <ul>
            <li>Configuring the Bot's permissions appropriately</li>
            <li>Informing server members about the Bot's data collection</li>
            <li>
              Ensuring the Bot's use complies with Discord's Terms of Service
            </li>
            <li>
              Managing moderation settings to prevent abuse of the Bot's
              features
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            5. Availability and Uptime
          </h2>
          <p>
            We strive to keep Bender Bot available 24/7, but we do not guarantee
            uninterrupted service. The Bot may be temporarily unavailable due to
            maintenance, updates, or technical issues. We are not liable for any
            damages resulting from service interruptions.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, Friendly Robot
            and its developers shall not be liable for any direct, indirect,
            incidental, special, or consequential damages arising from your use
            of, or inability to use, Bender Bot. This includes damages for loss
            of data, server disruption, or any other losses.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            7. Termination
          </h2>
          <p>
            We reserve the right to terminate or suspend access to Bender Bot
            for any server or user at any time, without prior notice, for
            conduct that we believe violates these Terms of Service or is
            harmful to other users, us, or third parties.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            8. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            We will post updates to this page and may notify users through our
            support channels. Continued use of the Bot after changes constitutes
            acceptance of the updated terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            9. Intellectual Property
          </h2>
          <p>
            Bender Bot, including its code, design, name, and associated
            content, is the intellectual property of Friendly Robot. You may not
            copy, modify, distribute, or create derivative works without our
            prior written consent.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            10. Governing Law
          </h2>
          <p>
            These Terms of Service shall be governed by the laws of New South
            Wales, Australia. Any disputes shall be resolved in the courts of
            New South Wales.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            11. Contact
          </h2>
          <p>
            For questions about these Terms of Service, please contact us at:
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

export default BenderBotTermsOfService;
