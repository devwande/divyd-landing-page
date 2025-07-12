import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-error/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* 404 Display */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-gradient mb-4 leading-none">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </div>

        {/* Error Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-error/20 to-warning/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10">
          <Compass className="w-10 h-10 text-error" />
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        {/* Attempted Route Display */}
        {location.pathname !== "/" && (
          <div className="bg-surface-elevated rounded-2xl p-4 border border-white/10 mb-8 inline-block">
            <div className="text-sm text-muted-foreground mb-1">
              You tried to access:
            </div>
            <code className="text-error font-mono text-sm">
              {location.pathname}
            </code>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link
            to="/"
            className="group bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl glow-effect flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group bg-surface-elevated text-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 border border-white/10 hover:border-primary/30 flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="glass-effect rounded-3xl p-8 border border-white/10">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center">
            <Search className="w-5 h-5 text-primary mr-2" />
            Looking for something specific?
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/"
              className="group bg-surface-card rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="font-medium text-foreground mb-1">Homepage</div>
              <div className="text-sm text-muted-foreground">
                Learn about Spot and join our waitlist
              </div>
            </Link>

            <Link
              to="/privacy"
              className="group bg-surface-card rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-left"
            >
              <div className="font-medium text-foreground mb-1">
                Privacy Policy
              </div>
              <div className="text-sm text-muted-foreground">
                How we protect your data
              </div>
            </Link>
          </div>
        </div>

        {/* Fun Element */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Lost in the digital wilderness? Don't worry, it happens to the best
            of us! 🧭
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
