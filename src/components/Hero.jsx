import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 0 ? 1 : 0));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const scrollToService = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-auto overflow-hidden">
      <section
        id="home"
        className={`w-full h-full transition-opacity duration-1000 ease-in-out bg-gradient-to-br from-gray-50 via-blue-50 to-white pt-20 ${current === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen">
          <div className="space-y-8 py-12 px-4 sm:px-6 md:px-10 lg:px-12 xl:pl-[max(4rem,calc((100vw-90rem)/2+3rem))]">
            <span className="inline-block text-[#0B7AD1] text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase">
              We Care For Your Smile
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#002B5B] leading-tight">
              Transforming Your{" "}
              <span className="relative inline-block">
                Smile
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10"
                    stroke="#0B7AD1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              With Excellence
            </h1>
            {/* Feature Cards */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm">
              {/* Root Canal */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4C12 4 10 6 10 9C10 10.5 11 12 12.5 12.5C11 13 9 14.5 9 17.5C9 21 11.5 24 16 24C20.5 24 23 21 23 17.5C23 14.5 21 13 19.5 12.5C21 12 22 10.5 22 9C22 6 20 4 16 4Z"
                      fill="#0B7AD1"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002B5B] leading-tight">
                    Advanced Root<br />Canal Treatment
                  </h3>
                </div>
              </div>
              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              {/* Cosmetic Dentistry */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8C10 8 9 9 9 10.5C9 11.5 10 12.5 11 13C10 13.5 9 14.5 9 16C9 18 10.5 19.5 12 19.5M20 8C22 8 23 9 23 10.5C23 11.5 22 12.5 21 13C22 13.5 23 14.5 23 16C23 18 21.5 19.5 20 19.5M12 19.5C13 20 14.5 20.5 16 20.5C17.5 20.5 19 20 20 19.5M16 13V21"
                      stroke="#0B7AD1"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#002B5B] leading-tight">
                    Modern Cosmetic<br />Dentistry
                  </h3>
                </div>
              </div>
            </div>
            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              Focused on preventive care and overall oral health. Experience modern dentistry that keeps your smile bright and confident.
            </p>
            {/* Button */}
            <div>
              <button
                onClick={scrollToService}
                className="flex items-center space-x-3 bg-[#0B7AD1] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#0969BC] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Take Our Service</span>
                <div className="bg-white rounded-full p-1 sm:p-1.5">
                  <ArrowRight className="text-[#0B7AD1]" size={18} />
                </div>
              </button>
            </div>
          </div>
          {/* RIGHT SIDE — IMAGE */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-screen w-full">
            <img
              src="/hero.png"
              alt="Dental patient"
              className="w-full h-full object-cover rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]"
            />
          </div>
        </div>
      </section>

      {/* Second Hero (Purple/Teal Theme) */}
      <section
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-white pt-20 ${current === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen">
          <div className="space-y-8 py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:pr-[max(4rem,calc((100vw-90rem)/2+3rem))] bg-gradient-to-br from-white via-teal-50 to-purple-50 rounded-l-[60px] shadow-md">
  {/* Small Tagline */}
  <span className="inline-block text-teal-600 text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase bg-teal-100 px-3 py-1 rounded-full shadow-sm">
    Transform Your Smile
  </span>

  {/* Main Title */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-900 leading-tight drop-shadow-sm">
    Experience Confidence with a Healthy Smile.
  </h1>

  {/* Feature Cards */}
  <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-8 bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-teal-100 hover:shadow-xl transition-shadow duration-300">
    {/* Whitening */}
    <div className="flex-1 flex items-start gap-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-purple-100 shadow-inner">
        <span className="text-purple-600 text-2xl">🦷</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-purple-800 leading-tight">
          Whitening
        </h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Brighten your smile using advanced whitening technology for a radiant, confident appearance.
        </p>
      </div>
    </div>

    {/* Divider */}
    <div className="hidden sm:block w-px h-24 bg-gradient-to-b from-gray-200 to-gray-100" />

    {/* Prosthesis */}
    <div className="flex-1 flex items-start gap-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-purple-100 shadow-inner">
        <span className="text-purple-600 text-2xl">💡</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-purple-800 leading-tight">
          Prosthesis
        </h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Natural-looking bridges, dentures, and implants designed for comfort and confidence.
        </p>
      </div>
    </div>
  </div>

  {/* Description */}
  <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
    Our services focus on preventive care and overall oral health. Experience modern dentistry that keeps your smile bright and confident.
  </p>

  {/* Button */}
  <div>
    <button
      onClick={scrollToService}
      className="flex items-center space-x-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <span>View Our Services</span>
      <div className="bg-white rounded-full p-1 sm:p-1.5">
        <ArrowRight className="text-teal-500" size={18} />
      </div>
    </button>
  </div>
</div>

          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-screen w-full">
            <img
              src="/hero1.png"
              alt="Smiling woman in dental clinic"
              className="w-full h-full object-cover rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[100px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
