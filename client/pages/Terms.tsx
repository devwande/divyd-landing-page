import { ArrowLeft, FileText, Shield, Scale } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="bg-surface/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <Scale className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Legal Documentation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear, transparent terms for our community. No hidden surprises,
              just honest guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Coming Soon Card */}
            <div className="glass-effect rounded-3xl p-12 border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <FileText className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Coming Soon
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Our comprehensive Terms of Service will be available when Spot
                launches. We're working with legal experts to ensure every
                detail protects both you and our community.
              </p>

              {/* Feature Preview */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface-card rounded-2xl p-6 border border-white/10">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    User Protection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Clear guidelines on data protection, privacy, and user
                    rights
                  </p>
                </div>

                <div className="bg-surface-card rounded-2xl p-6 border border-white/10">
                  <Scale className="w-8 h-8 text-success mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">
                    Fair Usage
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Transparent policies on platform usage and community
                    standards
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-surface-elevated rounded-2xl border border-white/10">
                <span className="text-muted-foreground text-sm">
                  📧 Want updates? Join our waitlist to be notified when our
                  terms are published
                </span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Questions about our upcoming terms?{" "}
                <a
                  href="mailto:legal@spotapp.ng"
                  className="text-primary hover:text-success transition-colors duration-300 font-medium"
                >
                  Contact our legal team
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
