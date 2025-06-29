const News = () => {
  return (
    <div className="bg-brand-background text-brand-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Company News</h1>
        <div className="space-y-8">
          <div className="bg-brand-secondary p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-brand-primary mb-2">A New Beginning!</h2>
            <p className="text-brand-foreground-muted text-sm mb-4">January 26, 2017</p>
            <p className="text-brand-foreground leading-relaxed">
              We are thrilled to announce the founding of Friendly Robot on January 26, 2017! Our journey begins with a simple mission: to make technology more accessible, user-friendly, and genuinely helpful for everyone. We believe in building software that not only solves problems but also brings a sense of ease and delight to our users. The road ahead is exciting, and we can't wait to share our passion for innovation with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
