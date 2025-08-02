import { ArrowLeft, Lock, Eye, Shield, Database } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                Divyd
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-float"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <Lock className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Your Data, Your Control
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy matters to us. Here's how we protect, respect, and
              handle your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Privacy Principles */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Data Protection
                </h3>
                <p className="text-muted-foreground">
                  Military-grade encryption for all your financial data and
                  personal information.
                </p>
              </div>

              <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Transparency
                </h3>
                <p className="text-muted-foreground">
                  Clear, simple explanations of what data we collect and why we
                  need it.
                </p>
              </div>

              <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-info to-success rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Minimal Data
                </h3>
                <p className="text-muted-foreground">
                  We only collect what's absolutely necessary for Divyd to work
                  perfectly.
                </p>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="glass-effect rounded-3xl p-12 border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Lock className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">
                Detailed Privacy Policy Coming Soon
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                We're working with privacy experts and legal professionals to
                create a comprehensive privacy policy that puts you in control.
                Complete details will be available before public release.
              </p>

              {/* What to Expect */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-surface-elevated rounded-2xl p-6 border border-white/10 text-left">
                  <h4 className="font-semibold text-foreground mb-3">
                    🔐 What We'll Cover
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• How we collect and use your data</li>
                    <li>• Your rights and controls</li>
                    <li>• Data sharing policies</li>
                    <li>• International data transfers</li>
                  </ul>
                </div>

                <div className="bg-surface-elevated rounded-2xl p-6 border border-white/10 text-left">
                  <h4 className="font-semibold text-foreground mb-3">
                    🛡️ Our Commitments
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• GDPR and local compliance</li>
                    <li>• No selling of personal data</li>
                    <li>• Right to delete your data</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
              </div>

              <div className="inline-flex items-center px-6 py-3 bg-surface-card rounded-2xl border border-white/10">
                <span className="text-muted-foreground text-sm">
                  💚 Privacy-first approach baked into every feature we build
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Privacy questions or concerns?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="mailto:privacy@Divydapp.ng"
                  className="text-primary hover:text-success transition-colors duration-300 font-medium flex items-center space-x-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>privacy@Divydapp.ng</span>
                </a>
                <span className="text-muted-foreground hidden sm:block">•</span>
                <a
                  href="mailto:dpo@Divydapp.ng"
                  className="text-primary hover:text-success transition-colors duration-300 font-medium flex items-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>Data Protection Officer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
