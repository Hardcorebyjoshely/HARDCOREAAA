export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
            <p className="text-gray-400 mb-6">
              At Hardcore AAA, we're pioneering the future of enterprise AI solutions. Our team of elite engineers and data scientists work tirelessly to deliver cutting-edge technology that transforms businesses.
            </p>
            <p className="text-gray-400 mb-8">
              With over a decade of experience in artificial intelligence and machine learning, we've helped countless organizations achieve their digital transformation goals and stay ahead of the competition.
            </p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "500+", label: "Clients" },
                { number: "95%", label: "Success Rate" },
                { number: "24/7", label: "Support" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-xl transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team at work"
              className="relative rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}