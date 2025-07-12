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
  DollarSign,
} from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [currencySymbols, setCurrencySymbols] = useState<
    Array<{
      id: number;
      x: number;
      duration: number;
      delay: number;
      symbol: string;
    }>
  >([]);
  const [typewriterStage, setTypewriterStage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const painPointsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const stages = [
      { delay: 500, stage: 1 },
      { delay: 2500, stage: 2 },
      { delay: 4500, stage: 3 },
    ];

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setTypewriterStage(stage), delay);
    });
  }, []);

  // Floating currency symbols
  useEffect(() => {
    const symbols = ["₦", "💳", "📱", "💰", "🏦"];
    const interval = setInterval(() => {
      const newSymbol = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        duration: 8000 + Math.random() * 4000,
        delay: 0,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      };

      setCurrencySymbols((prev) => [...prev, newSymbol]);

      setTimeout(() => {
        setCurrencySymbols((prev) => prev.filter((s) => s.id !== newSymbol.id));
      }, newSymbol.duration);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Trigger animations based on scroll position
      const sections = [painPointsRef, featuresRef];
      sections.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.current.classList.add("animate-fade-in-up");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interactive particle system
  const createParticle = (e: React.MouseEvent) => {
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--success))",
      "hsl(var(--warning))",
    ];
    const newParticle: Particle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 3000);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-surface relative overflow-hidden"
      onClick={createParticle}
    >
      {/* Floating Currency Symbols */}
      {currencySymbols.map((symbol) => (
        <div
          key={symbol.id}
          className="currency-float"
          style={{
            left: `${symbol.x}px`,
            animationDuration: `${symbol.duration}ms`,
            animationDelay: `${symbol.delay}ms`,
            color: "hsl(var(--primary))",
          }}
        >
          {symbol.symbol}
        </div>
      ))}

      {/* Interactive Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            background: particle.color,
          }}
        />
      ))}

      {/* Morphing Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-96 h-96 bg-primary/5 morph-shape blur-3xl"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-success/5 morph-shape blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-warning/3 morph-shape blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/90 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg nigeria-gradient">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Spot
              </span>
            </div>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-gradient-primary text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl glow-effect relative overflow-hidden"
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-white/20 pulse-ring rounded-2xl"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
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
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm slide-in-left">
                  <Sparkles className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Nigeria's first social payment app 🇳🇬
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight">
                    <div
                      className={`text-foreground ${typewriterStage >= 1 ? "typewriter" : "opacity-0"}`}
                    >
                      Split bills.
                    </div>
                    <div
                      className={`text-foreground ${typewriterStage >= 2 ? "typewriter typewriter-delay-1" : "opacity-0"}`}
                    >
                      Send reminders.
                    </div>
                    <div
                      className={`text-gradient ${typewriterStage >= 3 ? "typewriter typewriter-delay-2" : "opacity-0"}`}
                    >
                      Get paid.
                    </div>
                  </h1>
                </div>

                <p
                  className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-lg slide-in-left"
                  style={{ animationDelay: "6s" }}
                >
                  Track who owes what, set deadlines, and get your money —
                  without awkward chats.
                </p>
              </div>

              {/* Tally Form Embed */}
              <div
                className="glass-effect rounded-3xl p-8 border border-white/10 slide-in-left"
                style={{ animationDelay: "6.5s" }}
              >
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
              className="relative lg:mt-0 slide-in-right"
              style={{ animationDelay: "1s" }}
            >
              <div className="relative mx-auto w-80 h-[600px] animate-float">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full pulse-ring"></div>

                <div className="relative bg-gradient-to-br from-surface-elevated to-surface-card rounded-[3.5rem] shadow-2xl border border-white/10 p-2 hover:scale-105 transition-transform duration-500">
                  <div className="bg-surface rounded-[3rem] overflow-hidden h-full">
                    {/* Status Bar */}
                    <div className="bg-surface-elevated px-6 py-3 flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                        <div
                          className="w-1 h-1 bg-primary rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="w-1 h-1 bg-success rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
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
                        <div className="w-8 h-8 bg-surface-elevated rounded-full border border-white/10 hover:border-primary/50 transition-colors"></div>
                      </div>

                      {/* Transaction Cards */}
                      <div className="space-y-4">
                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Uber to VI
                            </div>
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-bold text-foreground text-lg">
                            ₦2,500
                          </div>
                          <div className="text-xs text-success mt-1">
                            3 people • Split equally
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Dinner at Terra
                            </div>
                            <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-bold text-foreground text-lg">
                            ₦18,000
                          </div>
                          <div className="text-xs text-warning mt-1">
                            4 people • Custom split
                          </div>
                        </div>

                        <div className="bg-surface-elevated rounded-3xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-sm text-muted-foreground">
                              Netflix Subscription
                            </div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
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
                      <div className="bg-gradient-primary rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
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
        ref={painPointsRef}
        id="pain-points"
        className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-elevated to-surface"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Real problems, real solutions 🇳🇬
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
            {/* Card 1 - With Flip Effect */}
            <div className="card-flip-container">
              <div className="group card-flip bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl relative">
                {/* Front */}
                <div className="card-flip-front">
                  <div className="w-20 h-20 bg-gradient-to-br from-warning to-error rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Car className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    You paid for Uber again. No one sends you back.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Always the one covering transport? Never getting reimbursed?
                    We feel you.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">
                      Too relatable
                    </span>
                  </div>
                </div>
                {/* Back */}
                <div className="card-flip-back bg-gradient-primary rounded-3xl p-8 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Spot Solution</h3>
                  <p className="leading-relaxed">
                    Log transport expenses instantly. Set reminders. Get paid
                    back automatically through our platform.
                  </p>
                  <div className="mt-6 text-sm font-semibold">
                    No more fronting costs alone! 🚗
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - With Flip Effect */}
            <div className="card-flip-container">
              <div className="group card-flip bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl relative">
                {/* Front */}
                <div className="card-flip-front">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-success rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <UtensilsCrossed className="w-10 h-10 text-white" />
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
                {/* Back */}
                <div className="card-flip-back bg-gradient-to-br from-primary to-success rounded-3xl p-8 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Spot Solution</h3>
                  <p className="leading-relaxed">
                    Split dinner bills fairly. Send polite reminders. Track who
                    paid what. Never let anyone ghost again.
                  </p>
                  <div className="mt-6 text-sm font-semibold">
                    Fair splits, no drama! 🍽️
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - With Flip Effect */}
            <div className="card-flip-container">
              <div className="group card-flip bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl relative">
                {/* Front */}
                <div className="card-flip-front">
                  <div className="w-20 h-20 bg-gradient-to-br from-info to-primary rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    You pay for Netflix — they all stream and vanish.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Subscriptions add up. Everyone enjoys, but somehow you're
                    always the one paying.
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">
                      Every single time
                    </span>
                  </div>
                </div>
                {/* Back */}
                <div className="card-flip-back bg-gradient-to-br from-info to-primary rounded-3xl p-8 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Spot Solution</h3>
                  <p className="leading-relaxed">
                    Track recurring subscriptions. Auto-collect monthly
                    payments. Everyone enjoys, everyone pays.
                  </p>
                  <div className="mt-6 text-sm font-semibold">
                    Shared streaming, shared costs! 📺
                  </div>
                </div>
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
                Simple as 1, 2, 3 🇳🇬
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
            <div
              className="text-center group slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-3xl pulse-ring"></div>
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
            <div
              className="text-center group slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-warning to-error rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <Bell className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div
                  className="absolute inset-0 bg-warning/20 rounded-3xl pulse-ring"
                  style={{ animationDelay: "0.5s" }}
                ></div>
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
            <div
              className="text-center group slide-in-left"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-info to-primary rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div
                  className="absolute inset-0 bg-info/20 rounded-3xl pulse-ring"
                  style={{ animationDelay: "1s" }}
                ></div>
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
        ref={featuresRef}
        id="features"
        className="py-20 lg:py-32 bg-gradient-to-br from-surface-elevated to-surface-card px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-surface rounded-full border border-white/10 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Built for modern Nigerians 🇳🇬
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
                delay: "0.1s",
              },
              {
                icon: Shield,
                title: "No wallet required",
                desc: "Direct bank transfers, no middleman",
                delay: "0.2s",
              },
              {
                icon: CreditCard,
                title: "Paystack integration",
                desc: "Instant payments, local bank support",
                delay: "0.3s",
              },
              {
                icon: Bell,
                title: "Smart reminders",
                desc: "WhatsApp, SMS, and push notifications",
                delay: "0.4s",
              },
              {
                icon: Smartphone,
                title: "Add friends easily",
                desc: "Username, phone, or QR code scan",
                delay: "0.5s",
              },
              {
                icon: Star,
                title: "Social features",
                desc: "Group chats, expense categories, receipts",
                delay: "0.6s",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-surface-card rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 slide-in-right"
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative">
                    <feature.icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl pulse-ring"></div>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl morph-shape"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-6 nigeria-gradient">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">
                Launch coming soon 🇳🇬
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
            <div className="max-w-2xl mx-auto glass-effect rounded-3xl p-8 border border-white/10 mb-12 hover:scale-105 transition-transform duration-500">
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
              <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg nigeria-gradient">
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
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative"
              >
                <Twitter className="w-5 h-5" />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl pulse-ring"></div>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-surface-card rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/30 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative"
              >
                <Instagram className="w-5 h-5" />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl pulse-ring"></div>
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
