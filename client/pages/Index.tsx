import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Smartphone,
  Users,
  Bell,
  CreditCard,
  Twitter,
  Instagram,
  Star,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/90 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </div>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-gradient-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl glow-effect"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-20 pb-20 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-success/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Nigeria's first social payment app
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Split bills.</span>
                  <br />
                  <span className="text-foreground">Send reminders.</span>
                  <br />
                  <span className="text-gradient">Get paid.</span>
                </h1>

                <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                  Track who owes what, set deadlines, and get your money —
                  without awkward chats.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    1000+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Waitlist Users
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    ₦500M+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expected Volume
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4.9★</div>
                  <div className="text-sm text-muted-foreground">
                    Pre-launch Rating
                  </div>
                </div>
              </div>

              {/* Tally Form Embed */}
              <div className="glass-effect rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Zap className="w-5 h-5 text-primary mr-2" />
                  Join the exclusive waitlist
                </h3>
                <iframe
                  src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Spot Waitlist"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Phone Mockup */}
            <div
              className="relative lg:mt-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative mx-auto w-80 h-[600px] animate-float">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full"></div>

                <div className="relative bg-gradient-to-br from-surface-elevated to-surface-card rounded-[3.5rem] shadow-2xl border border-white/10 p-2">
                  <div className="bg-surface rounded-[3rem] overflow-hidden h-full">
                    {/* Status Bar */}
                    <div className="bg-surface-elevated px-6 py-3 flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <div className="w-1 h-1 bg-success rounded-full"></div>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {/* App Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            S
                          </span>
                        </div>
                        <span className="font-bold text-foreground">Spot</span>
                        <div className="w-8 h-8 bg-surface-elevated rounded-full border border-white/10"></div>
                      </div>

                      {/* Transaction Cards */}
                      <div className="space-y-4">
                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Uber to VI
                            </div>
                            <div className="w-2 h-2 bg-success rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-lg">
                            ₦2,500
                          </div>
                          <div className="text-xs text-success mt-1">
                            3 people • Split equally
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Dinner at Terra
                            </div>
                            <div className="w-2 h-2 bg-warning rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-lg">
                            ₦18,000
                          </div>
                          <div className="text-xs text-warning mt-1">
                            4 people • Custom split
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Netflix Subscription
                            </div>
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-lg">
                            ₦4,400
                          </div>
                          <div className="text-xs text-primary mt-1">
                            5 people • Monthly
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="bg-gradient-primary rounded-2xl p-4 text-center">
                        <div className="text-white font-semibold">
                          Send Reminder
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section
        id="pain-points"
        className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-elevated to-surface"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Real problems, real solutions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Tired of chasing your friends for money?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the struggle. Here's what happens too often in
              Nigerian friend groups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🚗
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                You paid for Uber again. No one sends you back.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Always the one covering transport? Never getting reimbursed? We
                feel you.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">
                  Too relatable
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🍕
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Dinner was ₦18k. Everyone's suddenly offline.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Group dinners are fun until it's time to split the bill and
                everyone disappears.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">
                  Story of our lives
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎶
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                You pay for Netflix — they all stream and vanish.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Subscriptions add up. Everyone enjoys, but somehow you're always
                the one paying.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">
                  Every single time
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Simple as 1, 2, 3
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to never chase money again. Built for the
              modern Nigerian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Log a transaction
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Add the amount and select people involved. Snap a receipt or
                enter manually. AI helps categorize expenses.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-warning to-error rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <Bell className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Send reminders
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Set deadlines and send gentle push notifications or WhatsApp
                reminders. No more awkward conversations.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-info to-primary rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get paid
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                They pay you via card through Paystack. Money hits your account
                instantly. Track everything in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section
        id="features"
        className="py-20 lg:py-32 bg-gradient-to-br from-surface-elevated to-surface-card px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Built for modern Nigerians
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed specifically for Nigerian social
              spending and group dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Simple group bill tracking",
                desc: "Add friends, split bills, track balances",
              },
              {
                icon: Shield,
                title: "No wallet required",
                desc: "Direct bank transfers, no middleman",
              },
              {
                icon: CreditCard,
                title: "Paystack integration",
                desc: "Instant payments, local bank support",
              },
              {
                icon: Bell,
                title: "Smart reminders",
                desc: "WhatsApp, SMS, and push notifications",
              },
              {
                icon: Smartphone,
                title: "Add friends easily",
                desc: "Username, phone, or QR code scan",
              },
              {
                icon: Star,
                title: "Social features",
                desc: "Group chats, expense categories, receipts",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="waitlist"
        className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Launch coming soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join the Waitlist to <span className="text-gradient">Spot</span>{" "}
              your money 💸
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Be among the first to experience stress-free group expense
              management. Early users get premium features free for life.
            </p>

            {/* Tally Form Embed */}
            <div className="max-w-2xl mx-auto glass-effect rounded-3xl p-8 border border-white/10 mb-12">
              <iframe
                src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Spot Waitlist - Final CTA"
                className="rounded-2xl"
              />
            </div>

            <button
              onClick={() => scrollToSection("hero")}
              className="group text-primary hover:text-success font-medium flex items-center justify-center mx-auto space-x-2 transition-all duration-300 hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-elevated border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Spot. Built for Nigerians, by Nigerians. 🇳🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
