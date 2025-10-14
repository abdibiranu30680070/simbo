// src/components/Team.jsx
import { ArrowRight } from 'lucide-react';

export default function Team() {
  const doctors = [
    {
      name: 'Dr. Vivek Murthy',
      role: 'Neurology',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Paul Farmer',
      role: 'Dental Assistant',
      image: 'https://images.pexels.com/photos/6629378/pexels-photo-6629378.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Mehmet Oz',
      role: 'Dental Assistant',
      image: 'https://images.pexels.com/photos/5452269/pexels-photo-5452269.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Dr. Nadim Kamal',
      role: 'Dental Assistant',
      image: 'https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm mb-2">
          Our Dental Team
        </p>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Specialized Dental Care Doctors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our clinic was created to make your smile beautiful, healthy and white. We offer a range of dental treatment and dental restoration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-6 py-2 shadow-md text-center">
                  <h3 className="text-lg font-semibold text-blue-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.role}</p>
                </div>
              </div>
              <div className="h-16"></div> {/* Spacer for the overlay name card */}
            </div>
          ))}
        </div>
        <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-blue-800 transition">
          SEE ALL DOCTORS <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}