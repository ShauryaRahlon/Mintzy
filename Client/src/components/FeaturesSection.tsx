import {
  Brain,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Bot,
  Lightbulb,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Personalized Market Forecasting",
      description:
        "Market forecasts generated through advanced algorithms and real-time sentiment analysis. Each prediction is aligned with specific financial objectives to support accurate decision-making.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Custom Investment Strategies",
      description:
        "Strategies designed to match individual financial goals and risk profiles. Each solution is built on data-driven insights for maximum relevance and effectiveness.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Sentiment-Aware Dynamic Models",
      description:
        "Deep learning models that incorporate market sentiment and adjust to evolving financial conditions. All insights remain precise and contextually relevant.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Autonomous Adaptive Intelligence",
      description:
        "An AI engine that learns from historical patterns and market shifts. Strategies continuously improve to deliver consistent and optimized outcomes.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrated Risk Management and Analytics",
      description:
        "Built-in tools for real-time risk evaluation and performance tracking. Automated stock selection and analytics ensure greater clarity and control.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Solutions for Individual and Institutional Users",
      description:
        "A platform designed for both retail investors and financial institutions. Supports portfolio automation, strategy validation, and client engagement.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Access to Strategic Financial Intelligence",
      description:
        "A solution that addresses the gap in reliable market information. Delivers timely and actionable insights for better investment outcomes.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible and Scalable Pricing Structure",
      description:
        "Freemium model for individuals with a ₹100 monthly subscription for advanced features. Customized plans for institutions based on service requirements.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Mintzy's AI agents are transforming businesses across
            industries with intelligent automation and unprecedented efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading companies who are already leveraging Mintzy's AI
              agents to automate their operations and accelerate growth.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
