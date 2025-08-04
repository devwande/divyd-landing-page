"use client"

import { useState, useEffect } from "react"
import {
  Smartphone,
  Users,
  Bell,
  CreditCard,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Zap,
  Shield,
  Sparkles,
  Car,
  UtensilsCrossed,
  Play,
  ArrowUpRight,
} from "lucide-react"
import DivydLogo from "../../public/logo.svg"
import WaitlistForm from "../components/WaitlistForm"

export default function Index() {
  const [scrollY, setScrollY] = useState(0)
  const [typewriterStage, setTypewriterStage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stages = [
      { delay: 500, stage: 1 },
      { delay: 900, stage: 2 },
      { delay: 1200, stage: 3 },
    ]

    stages.forEach(({ delay, stage }) => {
      setTimeout(() => setTypewriterStage(stage), delay)
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-orange-600/5 rounded-full blur-3xl animate-float opacity-60" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-black/10 to-orange-500/5 rounded-full blur-3xl animate-float opacity-60"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-orange-300/8 to-black/5 rounded-full blur-2xl animate-pulse-gentle opacity-40" />
      </div>

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-orange-200/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className=" flex items-center justify-center animate-pulse-gentle">
                <img src={DivydLogo || "/placeholder.svg"} alt="Divyd" className="w-8 h-8" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
                Divyd
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/faq"
                className="text-gray-600 hover:text-orange-500 transition-colors duration-300 font-medium text-sm sm:text-base"
              >
                FAQ
              </a>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="cta-button text-sm sm:text-base animate-bounce-gentle"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto relative z-10 px-2 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 mt-5 bg-orange-50 rounded-full border border-orange-200 backdrop-blur-sm text-sm sm:text-base animate-slide-up">
                  <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="text-orange-700 font-medium">Nigeria's first social payment app 🇳🇬</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug">
                    <div
                      className={`transition-opacity duration-500 ${
                        typewriterStage >= 1 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Split bills.
                    </div>
                    <div
                      className={`transition-opacity duration-500 ${
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

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                  Track who owes what, set deadlines, and get your money without awkward chats.
                </p>
              </div>

              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-orange-200/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-orange-100/30 rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="text-center md:text-left mb-5">
                    <div className="inline-flex items-center px-3 py-1.5 bg-orange-100 rounded-full border border-orange-200 mb-3 text-sm sm:text-base">
                      <Zap className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-orange-700 font-medium">Early Access</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1">Join the Waitlist</h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      Be first to experience the future of group payments in Nigeria
                    </p>
                  </div>
                  <WaitlistForm />
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-6 text-sm sm:text-base text-gray-500">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-orange-500" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-1 text-orange-500" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-orange-500" />
                  <span>Premium Features</span>
                </div>
              </div>
            </div>

            <div className="order-2">
              <div className="relative flex justify-center pt-8 lg:pt-20">
                <div className="w-[280px] h-[580px] sm:w-[300px] sm:h-[620px] md:w-[320px] md:h-[660px] lg:w-[340px] lg:h-[700px] xl:w-[360px] xl:h-[740px] hover:scale-105 transition-all duration-300 max-w-[90vw]">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-black/10 blur-2xl rounded-full"></div> */}
                  <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-orange-200/30 p-2 lg:p-2.5 h-full">
                    <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="bg-gradient-to-r from-black to-orange-600 px-4 py-2.5 lg:py-3 flex justify-between items-center text-white text-xs lg:text-sm flex-shrink-0">
                        <div className="font-medium">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-orange-300 rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 lg:p-5 space-y-4 lg:space-y-5 flex-1 flex flex-col">
                        <div className="flex items-center justify-between flex-shrink-0">
                          <div className="flex items-center justify-center text-white text-xs font-bold">
                            <img src={DivydLogo || "/placeholder.svg"} alt="Divyd" className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <span className="font-bold text-base lg:text-lg text-black">Divyd</span>
                          <div className="w-7 h-7 lg:w-8 lg:h-8 bg-orange-100 rounded-full border border-orange-200"></div>
                        </div>

                        <div className="space-y-3 lg:space-y-4 flex-1">
                          {[
                            {
                              title: "Uber to VI",
                              amount: "₦2,500",
                              people: "3 people • Split equally",
                              dot: "bg-orange-500",
                            },
                            {
                              title: "Dinner at Terra",
                              amount: "₦18,000",
                              people: "4 people • Custom split",
                              dot: "bg-orange-400",
                            },
                            {
                              title: "Netflix Subscription",
                              amount: "₦4,400",
                              people: "5 people • Monthly",
                              dot: "bg-orange-500",
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className={`bg-gradient-to-r from-orange-50 to-white rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-orange-200 hover:border-orange-400 transition-colors`}
                            >
                              <div className="flex justify-between text-xs lg:text-sm text-gray-600 mb-1">
                                <div className="font-medium">{item.title}</div>
                                <div className={`w-2 h-2 ${item.dot} rounded-full flex-shrink-0`}></div>
                              </div>
                              <div className="text-sm lg:text-base font-bold text-black">{item.amount}</div>
                              <div className="text-xs lg:text-sm text-orange-600 mt-1">{item.people}</div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-gradient-to-r from-black to-orange-500 rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center cursor-pointer hover:scale-105 transition-transform duration-300 flex-shrink-0 mt-auto">
                          <div className="text-white text-sm lg:text-base font-semibold">Send Reminder</div>
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

      <section id="pain-points" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full border border-orange-200 backdrop-blur-sm mb-4 lg:mb-6 animate-slide-up">
              <span className="text-sm sm:text-base font-medium text-orange-700">Real problems, Real solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
              Tired of chasing your friends for money?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              We understand the struggle. Here's what happens too often in Nigerian friend groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-orange-200/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Car className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 lg:mb-4">
                You paid for Uber again. No one sends you back.
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                Always the one covering transport? Never getting reimbursed? We feel you.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-to-r from-black to-orange-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-500">Too relatable</span>
              </div>
            </div>

            <div
              className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-orange-200/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <UtensilsCrossed className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 lg:mb-4">
                Dinner was ₦18k. Everyone's suddenly offline.
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                Group dinners are fun until it's time to split the bill and everyone disappears.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-to-r from-black to-orange-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-500">Story of our lives</span>
              </div>
            </div>

            <div
              className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-orange-200/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl md:col-span-2 lg:col-span-1 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-black to-orange-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-black mb-3 lg:mb-4">
                You pay for Netflix — they all stream and vanish.
              </h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                Subscriptions add up. Everyone enjoys, but somehow you're always the one paying.
              </p>
              <div className="mt-4 lg:mt-6 flex items-center space-x-2">
                <div className="w-6 lg:w-8 h-1 bg-gradient-to-r from-black to-orange-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-500">Every single time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full border border-orange-200 backdrop-blur-sm mb-4 lg:mb-6 animate-slide-up">
              <span className="text-sm sm:text-base font-medium text-orange-700">Simple as 1, 2, 3</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to never chase money again. Built for the modern Nigerian.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            <div className="text-center group animate-slide-up">
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-black to-orange-500 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 lg:mb-4">Log a transaction</h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                Add the amount and select people involved. Snap a receipt or enter manually.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Bell className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 lg:mb-4">Send reminders</h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                Set deadlines and send gentle push notifications or WhatsApp reminders.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-3 lg:mb-4">Get paid</h3>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed">
                They pay you via card through Paystack. Money hits your account instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 lg:py-32 bg-gradient-to-br from-orange-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
              Everything you need
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed specifically for Nigerian social spending and group dynamics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Simple group bill tracking",
                desc: "Add friends, split one time and recurring bills and track balances.",
              },
              {
                icon: CreditCard,
                title: "Divyd wallet",
                desc: "Deposit, track and transfer money instantly, send funds to other users, withdraw to your bank or keep your balance ready for easy repayments",
              },
              {
                icon: Bell,
                title: "Smart reminders",
                desc: "Push notifications to remind you of upcoming payments and deadlines – keeping repayments smooth and on-time.",
              },
              {
                icon: Smartphone,
                title: "Add friends easily",
                desc: "Effortlessly add friends to shared expenses using email, phone number or Divyd usernames make it simple to connect and settle up together.",
              },
              {
                icon: Shield,
                title: "Pre-approved transfers",
                desc: "Enable automatic deductions for shared expenses within a set limit — simplifying repayments and removing the need for manual confirmations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-orange-200/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-black to-orange-500 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg xl:text-xl font-bold text-black mb-1 lg:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full border border-orange-200 backdrop-blur-sm mb-4 lg:mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-sm sm:text-base font-medium text-orange-700">Launch coming soon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
              Join the Waitlist to <span className="text-gradient">Divyd</span> your money
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto">
              Be among the first to experience stress-free group expense management. Early users get premium features
              free for life.
            </p>

            <div className="max-w-3xl mx-auto relative mb-8 lg:mb-12 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 via-orange-100/10 to-orange-200/20 blur-3xl rounded-3xl"></div>

              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-[2.5rem] p-8 lg:p-12 border border-orange-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-orange-500 text-white rounded-full text-sm sm:text-base font-semibold mb-4 animate-pulse-gentle">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Limited Early Access
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-2">Secure Your Divyd</h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                    Join 1000+ Nigerians already on the waitlist
                  </p>
                </div>

                <WaitlistForm />

                <div className="flex items-center justify-center space-x-6 mt-6 text-sm sm:text-base text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-orange-500" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-orange-500" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-orange-500" />
                    <span>Premium Features</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("hero")}
              className="group text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center mx-auto space-x-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-black to-orange-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className=" flex items-center justify-center animate-pulse-gentle">
                <img src={DivydLogo || "/placeholder.svg"} alt="Divyd" className="w-8 h-8" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Divyd
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <a
                href="/terms"
                className="text-orange-200 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-orange-200 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                Privacy Policy
              </a>
              <a
                href="/faq"
                className="text-orange-200 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                FAQ
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://x.com/Divydapp"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/divydapp/"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/divydapp/"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.tiktok.com/@divydapp"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-orange-200/20 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-orange-200 text-sm lg:text-base">© 2025 Divyd. Built for Nigerians, by Nigerians. 🇳🇬</p>
          </div>
        </div>
      </footer>

      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
          <button onClick={() => scrollToSection("waitlist")} className="cta-button shadow-2xl animate-bounce-gentle">
            Join Waitlist
          </button>
        </div>
      )}
    </div>
  )
}
