import { Award, CheckCircle, Sparkles, Smile, Star, Zap } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Main Services Section */}
      <section id='services' className="bg-white py-16 overflow-x-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="space-y-4">
              <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm">
                Providing Dental Services
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Advanced Dental Care Personalized <br /> For Your Valuable Smile
              </h1>
              <p className="text-gray-600 max-w-xl">
                Our clinic offers a wide range of dental treatment and restoration services.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Sparkles, title: 'Modern Teeth Cleaning' },
              { icon: Zap, title: 'Dynamic Teeth Scaling' },
              { icon: Smile, title: 'Teeth Cosmetic Dentistry' },
              { icon: CheckCircle, title: 'Root Canal Therapy' },
              { icon: Smile, title: 'Straighten Teeth Solution' },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-blue-900 py-16 text-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6629401/pexels-photo-6629401.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dentist 1"
                className="w-full h-full object-cover rounded-3xl row-span-2"
              />
              <img
                src="https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dentist 2"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="flex items-center justify-center col-span-2">
                <div className="inline-block bg-blue-500 text-white rounded-full px-6 py-3 font-semibold text-base sm:text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Best Awarded Clinic
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Why We Are The Best
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Your Smile Matters Expert Dental Care A Bright Tomorrow
              </h1>
              <p className="text-blue-200">
                Our clinic offers a wide range of dental treatments focusing on patient comfort and optimal oral health.
              </p>
              <ul className="space-y-2">
                {[
                  'Innovative Solutions for Straight Teeth',
                  'Clinic offers a comprehensive assessment',
                  'Help you achieve optimal oral health',
                  'Full Mouth X-Ray Facility',
                  'Dental Cleaning Treatment',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition">
                SEE ALL SERVICES →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
