// src/components/News.jsx
export default function News() {
  const articles = [
    {
      category: 'Oral Health',
      title: 'The top 3 manual toothbrushes we recommend to patients',
      date: 'July 5, 2024',
      comments: 2,
      image: 'https://images.pexels.com/photos/6629378/pexels-photo-6629378.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Dental Hygiene',
      title: 'Time To First Byte: Beyond Server Response Time',
      date: 'July 5, 2024',
      comments: 0,
      image: 'https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Oral Health',
      title: 'Keep your teeth healthy with simple daily habits',
      date: 'July 5, 2025',
      comments: 0,
      image: 'https://images.pexels.com/photos/5452269/pexels-photo-5452269.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm mb-2">
          Our Latest News
        </p>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Our Insights & Articles
        </h1>
        <p className="text-blue-800 max-w-2xl mx-auto mb-12">
          Our clinic was created to make your smile beautiful, healthy and white. We offer a range of dental treatment and dental restoration.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="bg-blue-50 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {article.date} — Comments: {article.comments}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}