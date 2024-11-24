import { X, Clock, Users, Star } from 'lucide-react';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 rounded-xl w-full max-w-2xl p-8 border border-[rgba(68,255,247,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Future of AI</h2>
            <div className="h-1 w-24 bg-[rgb(68,255,247)] mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              Experience cutting-edge AI technology with Hardcore AAA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-lg border border-[rgba(68,255,247,0.2)]">
              <Clock className="h-8 w-8 text-[rgb(68,255,247)] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Limited Availability</h3>
              <p className="text-gray-400">Current quarter at full capacity with selected enterprise partners.</p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-[rgba(68,255,247,0.2)]">
              <Users className="h-8 w-8 text-[rgb(68,255,247)] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Exclusive Waitlist</h3>
              <p className="text-gray-400">Join our carefully curated waitlist for next year's enrollment.</p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-[rgba(68,255,247,0.2)]">
              <Star className="h-8 w-8 text-[rgb(68,255,247)] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Priority Access</h3>
              <p className="text-gray-400">Selected members will be granted early access in Q1 2025.</p>
            </div>
          </div>

          <div className="mt-8 bg-black/30 p-6 rounded-lg border border-[rgba(68,255,247,0.2)]">
            <h3 className="text-xl font-semibold text-white mb-4">Why Join Our Waitlist?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="h-2 w-2 bg-[rgb(68,255,247)] rounded-full mt-2 mr-3"></div>
                <span>Early adopters receive priority access to our revolutionary AI solutions</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-[rgb(68,255,247)] rounded-full mt-2 mr-3"></div>
                <span>Exclusive beta testing opportunities for upcoming features</span>
              </li>
              <li className="flex items-start">
                <div className="h-2 w-2 bg-[rgb(68,255,247)] rounded-full mt-2 mr-3"></div>
                <span>Special pricing packages for waitlist members</span>
              </li>
            </ul>
          </div>

          <div className="text-center text-gray-400 mt-6">
            <p>Sign up now to secure your position on our exclusive waitlist.</p>
            <p className="text-sm mt-2">Selection process begins December 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}