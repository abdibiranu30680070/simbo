// src/components/Services.jsx
import { Award, CheckCircle, Sparkles, Smile, Star,  Zap } from 'lucide-react';

export default function Services() {
  return (
    <>
      {/* Main Services Section - White Background */}
      <section className="bg-white py-16">
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
                Our clinic was created to make your smile beautiful, healthy and white. We offer a wide range of dental treatment and dental restoration.
              </p>
            </div>
            <div className="flex items-center space-x-6 mt-8 lg:mt-0">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User 1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User 2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="User 3"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-800 font-semibold">4.8 Ratings</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
                SEE ALL SERVICES <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Services Grid with Image */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, title: 'Modern Teeth Cleaning' },
                { icon: Zap, title: 'Dynamic Teeth Scaling' },
                { icon: Smile, title: 'Teeth Cosmetic Dentistry' },
                // { icon: Tool, title: 'Cavity Teeth Inspection' },
                { icon: CheckCircle, title: 'Root Canal Therapy' },
                { icon: Smile, title: 'Straighten Teeth Solution' },
              ].map((service, i) => (
                <div key={i} className="bg-blue-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/6629378/pexels-photo-6629378.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dental patient"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Blue Background */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
           <div className="grid grid-cols-2 gap-x-6">
  {/* Left image - spans two rows */}
  <img
    src="https://images.pexels.com/photos/6629401/pexels-photo-6629401.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Dentist 1"
    className="w-full h-full object-cover rounded-3xl row-span-2"
  />

  {/* Right top image */}
  <img
    src="https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt="Dentist 2"
    className="w-full h-full object-cover rounded-3xl"
  />

  {/* Right bottom award */}
  <div className="flex items-center justify-center">
    <div className="inline-block bg-blue-500 text-white rounded-full px-8 py-4 font-semibold text-lg">
      <Award className="inline-block mr-2 w-6 h-6" />
      Best Awarded Clinic
    </div>
  </div>
</div>



            {/* Content */}
            <div className="space-y-4">
              <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm">
                Why We Are The Best From Others
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Your Smile Matters Expert Dental Care A Bright Tomorrow
              </h1>
              <p className="text-blue-200">
                Our clinic was created to make your smile beautiful, healthy and white. We offer a wide range of dental treatment and dental restoration.
              </p>
              <ul className="space-y-3">
                {[
                  'Innovative Solutions for Straight Teeth',
                  'Clinic offers a comprehensive',
                  'Help you achieve optimal oral health',
                  'Full Mouth X-Ray Facility',
                  'Dental Cleaning Treatment',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
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