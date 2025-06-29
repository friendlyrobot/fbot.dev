import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-brand-background text-brand-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-6 uppercase">
              Ready to Build Something That{" "}
              <span className="text-brand-secondary">Actually Works?</span>
            </h1>
            <p className="text-xl text-brand-foreground">
              Let's have an honest conversation about what you need (no sales
              pitch, we promise)
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-2xl w-full flex flex-col md:flex-row gap-8">
              <div className="bg-white border-4 border-black rounded-lg shadow-lg p-8 text-center flex-1">
                <h3 className="text-2xl font-semibold text-brand-foreground mb-6 uppercase">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <div className="font-semibold text-brand-foreground">
                        Email us:
                      </div>
                      <div className="text-brand-foreground">
                        contact@fbot.dev
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-brand-primary mr-4" />
                    <div>
                      <div className="font-semibold text-brand-foreground">
                        Based in:
                      </div>
                      <div className="text-brand-foreground">
                        Sydney, Australia
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-primary text-brand-foreground border-4 border-black rounded-lg p-8 text-center flex-1 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 uppercase">Our Promise</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-brand-foreground rounded-full mr-3"></span>
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-brand-foreground rounded-full mr-3"></span>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-brand-foreground rounded-full mr-3"></span>
                    <span>Australian Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/" className="text-brand-primary hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
