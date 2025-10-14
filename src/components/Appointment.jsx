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
    <section className="bg-gradient-to-br from-[#0B5394] to-[#0B7AD1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Info Panel */}
          <div className="space-y-8">
            <div className="border-2 border-white rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-2 leading-tight">
                We Always Take Care Of
                <br />
                Your Smile & Self Confident
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-400 rounded-full flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Hot Line Number:</p>
                    <p className="text-xl font-bold">+945 888 8889</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-cyan-400 rounded-full flex-shrink-0">
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

          {/* Appointment Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-[#002B5B] mb-2">
              Book an Appointment
            </h2>
            <p className="text-gray-600 mb-6">
              Get your dental health back on track with us
            </p>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                Appointment submitted successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent text-gray-700"
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
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent"
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B7AD1] focus:border-transparent text-gray-700"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                  <option value="20:00">08:00 PM</option>
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
