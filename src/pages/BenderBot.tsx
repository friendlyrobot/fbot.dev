import PageLayout from "@/components/PageLayout";

const BenderBot = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Bender Bot
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            A friendly, no-nonsense Discord bot for server moderation, fun
            commands, and utility features
          </p>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is Bender Bot?
          </h2>
          <p>
            Bender Bot is a versatile Discord bot that helps server owners and
            moderators keep their communities running smoothly. From moderation
            tools to fun interactive commands, Bender Bot handles the busy work
            so you can focus on building your community.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How it works
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Invite Bender Bot to your Discord server with one click</li>
            <li>Configure permissions and customize settings to your liking</li>
            <li>Use slash commands or mention the bot to trigger features</li>
            <li>Set up automated moderation rules and welcome messages</li>
            <li>Let Bender Bot handle the rest while you relax</li>
          </ol>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Features
          </h2>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Moderation
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automated spam and raid protection</li>
            <li>Customizable auto-mod with keyword filters</li>
            <li>Kick, ban, mute, and warn commands</li>
            <li>Moderation action logging</li>
            <li>Role-based permission system</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Server Management
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom welcome and goodbye messages</li>
            <li>Reaction roles for self-assignable roles</li>
            <li>Server announcements and polls</li>
            <li>Member count tracking and statistics</li>
            <li>Scheduled messages and reminders</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Fun &amp; Utility
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Trivia games and word puzzles</li>
            <li>Random meme and image generation</li>
            <li>Music playback in voice channels</li>
            <li>Server economy and leveling system</li>
            <li>Custom command creation for your community</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Setup is Easy
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click the invite button below</li>
            <li>Select your Discord server</li>
            <li>Grant the necessary permissions</li>
            <li>Type /help to get started</li>
          </ol>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy &amp; Security
          </h2>
          <p>
            Bender Bot respects your server's privacy. We only collect data
            necessary for bot functionality (server IDs, channel IDs, user IDs
            for moderation actions). Message content is not stored. Read our
            full{" "}
            <a
              href="/products/benderbot/privacy-policy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/products/benderbot/terms-of-service"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Terms of Service
            </a>{" "}
            for complete details.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Add Bender Bot to Your Server
          </h2>
          <p>
            Ready to make your Discord server more fun and manageable? Add
            Bender Bot today.
          </p>
          <div className="mt-6">
            <a
              href="https://discord.com/oauth2/authorize"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Invite to Discord
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BenderBot;
