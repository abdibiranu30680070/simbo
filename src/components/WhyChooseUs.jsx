import { Clock, Heart, Star, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Extended hours and weekend appointments to fit your busy schedule.',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We prioritize your comfort and listen to your concerns with compassion.',
    },
    {
      icon: Star,
      title: 'Expert Team',
      description: 'Highly qualified dentists with years of specialized training and experience.',
    },
    {
      icon: Shield,
      title: 'Safe & Sterile',
      description: 'Strict infection control protocols and state-of-the-art sterilization equipment.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-28 2xl:mx-34 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Experience the DentCare Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to ensure your dental experience is comfortable and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
