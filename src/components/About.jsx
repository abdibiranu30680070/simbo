// src/components/AboutUs.jsx
import { Award, Check } from "lucide-react";
const scrollTocontact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
export default function AboutUs() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Section */}
        <div className="relative">
          {/* Animated Dotted Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin-slow">
              <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-30">
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
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6812443/pexels-photo-6812443.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dentist"
                className="object-cover rounded-3xl shadow-lg"
              />

              {/* Red Rotating Badge with Tooth Logo */}
              <div className="absolute -top-8 -right-8 w-36 h-36">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative bg-red-500 rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
                    {/* Rotating Text */}
                    <div className="absolute inset-0 animate-spin-text">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
  <defs>
    <path
      id="redCirclePath"
      d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
    />
  </defs>

  <text fill="white" fontSize="12" fontWeight="bold" letterSpacing="3">
    <textPath
      xlinkHref="#redCirclePath"
      startOffset="0%"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      •SIMBO DENTAL CLINIC •SIMBO DENTAL CLINIC •SIMBO DENTAL CLINIC •
    </textPath>
  </text>
</svg>

                    </div>

                    {/* Center Tooth Icon */}
                    <div className="relative z-10">
                      <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                        <path d="M12 2C10.4 2 8.85 2.45 7.5 3.3C6.15 4.15 5.05 5.35 4.35 6.8C3.65 8.25 3.35 9.85 3.5 11.45C3.65 13.05 4.25 14.55 5.2 15.8L6.6 17.5C7.2 18.2 7.6 19.1 7.6 20V21C7.6 21.55 8.05 22 8.6 22H15.4C15.95 22 16.4 21.55 16.4 21V20C16.4 19.1 16.8 18.2 17.4 17.5L18.8 15.8C19.75 14.55 20.35 13.05 20.5 11.45C20.65 9.85 20.35 8.25 19.65 6.8C18.95 5.35 17.85 4.15 16.5 3.3C15.15 2.45 13.6 2 12 2M10 11C10 10.45 10.45 10 11 10C11.55 10 12 10.45 12 11V14C12 14.55 11.55 15 11 15C10.45 15 10 14.55 10 14V11M14 11C14 10.45 14.45 10 15 10C15.55 10 16 10.45 16 11V14C16 14.55 15.55 15 15 15C14.45 15 14 14.55 14 14V11Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10" />
                  <div>
                    <p className="text-3xl font-bold">25 Years Of</p>
                    <p className="text-lg">Experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-3">
            SHORTY KNOW ABOUT US
          </p>
          <h1 className="text-2xl lg:text-5xl  font-bold text-blue-600 mb-6 leading-tight">
            Are You Looking For A Dentist To Give You Special Smile?
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our clinic was created to make your smile beautiful, healthy and white. We offer
            a wide range of dental treatment and dental restoration services with
            a focus on patient comfort and satisfaction.
          </p>

          {/* Feature Box */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex gap-6">
              <img
                src="https://images.pexels.com/photos/6812457/pexels-photo-6812457.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dental service"
                className="w-32 h-32 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Right Choice For Quality
                  <br />
                  Dental Service More
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="bg-blue-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">Innovative Solutions for Straight Teeth</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="bg-blue-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">Clinic offers a comprehensive</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="bg-blue-600 rounded-full p-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">Detailed Assessments of Dental</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Make your smile beautiful, healthy, and white. We offer a wide range of dental
            treatments and restoration services focusing on patient comfort and satisfaction.
          </p>

          {/* CTA Button and Trustpilot */}
          <div className="flex items-center gap-6 flex-wrap">
            <button
            onClick={scrollTocontact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
              CONTACT WITH US
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="font-bold text-gray-900">Trustpilot</p>
                <p className="text-sm text-gray-600">Kanem Ipsum Dolor Sitccletur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
