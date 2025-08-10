import PageLayout from "@/components/PageLayout";

const XWriter = () => {
  return (
    <PageLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            XWriter
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            AI-powered writing assistant for X (formerly Twitter)
          </p>

          <div className="mt-8">
            <img 
              src="/xwriter-preview.png" 
              alt="XWriter Chrome Extension Interface" 
              className="w-full max-w-3xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What is XWriter?
          </h2>
          <p>
            XWriter is a Chrome extension that helps you write better posts and replies for X (formerly Twitter). 
            Just enter a topic or draft, choose a writing style, and let AI help you create engaging content.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How it works
          </h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Write a topic or draft your post in the XWriter panel</li>
            <li>Choose from different writing styles (professional, casual, witty, etc.)</li>
            <li>Select a format (post, thread, reply)</li>
            <li>Let AI generate improved content</li>
            <li>Copy and paste to X or edit further as needed</li>
          </ol>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Features
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Multiple writing styles to match your voice</li>
            <li>Different formats for posts, threads, and replies</li>
            <li>Real-time AI generation</li>
            <li>Works directly in your browser</li>
            <li>No data stored on our servers</li>
            <li>Simple and intuitive interface</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Writing Style Guide
          </h2>
          <p>
            Our AI follows a specific style guide to create natural-sounding posts:
          </p>
          
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            No emoji, ASCII instead
          </h3>
          <p>
            We use ASCII characters like :) instead of emoji to keep things simple.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Simple language
          </h3>
          <p>
            Plain text with short sentences works best. For example: "I need help with this issue."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Avoid AI giveaways
          </h3>
          <p>
            Skip clichés like "dive into" or "unleash your potential." We focus on direct communication.
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Be direct and concise
          </h3>
          <p>
            Get to the point quickly. Remove unnecessary words. For example: "We should meet tomorrow."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Natural tone
          </h3>
          <p>
            Write like you speak. It's okay to start sentences with "and" or "but." For example: "And that's why it matters."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            No marketing language
          </h3>
          <p>
            We avoid hype and promotional words. Instead of "revolutionary," we say "this can help you."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Keep it real
          </h3>
          <p>
            Honest communication is best. For example: "I don't think that's the best idea."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Simple grammar
          </h3>
          <p>
            Perfect grammar isn't required. It's fine to write "i guess we can try that."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            No fluff
          </h3>
          <p>
            Skip unnecessary adjectives and adverbs. For example: "We finished the task."
          </p>

          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Clarity focus
          </h3>
          <p>
            Clear messages are our goal. For example: "Please send the file by Monday."
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Privacy
          </h2>
          <p>
            XWriter respects your privacy. We don't store your content on our servers. All processing happens 
            in real-time, and your data is not retained. Read our full 
            <a href="/xwriter/privacy-policy" className="text-blue-600 hover:underline dark:text-blue-400">
              Privacy Policy
            </a> for details.
          </p>

          <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get XWriter
          </h2>
          <p>
            XWriter is available as a Chrome extension. Install it from the Chrome Web Store to start 
            writing better posts today.
          </p>
          <div className="mt-6">
            <a 
              href="https://chrome.google.com/webstore/detail/xwriter" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Install Extension
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default XWriter;