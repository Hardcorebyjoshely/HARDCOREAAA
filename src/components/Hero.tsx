import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import SignUpModal from './SignUpModal';
import LearnMoreModal from './LearnMoreModal';

export default function Hero() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(68,255,247,0.2)] to-[rgba(255,89,94,0.2)] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(68,255,247,0.15)_0%,transparent_70%)]" />
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
          alt="AI Circuit"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNzUiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-pulse opacity-20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[rgba(68,255,247,0.4)] to-[rgba(255,89,94,0.4)] blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold text-white">
              Hardcore AAA
              <span className="block neon-aqua">AI Solutions</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl">
            Unleash the full potential of your business with our cutting-edge AI solutions. 
            We deliver enterprise-grade artificial intelligence that drives real results.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setIsSignUpOpen(true)}
              className="group bg-[rgb(68,255,247)] text-black px-8 py-4 rounded-md text-lg font-medium hover:bg-[rgb(98,255,248)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(68,255,247,0.5)] flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setIsLearnMoreOpen(true)}
              className="border border-[rgb(68,255,247)] text-[rgb(68,255,247)] px-8 py-4 rounded-md text-lg font-medium hover:bg-[rgba(68,255,247,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(68,255,247,0.3)]"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              { icon: Cpu, title: "Advanced AI", desc: "State-of-the-art machine learning models" },
              { icon: Shield, title: "Enterprise Security", desc: "Military-grade protection for your data" },
              { icon: Zap, title: "Lightning Fast", desc: "Real-time processing and insights" }
            ].map((feature, i) => (
              <div key={i} className="group bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-[rgba(68,255,247,0.2)] hover:border-[rgba(68,255,247,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(68,255,247,0.2)]">
                <feature.icon className="h-8 w-8 text-[rgb(68,255,247)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
      
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
      />
    </div>
  );
}