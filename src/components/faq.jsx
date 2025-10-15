// src/components/FAQ.jsx
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How can I schedule an appointment?',
      answer: 'You can schedule an appointment by calling our office, using our online booking system, or visiting us in person. Our team is available to help you find a convenient time.',
    },
    {
      question: 'Can I get an estimate quote for my job?',
      answer: 'Yes, we provide free estimate quotes. Please contact us with details about your dental needs, and we\'ll provide a personalized quote.',
    },
    {
      question: 'How can I know the payment methods?',
      answer: 'We accept various payment methods including cash, credit cards, debit cards, and insurance. For more details, please check with our billing department.',
    },
    {
      question: 'Do you offer emergency dental services?',
      answer: 'Yes, we provide emergency dental services. Please call our emergency line for immediate assistance.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm sm:text-base mb-2">
            FAQ'S
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900">
            Everything You Need To Know About Dental Care
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ List */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 sm:px-8 py-4 sm:py-5 text-left text-blue-900 font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>Q{index + 1}. {faq.question}</span>
                  <Plus
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  className={`px-6 sm:px-8 py-4 text-gray-600 border-t border-gray-200 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <img
              src="https://images.pexels.com/photos/6629378/pexels-photo-6629378.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dental care"
              className="w-full h-80 sm:h-96 md:h-[28rem] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
