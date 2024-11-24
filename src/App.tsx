import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import About from './components/About';
import Blog from './components/Blog';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <Blog />
      
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Hardcore AAA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;