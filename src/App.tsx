import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/error-boundary";
import "./App.css";

// Lazy load page components
const Index = React.lazy(() => import("./pages/Index"));
const News = React.lazy(() => import("./pages/News"));
const ServicesPage = React.lazy(() => import("./pages/Services"));
const ContactPage = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const BloodhawkPrivacyPolicy = React.lazy(
  () => import("./pages/BloodhawkPrivacyPolicy"),
);
const XWriterPrivacyPolicy = React.lazy(
  () => import("./pages/XWriterPrivacyPolicy"),
);
const SparrowPrivacyPolicy = React.lazy(
  () => import("./pages/SparrowPrivacyPolicy"),
);
const XWriter = React.lazy(() => import("./pages/XWriter"));
const BloodHawk = React.lazy(() => import("./pages/BloodHawk"));
const Sparrow = React.lazy(() => import("./pages/Sparrow"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const BenderBot = React.lazy(() => import("./pages/BenderBot"));
const BenderBotPrivacyPolicy = React.lazy(
  () => import("./pages/BenderBotPrivacyPolicy"),
);
const BenderBotTermsOfService = React.lazy(
  () => import("./pages/BenderBotTermsOfService"),
);

// Loading component for suspense
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products/xwriter" element={<XWriter />} />
            <Route path="/products/bloodhawk" element={<BloodHawk />} />
            <Route path="/products/sparrow" element={<Sparrow />} />
            <Route
              path="/products/xwriter/privacy-policy"
              element={<XWriterPrivacyPolicy />}
            />
            <Route
              path="/products/bloodhawk/privacy-policy"
              element={<BloodhawkPrivacyPolicy />}
            />
            <Route
              path="/products/sparrow/privacy-policy"
              element={<SparrowPrivacyPolicy />}
            />
            <Route
              path="/bloodhawk/privacy-policy"
              element={<BloodhawkPrivacyPolicy />}
            />
            <Route path="/products/benderbot" element={<BenderBot />} />
            <Route
              path="/products/benderbot/privacy-policy"
              element={<BenderBotPrivacyPolicy />}
            />
            <Route
              path="/products/benderbot/terms-of-service"
              element={<BenderBotTermsOfService />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
