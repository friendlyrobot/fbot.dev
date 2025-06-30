import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-brand-foreground">404</h1>
          <p className="text-xl text-brand-foreground mb-4">
            Oops! Page not found
          </p>
          <a href="/" className="text-brand-primary hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
