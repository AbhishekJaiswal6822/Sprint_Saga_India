import React from "react";

function CallToAction() {
  return (
    <section
      className="
        w-full 
        py-24 
        text-center 
        text-white 
        bg-gradient-to-r 
        from-teal-800 
        via-teal-600 
        to-cyan-500
      "
    >
      <div className="max-w-3xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ready to Take the Challenge?
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl leading-relaxed mb-10">
          Don't miss out on the most exciting marathon event of 2024.
          Register now <br /> and secure your spot!
        </p>

        {/* CTA Button */}
        <button
          className="
            bg-white 
            text-teal-700 
            font-semibold 
            px-8 
            py-3 
            rounded-full 
            shadow-md 
            hover:bg-gray-100 
            transition
          "
          onClick={() => alert("Register Now clicked!")}
        >
          Register Now – Early Bird Pricing
        </button>

      </div>
    </section>
  );
}

export default CallToAction;
