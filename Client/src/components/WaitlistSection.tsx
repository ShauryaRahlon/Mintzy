import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles } from "lucide-react";
import axios from "axios";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const data = {
      email,
    };
    setIsLoading(true);
    axios
      .post(import.meta.env.VITE_BACKEND_URL, data)
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setEmail("");
      })
      .catch((error) => {
        console.error("Error submitting email:", error);
        setIsLoading(false);
        alert(
          "There was an error submitting your email. Please try again later."
        );
      });

    // setTimeout(() => {
    //   setIsSubmitted(true);
    //   setIsLoading(false);
    //   setEmail("");
    // }, 1000);
  };

  if (isSubmitted) {
    return (
      <section
        id="waitlist"
        className="py-20 bg-gradient-to-b from-black to-blue-950"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/20">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              You're now on our early access waitlist. We'll notify you as soon
              as Mintzy AI agents are ready for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Add Another Email
              </button>
              <button
                onClick={() =>
                  window.open(
                    import.meta.env.VITE_FORM_URL, //survey link
                    "_blank"
                  )
                }
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                Take Our Survey
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-20 bg-gradient-to-b from-black to-blue-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Join Early Access
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be among the first to experience the future of AI automation. Get
            exclusive access to Mintzy AI agents before general release.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/20">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading || !email}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                    Joining...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                500+
              </div>
              <div className="text-gray-300 text-sm">Early Adopters</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                Q2 2025
              </div>
              <div className="text-gray-300 text-sm">Expected Launch</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                Free
              </div>
              <div className="text-gray-300 text-sm">Early Access</div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
