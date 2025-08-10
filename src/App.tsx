import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
const XWriter = React.lazy(() => import("./pages/XWriter"));

// Loading component for suspense
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const App = () => (
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
          <Route
            path="/products/xwriter/privacy-policy"
            element={<XWriterPrivacyPolicy />}
          />
          <Route
            path="/bloodhawk/privacy-policy"
            element={<BloodhawkPrivacyPolicy />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </TooltipProvider>
);

export default App;
