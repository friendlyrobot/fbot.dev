import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">
          Company News
        </h1>
        <div className="space-y-8">
          <div className="bg-brand-secondary p-6 rounded-lg shadow-md border-4 border-black">
            <h2 className="text-2xl font-bold text-brand-primary mb-2">
              New Home, Same Mission: Welcome to fbot.dev!
            </h2>
            <p className="text-brand-foreground-muted text-sm mb-4">
              June 30, 2025
            </p>
            <p className="text-brand-foreground leading-relaxed mb-4">
              We're excited to announce that Friendly Robot has officially
              migrated to our new domain: <strong>fbot.dev</strong>! This
              strategic move reflects our evolution as a technology company and
              our commitment to the developer community.
            </p>
            <p className="text-brand-foreground leading-relaxed mb-4">
              The new domain perfectly encapsulates who we are - friendly,
              approachable robots (bots) in the development (.dev) space. It's
              shorter, more memorable, and aligns with our mission to build
              developer-first solutions that are both powerful and
              user-friendly.
            </p>
            <p className="text-brand-foreground leading-relaxed">
              This transition represents more than just a URL change; it's a
              symbol of our growth and our dedication to serving the global
              developer community. All existing links will continue to work
              seamlessly, and you'll notice improved performance and enhanced
              security features on our new platform. Thank you for being part of
              our journey!
            </p>
          </div>
          <div className="bg-brand-secondary p-6 rounded-lg shadow-md border-4 border-black">
            <h2 className="text-2xl font-bold text-brand-primary mb-2">
              A New Beginning!
            </h2>
            <p className="text-brand-foreground-muted text-sm mb-4">
              January 26, 2017
            </p>
            <p className="text-brand-foreground leading-relaxed">
              We are thrilled to announce the founding of Friendly Robot on
              January 26, 2017! Our journey begins with a simple mission: to
              make technology more accessible, user-friendly, and genuinely
              helpful for everyone. We believe in building software that not
              only solves problems but also brings a sense of ease and delight
              to our users. The road ahead is exciting, and we can't wait to
              share our passion for innovation with the world.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/" className="text-brand-primary hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
