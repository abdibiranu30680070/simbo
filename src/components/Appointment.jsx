import { useState } from 'react';
import { Phone, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    date: '',
    time: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: submitError } = await supabase
        .from('appointments')
        .insert([formData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        date: '',
        time: ''
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error submitting appointment:', err);
      setError('Failed to submit appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="appointment"
      className="bg-gradient-to-br from-[#0B5394] to-[#0B7AD1] py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          
          {/* Left - Info Panel */}
          <div className="space-y-8 text-white">
            <div className="border-2 border-white rounded-3xl p-6 sm:p-8 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold mb-4 leading-snug">
                We Always Take Care Of <br />
                Your Smile & Self Confident
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-400 rounded-full flex-shrink-0 mb-3 sm:mb-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Hot Line Number:</p>
                    <p className="text-xl font-bold">+945 888 8889</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-400 rounded-full flex-shrink-0 mb-3 sm:mb-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Monday To Friday</p>
                    <p className="text-xl font-bold">09:00am - 08:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-[#002B5B] mb-2">
              Book an Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Get your dental health back on track with us
            </p>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm sm:text-base">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm sm:text-base">
                Appointment submitted successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Top Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                />
              </div>

              {/* Lower Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="general">General Dentistry</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="endodontics">Endodontics</option>
                  <option value="periodontics">Periodontics</option>
                </select>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B7AD1]"
                  required
                >
                  <option value="">Select Time</option>
                  {[
                    '09:00', '10:00', '11:00', '12:00',
                    '13:00', '14:00', '15:00', '16:00',
                    '17:00', '18:00', '19:00', '20:00'
                  ].map((time) => (
                    <option key={time} value={time}>
                      {time.slice(0, 2)}:{time.slice(3)} {parseInt(time) < 12 ? 'AM' : 'PM'}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-bold py-4 rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                {loading ? 'Submitting...' : 'APPOINTMENT NOW'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
