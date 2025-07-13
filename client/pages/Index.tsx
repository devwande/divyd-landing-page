import { useState, useEffect, useRef } from "react";
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
  Car,
  UtensilsCrossed,
  Play,
} from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [typewriterStage, setTypewriterStage] = useState(0);

  // Simplified typewriter effect
  useEffect(() => {
    const stages = [
      { delay: 500, stage: 1 },
      { delay: 2000, stage: 2 },
      { delay: 3500, stage: 3 },
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setTypewriterStage(stage), delay);
    });
  }, []);

  // Simplified scroll handler
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
      {/* Simplified Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float opacity-50" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-success/5 rounded-full blur-3xl animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/90 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">
                  S
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </div>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-gradient-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-20 pb-16 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Hero Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Nigeria's first social payment app 🇳🇬
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <div
                      className={`text-foreground transition-opacity duration-500 ${
                        typewriterStage >= 1 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Split bills.
                    </div>
                    <div
                      className={`text-foreground transition-opacity duration-500 ${
                        typewriterStage >= 2 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Send reminders.
                    </div>
                    <div
                      className={`text-gradient transition-opacity duration-500 ${
                        typewriterStage >= 3 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Get paid.
                    </div>
                  </h1>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Track who owes what, set deadlines, and get your money —
                  without awkward chats.
                </p>
              </div>

              {/* Tally Form Embed - Mobile Optimized */}
              <div className="glass-effect rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 lg:mb-6 flex items-center justify-center lg:justify-start">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2" />
                  Join the exclusive waitlist
                </h3>
                <iframe
                  src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Spot Waitlist"
                  className="rounded-2xl min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]"
                />
              </div>
            </div>

            {/* Phone Mockup - Responsive */}
            <div className="relative lg:mt-0 flex justify-center">
              <div className="relative w-64 h-[500px] sm:w-72 sm:h-[560px] lg:w-80 lg:h-[600px] animate-float">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-2xl rounded-full"></div>

                <div className="relative bg-gradient-to-br from-surface-elevated to-surface-card rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl border border-white/10 p-1.5 lg:p-2 hover:scale-105 transition-transform duration-500">
                  <div className="bg-surface rounded-[2rem] lg:rounded-[3rem] overflow-hidden h-full">
                    {/* Status Bar */}
                    <div className="bg-surface-elevated px-4 lg:px-6 py-2 lg:py-3 flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <div className="w-1 h-1 bg-success rounded-full"></div>
                      </div>
                    </div>

                    <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
                      {/* App Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xs lg:text-sm">
                            S
                          </span>
                        </div>
                        <span className="font-bold text-foreground text-sm lg:text-base">
                          Spot
                        </span>
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-surface-elevated rounded-full border border-white/10"></div>
                      </div>

                      {/* Transaction Cards */}
                      <div className="space-y-3 lg:space-y-4">
                        <div className="bg-surface-elevated rounded-2xl lg:rounded-3xl p-3 lg:p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-2 lg:mb-3">
                            <div className="text-xs lg:text-sm text-muted-foreground">
                              Uber to VI
                            </div>
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-success rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-sm lg:text-lg">
                            ₦2,500
                          </div>
                          <div className="text-xs text-success mt-1">
                            3 people • Split equally
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-2xl lg:rounded-3xl p-3 lg:p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-2 lg:mb-3">
                            <div className="text-xs lg:text-sm text-muted-foreground">
                              Dinner at Terra
                            </div>
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-warning rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-sm lg:text-lg">
                            ₦18,000
                          </div>
                          <div className="text-xs text-warning mt-1">
                            4 people • Custom split
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-2xl lg:rounded-3xl p-3 lg:p-5 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="flex items-center justify-between mb-2 lg:mb-3">
                            <div className="text-xs lg:text-sm text-muted-foreground">
                              Netflix Subscription
                            </div>
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full"></div>
                          </div>
                          <div className="font-bold text-foreground text-sm lg:text-lg">
                            ₦4,400
                          </div>
                          <div className="text-xs text-primary mt-1">
                            5 people • Monthly
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action */}
                      <div className="bg-gradient-primary rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="text-white font-semibold text-sm lg:text-base">
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
        className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-elevated to-surface"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-4 lg:mb-6">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Real problems, real solutions 🇳🇬
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              Tired of chasing your friends for money?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the struggle. Here's what happens too often in
              Nigerian friend groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group bg-surface-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-warning to-error rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Car className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">
                You paid for Uber again. No one sends you back.
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Always the one covering transport? Never getting reimbursed? We
                feel you.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">
                  Too relatable
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-surface-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-success rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <UtensilsCrossed className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">
                Dinner was ₦18k. Everyone's suddenly offline.
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Group dinners are fun until it's time to split the bill and
                everyone disappears.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-primary rounded-full"></div>
                <span className="text-xs text-muted-foreground">
                  Story of our lives
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-surface-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-info to-primary rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4">
                You pay for Netflix — they all stream and vanish.
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Subscriptions add up. Everyone enjoys, but somehow you're always
                the one paying.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-primary rounded-full"></div>
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
        className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-4 lg:mb-6">
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Simple as 1, 2, 3 🇳🇬
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to never chase money again. Built for the
              modern Nigerian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
                Log a transaction
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Add the amount and select people involved. Snap a receipt or
                enter manually.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-warning to-error rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
                Send reminders
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                Set deadlines and send gentle push notifications or WhatsApp
                reminders.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-info to-primary rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
                Get paid
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                They pay you via card through Paystack. Money hits your account
                instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section
        id="features"
        className="py-16 lg:py-32 bg-gradient-to-br from-surface-elevated to-surface-card px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-surface rounded-full border border-white/10 backdrop-blur-sm mb-4 lg:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Built for modern Nigerians 🇳🇬
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              Everything you need
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed specifically for Nigerian social
              spending and group dynamics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="group bg-surface-card rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-foreground mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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
        className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-4 lg:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2" />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Launch coming soon 🇳🇬
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6">
              Join the Waitlist to <span className="text-gradient">Spot</span>{" "}
              your money 💸
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 max-w-2xl mx-auto">
              Be among the first to experience stress-free group expense
              management. Early users get premium features free for life.
            </p>

            {/* Tally Form Embed */}
            <div className="max-w-2xl mx-auto glass-effect rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 mb-8 lg:mb-12 hover:scale-105 transition-transform duration-500">
              <iframe
                src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
                width="100%"
                height="350"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Spot Waitlist - Final CTA"
                className="rounded-xl lg:rounded-2xl min-h-[300px] lg:min-h-[400px]"
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
      <footer className="bg-surface-elevated border-t border-white/10 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">
                  S
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-muted-foreground text-sm lg:text-base">
              © 2024 Spot. Built for Nigerians, by Nigerians. 🇳🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
