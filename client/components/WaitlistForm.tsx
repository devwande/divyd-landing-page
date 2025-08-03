import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // EmailJS (replace with your EmailJS credentials)
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_name: "Divyd Team",
          from_name: formData.name,
          from_email: formData.email,
          message: `New waitlist signup: ${formData.name} (${formData.email})`,
        },
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "" });
      setRecaptchaToken("");

      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
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

      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Leep5grAAAAAIvxCtomB3NuQiz8pGT8NHtRvD2d"
          onChange={(token) => setRecaptchaToken(token || "")}
          onExpired={() => setRecaptchaToken("")}
          onError={() =>
            setError("reCAPTCHA error. Please refresh and try again.")
          }
          theme="light"
          size="normal"
        />
      </div>

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
        By joining the waitlist, you agree to receive updates about Divyd's
        launch.
      </p>
    </form>
  );
}
