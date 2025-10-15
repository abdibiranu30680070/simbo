import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => (isDragging.current = true);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* Image Comparison */}
          <div className="flex justify-center">
            <div
              ref={containerRef}
              className="relative w-full sm:w-[90%] md:w-[85%] lg:w-[90%] xl:w-[95%] 2xl:w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl select-none cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
            >
              {/* Before (Yellow Teeth) */}
              <div className="w-full h-full">
                <img
                  src="/white_teeth.png"
                  alt="Before"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* After (White Teeth) */}
              <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden transition-all duration-75"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <img
                  src="/yellow_teeth.png"
                  alt="After"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white shadow-2xl"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white shadow-lg">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h8M12 8l-4 4 4 4m0-8l4 4-4 4"
                    />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/80 text-blue-700 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                Before
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/80 text-blue-700 text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm">
                After
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h3 className="text-blue-600 font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide">
                SEE THE TRANSFORMATION
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Stunning Results Showcase
              </h2>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                The Life-Changing Impact
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our clinic was created to make your smile beautiful and healthy
                with a full range of dental treatments and restorations.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Clinic offers a comprehensive approach",
                "Help you achieve optimal oral health",
                "Full Mouth X-ray Facility",
              ].map((text, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition duration-300 transform hover:scale-105">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
