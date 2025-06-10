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
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced AI Intelligence",
      description:
        "Our AI agents leverage cutting-edge machine learning to understand context, make decisions, and adapt to your business needs in real-time.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Automation",
      description:
        "Process thousands of tasks simultaneously with sub-second response times, dramatically increasing your operational efficiency.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security protocols ensure your data remains protected while our agents work seamlessly in your environment.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Operations",
      description:
        "Never miss an opportunity with AI agents that work around the clock, handling customer inquiries and business processes continuously.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Predictive Analytics",
      description:
        "Gain competitive advantages with AI-powered insights that predict market trends and optimize your business strategies.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Seamless Integration",
      description:
        "Integrate effortlessly with your existing tools and workflows. Our agents adapt to your current systems without disruption.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Multi-Agent Collaboration",
      description:
        "Deploy specialized AI agents that work together, sharing knowledge and coordinating complex multi-step business processes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Learning",
      description:
        "Our agents evolve with your business, learning from every interaction to provide increasingly sophisticated automation solutions.",
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
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
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
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
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
