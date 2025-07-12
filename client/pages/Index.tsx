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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-spot-green to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-charcoal">Spot</span>
            </div>
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-charcoal text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "rgba(133, 15, 15, 1)" }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                  Split bills.
                  <br />
                  Send reminders.
                  <br />
                  <span className="text-spot-green">Get paid.</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Track who owes what, set deadlines, and get your money —
                  without awkward chats.
                </p>
              </div>

              {/* Tally Form Embed */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">
                  Join the waitlist
                </h3>
                <iframe
                  src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Spot Waitlist"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-64 h-96 lg:w-80 lg:h-[500px]">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-charcoal to-gray-800 rounded-[3rem] shadow-2xl"
                  style={{ top: "5px", width: "344px" }}
                >
                  <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-6 h-6 bg-spot-green rounded-lg"></div>
                        <span className="font-bold text-charcoal">Spot</span>
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">
                            Uber to VI
                          </div>
                          <div className="font-semibold text-charcoal">
                            ₦2,500
                          </div>
                          <div className="text-xs text-spot-green">
                            3 people • Split equally
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">
                            Dinner at Terra
                          </div>
                          <div className="font-semibold text-charcoal">
                            ₦18,000
                          </div>
                          <div className="text-xs text-spot-orange">
                            4 people • Custom split
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">
                            Netflix Subscription
                          </div>
                          <div className="font-semibold text-charcoal">
                            ₦4,400
                          </div>
                          <div className="text-xs text-spot-green">
                            5 people • Monthly
                          </div>
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
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "rgba(133, 15, 15, 1)" }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Tired of chasing your friends for money?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                You paid for Uber again. No one sends you back.
              </h3>
              <p className="text-gray-600">
                Always the one covering transport? Never getting reimbursed? We
                feel you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                Dinner was ₦18k. Everyone's suddenly offline.
              </h3>
              <p className="text-gray-600">
                Group dinners are fun until it's time to split the bill and
                everyone disappears.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎶</div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                You pay for Netflix — they all stream and vanish.
              </h3>
              <p className="text-gray-600">
                Subscriptions add up. Everyone enjoys, but somehow you're always
                the one paying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to never chase money again
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-spot-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Log a transaction
              </h3>
              <p className="text-gray-600">
                Add the amount and select people involved. Snap a receipt or
                enter manually.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-midnight-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Send reminders
              </h3>
              <p className="text-gray-600">
                Set deadlines and send gentle push notifications or WhatsApp
                reminders.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-spot-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Get paid
              </h3>
              <p className="text-gray-600">
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
        className="py-16 lg:py-24 bg-charcoal px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for modern Nigerians
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage group expenses without the hassle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Simple group bill tracking",
              "No wallet required",
              "Works with Paystack for instant payment",
              "Set repayment deadlines",
              "Add friends by username or phone",
              "WhatsApp integration for reminders",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-spot-green rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Join the Waitlist to <span className="text-spot-green">Spot</span>{" "}
            your money 💸
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Be among the first to experience stress-free group expense
            management
          </p>

          {/* Tally Form Embed */}
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8">
            <iframe
              src="https://tally.so/embed/m5d9zJ?hideTitle=1&transparentBackground=1"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Spot Waitlist - Final CTA"
              className="rounded-lg"
            />
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="mt-8 text-spot-green hover:text-emerald-600 font-medium flex items-center justify-center mx-auto space-x-2 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-navy py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-spot-green to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">Spot</span>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Spot. Built for Nigerians, by Nigerians.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
