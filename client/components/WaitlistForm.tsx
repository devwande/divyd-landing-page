import React, { useState, useEffect } from "react";

// Extend Window interface for grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState("");
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(
    null,
  );

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          const widgetId = window.grecaptcha.render("recaptcha-container", {
            sitekey: "6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Replace with your actual site key
            callback: (token: string) => {
              setRecaptchaResponse(token);
            },
            "expired-callback": () => {
              setRecaptchaResponse("");
            },
          });
          setRecaptchaWidgetId(widgetId);
        });
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaResponse) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    if (!formData.name || !formData.email) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Send data to the backend API
      const response = await fetch(
        "https://waitlist-server-e5iu.onrender.com/waitlist/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            recaptchaToken: recaptchaResponse,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
      });

      // Reset reCAPTCHA
      if (recaptchaWidgetId !== null && window.grecaptcha) {
        window.grecaptcha.reset(recaptchaWidgetId);
        setRecaptchaResponse("");
      }
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError("Something went wrong. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-full sm:max-w-md mx-auto text-center p-6 bg-green-50 rounded-lg border border-green-200">
        <div className="text-green-600 text-lg font-semibold mb-2">
          🎉 You're on the waitlist!
        </div>
        <p className="text-green-700 text-sm">
          We'll notify you when Divyd launches. Check your email for updates!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full sm:max-w-md mx-auto flex flex-col gap-4"
    >
      {/* Name Input */}
      <input
        type="text"
        name="name"
        required
        placeholder="Enter your name"
        className="w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base placeholder-gray-400"
        value={formData.name}
        onChange={handleInputChange}
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base placeholder-gray-400"
        value={formData.email}
        onChange={handleInputChange}
      />

      {/* reCAPTCHA */}
      <div className="flex justify-center overflow-hidden">
        <div
          id="recaptcha-container"
          className="transform scale-[0.85] sm:scale-100 origin-top"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-xs sm:text-sm p-2 sm:p-3 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2.5 sm:py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm sm:text-base font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </button>

      {/* Disclaimer */}
      <p className="text-[11px] sm:text-xs text-gray-500 text-center px-2 leading-tight">
        By joining the waitlist, you agree to receive updates about Divyd's
        launch.
      </p>
    </form>
  );
};

export default WaitlistForm;
