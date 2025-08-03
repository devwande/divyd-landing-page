import React, { useState, useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: {
      execute(siteKey: string, options: { action: string }): Promise<string>;
      ready(cb: () => void): void;
    };
  }
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const API_URL = import.meta.env.VITE_WAITLIST_API_URL;

  useEffect(() => {
    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
      console.log("reCAPTCHA script injected.");
    } else {
      console.log("reCAPTCHA script already present.");
    }
  }, [SITE_KEY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      if (!window.grecaptcha) {
        throw new Error("reCAPTCHA not loaded");
      }

      await new Promise<void>((resolve) => {
        window.grecaptcha.ready(() => resolve());
      });

      const token = await window.grecaptcha.execute(SITE_KEY, {
        action: "submit",
      });

      if (!token || typeof token !== "string" || token.length < 50) {
        throw new Error("Failed reCAPTCHA check. Are you human?");
      }

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
        }),
      });

      console.log("reCAPTCHA response", res);

      if (!res.ok) {
        throw new Error("Failed to submit form.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "" });
    } catch (err) {
      console.error(err);
      setError("reCAPTCHA failed or network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md mx-auto text-center p-6 bg-green-50 rounded-lg border border-green-200">
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm"
        required
      />

      {error && (
        <div className="text-red-600 text-sm p-3 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By joining the waitlist, you agree to receive updates about Divyd's launch.
      </p>
    </form>
  );
}