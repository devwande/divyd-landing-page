import React, { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Submit logic goes here...
    // Example: await sendToServer(email);

    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("You're on the waitlist!");
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-full sm:max-w-md mx-auto flex flex-col gap-4"
    >
      {/* Email Input */}
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none text-sm sm:text-base placeholder-gray-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* reCAPTCHA (Optional - adjust depending on how you render it) */}
      <div className="flex justify-center overflow-hidden">
        <div
          id="recaptcha-container"
          className="transform scale-[0.85] sm:scale-100 origin-top"
        />
      </div>

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
        By joining the waitlist, you agree to receive updates about Divyd’s launch.
      </p>
    </form>
  );
};

export default WaitlistForm;
