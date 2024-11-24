export default function Blog() {
  const posts = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Discover how artificial intelligence is reshaping the business landscape...",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      date: "Mar 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Machine Learning Breakthroughs",
      excerpt: "Exploring the latest advancements in machine learning technology...",
      image: "https://images.unsplash.com/photo-1501526029524-a8ea952b15be?auto=format&fit=crop&q=80",
      date: "Mar 12, 2024",
      readTime: "4 min read"
    },
    {
      title: "Securing AI Infrastructure",
      excerpt: "Best practices for maintaining robust security in AI systems...",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      date: "Mar 10, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in AI and enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-purple-500 font-medium hover:text-purple-400 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}