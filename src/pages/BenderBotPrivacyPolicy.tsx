import PageLayout from "@/components/PageLayout";

const BenderBotPrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Privacy Policy for Bender Bot
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <strong>Last Updated:</strong> June 18, 2026
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Overview
          </h2>
          <p>
            Bender Bot is a Discord bot that provides moderation, server
            management, and entertainment features. This Privacy Policy explains
            how we collect, use, and protect your information when Bender Bot is
            used on your Discord server.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Information We Collect
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Automatically Collected Information
          </h3>
          <ul>
            <li>
              <strong>Server IDs and Channel IDs:</strong> Used to identify
              where commands are issued and to store server-specific
              configuration settings.
            </li>
            <li>
              <strong>User IDs:</strong> Collected for moderation actions
              (kicks, bans, mutes, warnings) and to maintain per-user settings
              such as leveling progress and economy balances.
            </li>
            <li>
              <strong>Message Content:</strong> Processed in real-time for
              auto-moderation and command execution. Message content is not
              stored on our servers.
            </li>
            <li>
              <strong>Command Usage Data:</strong> We track which commands are
              used and how often to improve the bot and identify issues. This
              data is aggregated and not linked to individual users.
            </li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Information We Do NOT Collect
          </h3>
          <ul>
            <li>Personal email addresses</li>
            <li>Phone numbers</li>
            <li>Passwords or authentication credentials</li>
            <li>Private messages (DMs) sent between users</li>
            <li>Voice channel audio or recordings</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How We Use Your Information
          </h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain bot functionality</li>
            <li>Enforce server moderation rules and auto-mod settings</li>
            <li>Track server-specific settings and configurations</li>
            <li>Maintain economy and leveling systems per server</li>
            <li>Improve bot performance and fix bugs</li>
            <li>Generate anonymous, aggregated usage statistics</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Storage and Retention
          </h2>
          <p>
            Server configuration settings, moderation logs, and user-level data
            (economy balances, XP) are stored in secure databases. This data is
            retained for as long as the bot remains on your server.
          </p>
          <p>
            When Bender Bot is removed from a server, all server-specific data
            is automatically deleted within 30 days. You may also request
            immediate data deletion by contacting us.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Data Sharing
          </h2>
          <p>
            We do not sell, trade, or share your data with third parties. Data
            may be shared only in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> We use cloud hosting and
              database providers to operate the bot. These providers process
              data solely on our behalf.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose data if
              required by law or in response to valid legal requests.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Security
          </h2>
          <p>
            We implement appropriate technical measures to protect data against
            unauthorized access, alteration, or destruction. However, no method
            of transmission over the Internet is 100% secure.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              Request a copy of the data associated with your Discord server or
              user ID
            </li>
            <li>
              Request deletion of your server's data at any time (even while the
              bot remains active)
            </li>
            <li>
              Remove the bot from your server, which will trigger automatic data
              cleanup
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at contact@fbot.dev or join our
            support Discord server.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Children's Privacy
          </h2>
          <p>
            Bender Bot is not intended for use by children under 13. We do not
            knowingly collect personal information from children under 13. If
            you believe a child has provided us with personal data, please
            contact us.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            users of significant changes through our support Discord server.
            Continued use of the bot after changes constitutes acceptance of the
            updated policy.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Contact
          </h2>
          <p>For privacy-related questions or data requests, contact us at:</p>
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

export default BenderBotPrivacyPolicy;
