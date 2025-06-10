import { MessageCircle, ExternalLink, HelpCircle } from "lucide-react";

const QASection = () => {
  const handleMarketResearchClick = () => {
    // Replace with your actual Google Form URL in env file
    window.open(import.meta.env.VITE_FORM_URL, "_blank");
  };

  const faqs = [
    {
      question:
        "What makes Mintzy's AI agents different from other automation tools?",
      answer:
        "Our AI agents don't just follow scripts—they understand context, learn from interactions, and make intelligent decisions. They adapt to your business processes and continuously improve their performance.",
    },
    {
      question: "How quickly can I implement Mintzy AI agents in my business?",
      answer:
        "Implementation typically takes 2-4 weeks depending on complexity. Our team provides full support during setup, training, and integration with your existing systems.",
    },
    {
      question: "What industries can benefit from Mintzy AI agents?",
      answer:
        "Our AI agents are versatile and work across industries including e-commerce, customer service, finance, healthcare, marketing, and operations management.",
    },
    {
      question: "Is my data secure with Mintzy AI agents?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption, compliance with major standards (SOC 2, GDPR), and can operate entirely within your infrastructure.",
    },
  ];

  return (
    <section id="qa" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Questions & Answers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get answers to common questions about Mintzy AI agents and help us
            understand your specific needs through our market research.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center max-w-2xl mx-auto mb-12">
            <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Help Shape Our Product
            </h3>
            <p className="text-purple-100 mb-6">
              Your insights are valuable! Participate in our market research to
              help us build AI agents that perfectly match your business needs.
            </p>
            <button
              onClick={handleMarketResearchClick}
              className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>Take Market Research Survey</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <HelpCircle className="h-6 w-6 text-purple-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button
            onClick={handleMarketResearchClick}
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
          >
            Contact us through our research form →
          </button>
        </div>
      </div>
    </section>
  );
};

export default QASection;
