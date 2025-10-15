import { Award, Check } from "lucide-react";

const scrollTocontact = () => {
  const element = document.querySelector("#contact");
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function AboutUs() {
  return (
    <section className="overflow-x-hidden container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Side - Image Section */}
        <div className="relative flex justify-center overflow-hidden">
          {/* Animated Dotted Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-slow">
              <svg
                viewBox="0 0 500 500"
                className="opacity-30 max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="240"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  strokeDasharray="8 12"
                />
              </svg>
            </div>
          </div>

          {/* Dentist Image */}
          <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-full">
            <img
              src="https://images.pexels.com/photos/6812443/pexels-photo-6812443.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dentist"
              className="w-full max-w-full h-auto object-cover rounded-3xl shadow-lg"
            />

            {/* Red Rotating Badge */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-red-500 rounded-full w-full h-full flex items-center justify-center shadow-xl">
                  <div className="absolute inset-0 animate-spin-text">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <path
                          id="redCirclePath"
                          d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                        />
                      </defs>
                      <text
                        fill="white"
                        fontSize="8"
                        fontWeight="bold"
                        letterSpacing="2"
                      >
                        <textPath
                          xlinkHref="#redCirclePath"
                          startOffset="0%"
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          •SIMBO DENTAL CLINIC•
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="relative z-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    >
                      <path d="M12 2C10.4 2 8.85 2.45 7.5 3.3C6.15 4.15 5.05 5.35 4.35 6.8C3.65 8.25 3.35 9.85 3.5 11.45C3.65 13.05 4.25 14.55 5.2 15.8L6.6 17.5C7.2 18.2 7.6 19.1 7.6 20V21C7.6 21.55 8.05 22 8.6 22H15.4C15.95 22 16.4 21.55 16.4 21V20C16.4 19.1 16.8 18.2 17.4 17.5L18.8 15.8C19.75 14.55 20.35 13.05 20.5 11.45C20.65 9.85 20.35 8.25 19.65 6.8C18.95 5.35 17.85 4.15 16.5 3.3C15.15 2.45 13.6 2 12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-0 left-0 bg-blue-600 text-white rounded-2xl px-4 py-2 sm:px-5 sm:py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <p className="text-lg sm:text-xl font-bold">25 Years Of</p>
                  <p className="text-sm sm:text-base">Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="px-0 sm:px-4">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base">
            Shorty Know About Us
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 leading-tight">
            Are You Looking For A Dentist To Give You Special Smile?
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Our clinic was created to make your smile beautiful, healthy and
            white. We offer a wide range of dental treatment and restoration services focusing on patient comfort.
          </p>

          {/* Feature Box */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <img
                src="https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dental service"
                className="w-full sm:w-28 sm:h-28 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">
                  The Right Choice For Quality Dental Service
                </h3>
                <ul className="space-y-2">
                  {[
                    "Innovative Solutions for Straight Teeth",
                    "Clinic offers a comprehensive",
                    "Detailed Assessments of Dental",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <div className="bg-blue-600 rounded-full p-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={scrollTocontact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            CONTACT WITH US
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
