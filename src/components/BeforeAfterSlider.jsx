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
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-lg select-none cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
    >
      {/* Bottom layer — Yellow teeth (Before) */}
      <div className="w-full h-full">
        <img
          src="/white_teeth.png"
          alt="Before"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Top layer — White teeth (After) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img
          src="/yellow_teeth.png"
          alt="After"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-md"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white">
          <svg
            className="w-4 h-4"
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
      <div className="absolute top-4 left-4 bg-white/70 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-white/70 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
        After
      </div>
    </div>
  );
}