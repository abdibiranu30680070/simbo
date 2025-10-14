import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Patient',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'DentCare has completely transformed my smile and my confidence. The team is incredibly professional, and the results exceeded my expectations. I highly recommend them!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Family Patient',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'We bring our entire family here. The staff is wonderful with kids, and they make every visit comfortable and stress-free. Best dental clinic in the area!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cosmetic Patient',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'I was nervous about getting veneers, but the team made me feel so comfortable. The results are stunning, and the process was painless. Worth every penny!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-28 2xl:mx-34 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real patients about their experience with DentCare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-100" size={48} />

              <div className="flex items-center space-x-4 mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-teal-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center space-x-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-teal-600 mb-2">4.9</p>
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">Average Rating</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-teal-600 mb-2">500+</p>
                <p className="text-gray-600 text-sm">Happy Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
