import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToService = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-white pt-20">
      <div className="grid lg:grid-cols-2 items-center min-h-screen">
        <div className="space-y-8 py-12 px-4 sm:px-6 lg:px-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <span className="inline-block text-[#0B7AD1] text-sm font-semibold tracking-wide uppercase">
              WE CARE FOR YOUR SMILE
            </span>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#002B5B] leading-tight">
              Transforming Your{" "}
              <span className="relative inline-block">
                Smile
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10" stroke="#0B7AD1" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              With Excellence
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C12 4 10 6 10 9C10 10.5 11 12 12.5 12.5C11 13 9 14.5 9 17.5C9 21 11.5 24 16 24C20.5 24 23 21 23 17.5C23 14.5 21 13 19.5 12.5C21 12 22 10.5 22 9C22 6 20 4 16 4Z" fill="#0B7AD1"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#002B5B] leading-tight">
                    Advanced Root<br />Canal Treatment
                  </h3>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-gray-200" />

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C10 8 9 9 9 10.5C9 11.5 10 12.5 11 13C10 13.5 9 14.5 9 16C9 18 10.5 19.5 12 19.5M20 8C22 8 23 9 23 10.5C23 11.5 22 12.5 21 13C22 13.5 23 14.5 23 16C23 18 21.5 19.5 20 19.5M12 19.5C13 20 14.5 20.5 16 20.5C17.5 20.5 19 20 20 19.5M16 13V21" stroke="#0B7AD1" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#002B5B] leading-tight">
                    Modern Cosmetic<br />Dentistry
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Focused on preventive care and overall Lorem ipsum dolor sit amet adipiscing elit. Duis at est id leo luctus gravida a in ipsum.
            </p>

            <div className="flex items-center">
              <button
                onClick={scrollToService}
                className="flex items-center space-x-3 bg-[#0B7AD1] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#0969BC] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>TAKE OUR SERVICE</span>
                <div className="bg-white rounded-full p-1.5">
                  <ArrowRight className="text-[#0B7AD1]" size={18} />
                </div>
              </button>
            </div>
          </div>

          <div className="relative h-screen w-full">
            <img
              src="/hero.png"
              alt="Dental patient"
              className="w-full h-full object-cover rounded-tl-[100px]"
            />
          </div>
        </div>
    </section>
  );
}
