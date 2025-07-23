import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import News from "./pages/News";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BloodhawkPrivacyPolicy } from "./pages/BloodhawkPrivacyPolicy";
import "./App.css";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/bloodhawk/privacy-policy"
          element={<BloodhawkPrivacyPolicy />}
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </TooltipProvider>
);

export default App;
