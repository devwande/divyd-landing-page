import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const navigate = useNavigate();

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What does Divyd do and how does it work?",
      answer:
        "Divyd is a social-first finance app that simplifies how friends and small groups manage shared expenses. Whether it's splitting bills, tracking who owes what, or repaying each other, Divyd makes the process seamless and stress-free.",
    },
    {
      id: 2,
      question: "Do I need to link my bank account?",
      answer:
        "No, not at all. To make transfers, all you need to do is link your debit card or fund your Divyd Wallet. Once set up, you can easily receive, or transfer money securely and in real-time, with no complex steps or external apps required.",
    },
    {
      id: 3,
      question: "Is Divyd safe to use?",
      answer:
        "Yes! Divyd uses industry-standard encryption and powered by a 3rd party trusted payment provider to protect your data.",
    },
    {
      id: 4,
      question:
        "How is this different from just sending money with my bank app?",
      answer:
        "DIVYD helps track, remind, and repay shared expenses automatically — no awkward texts or forgotten transfers rather then the traditional bank apps.",
    },
    {
      id: 5,
      question: "What is Pre-approved transfers and how does it work?",
      answer:
        "Pre-Approved Transfers allow you to authorize automatic deductions for shared expenses up to a set limit. Once a transaction is logged by the person who paid, Divyd immediately debits your approved amount from your linked card or Divyd Wallet — no manual confirmation needed. This makes repayments faster, smoother, and more reliable among trusted connections.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-orange-200/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-black to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">
                  D
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">
                Divyd
              </span>
            </div>
            <button
              onClick={() => navigate("/")}
              className="cta-button text-sm sm:text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about Divyd and how it works
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-orange-200/30 hover:border-orange-400 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-6 lg:px-8 lg:py-8 text-left flex items-center justify-between hover:bg-orange-50/50 transition-colors rounded-2xl"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-black pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 animate-slide-up">
                    <div className="border-t border-orange-200/30 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-white rounded-3xl p-8 lg:p-12 border border-orange-200/30">
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Reach out to our support
                team and we'll get back to you as soon as possible. Contact us
                at divydafrica@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black to-orange-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">
                  D
                </span>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Divyd
              </span>
            </div>

            {/* Links */}
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

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                target="_blank"
                href="https://x.com/Divydapp"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/divydapp/"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/divydapp"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@divydapp"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-orange-200/30 hover:border-orange-400 text-orange-200 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-orange-200/20 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-orange-200 text-sm lg:text-base">
              © 2025 Divyd. Built for Nigerians, by Nigerians. 🇳🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
