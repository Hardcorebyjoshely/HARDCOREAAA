import { Brain, Workflow, LineChart } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Brain,
      title: "AI Automation",
      description: "Streamline your operations with intelligent automation powered by cutting-edge AI algorithms.",
      features: ["Process Automation", "Smart Workflows", "24/7 Operation"]
    },
    {
      icon: Workflow,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with our advanced predictive modeling and analytics solutions.",
      features: ["Real-time Analytics", "Pattern Recognition", "Strategic Insights"]
    },
    {
      icon: LineChart,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with our enterprise-grade BI solutions.",
      features: ["Custom Dashboards", "Performance Metrics", "Trend Analysis"]
    }
  ];

  return (
    <section id="solutions" className="gradient-neon py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge AI solutions designed to transform your business operations
            and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-[rgba(68,255,247,0.2)] hover:border-[rgba(68,255,247,0.4)] transition-colors">
              <solution.icon className="h-12 w-12 text-[rgb(68,255,247)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[rgb(68,255,247)]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}