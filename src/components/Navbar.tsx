import { Menu, X, Brain } from 'lucide-react';
import { useState } from 'react';
import SignUpModal from './SignUpModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Brain className="h-8 w-8 text-[rgb(68,255,247)]" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#home" className="text-gray-300 hover:text-[rgb(68,255,247)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                  <a href="#solutions" className="text-gray-300 hover:text-[rgb(68,255,247)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Solutions</a>
                  <a href="#about" className="text-gray-300 hover:text-[rgb(68,255,247)] px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                  <a href="#blog" className="text-gray-300 hover:text-[rgb(68,255,247)] px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[rgb(68,255,247)] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[rgb(98,255,248)] transition-colors"
              >
                Sign Up
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[rgb(68,255,247)] hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-300 hover:text-[rgb(68,255,247)] block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#solutions" className="text-gray-300 hover:text-[rgb(68,255,247)] block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-[rgb(68,255,247)] block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#blog" className="text-gray-300 hover:text-[rgb(68,255,247)] block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full bg-[rgb(68,255,247)] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[rgb(98,255,248)] transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <SignUpModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}