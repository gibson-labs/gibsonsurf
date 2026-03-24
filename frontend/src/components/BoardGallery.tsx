import { useRef, useState } from "react";
import spaceboard from "../assets/images/spaceboard.jpg";
import TyeDyeFire from "../assets/images/TyeDyeFire.jpg";
import HighPerformance from "../assets/images/surfboards/AlgarveHighPerformanceBottom.jpg";
import AtomicTwin from "../assets/images/surfboards/Atomic twin.png";
import Inferno from "../assets/images/surfboards/Inferno.png";
import LW from "../assets/images/surfboards/LW.png";
import PJ from "../assets/images/surfboards/PJ .png";
import Grandpa from "../assets/images/surfboards/grandpa.png";

const boards = [
  {
    id: 1,
    name: 'The "Algarve"',
    description:
      "A high-performance shortboard designed for the Algarve's powerful waves.",
    image: HighPerformance,
  },
  {
    id: 2,
    name: "StarBoard",
    description: "Surf to the moon and back.",
    image: spaceboard,
  },
  {
    id: 3,
    name: "Fish Twin Fin",
    description: "Retro-inspired design with modern performance.",
    image: TyeDyeFire,
  },
  {
    id: 4,
    name: "Atomic Twin",
    description: "Twin-fin energy with precision shaping.",
    image: AtomicTwin,
  },
  {
    id: 5,
    name: "Inferno",
    description: "Built to burn through sections at full speed.",
    image: Inferno,
  },
  {
    id: 6,
    name: "LW",
    description: "Lightweight and loose — made for carving.",
    image: LW,
  },
  {
    id: 7,
    name: "PJ",
    description: "A versatile all-rounder for any condition.",
    image: PJ,
  },
  {
    id: 8,
    name: "Grandpa",
    description: "Classic lines, timeless feel.",
    image: Grandpa,
  },
];

const BoardGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, boards.length - 1));
    setActiveIndex(clamped);
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[clamped] as HTMLElement;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2),
        behavior: "smooth",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="boards" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Our Creations
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="text-slate-800">Handcrafted</span>
            <br />
            <span className="text-3xl md:text-4xl font-light">Boards</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each board is hand-shaped and glassed with precision, using premium
            materials and backed by decades of craftsmanship. From timeless
            longboards to high-performance shortboards, we create custom boards
            for surfers of every style.
          </p>
        </div>

        {/* Gallery */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-xl border border-slate-200 text-slate-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous board"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === boards.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-xl border border-slate-200 text-slate-700 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next board"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {boards.map((board, index) => (
              <div
                key={board.id}
                onClick={() => scrollToIndex(index)}
                className={`snap-center flex-shrink-0 cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden shadow-xl border-2
                  ${activeIndex === index
                    ? "border-blue-500 scale-100 opacity-100 w-80 md:w-96"
                    : "border-transparent scale-95 opacity-60 w-72 md:w-80"
                  }`}
              >
                <div className="relative h-96 md:h-[28rem] bg-slate-100">
                  <img
                    src={board.image}
                    alt={board.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on active */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent transition-opacity duration-300 ${activeIndex === index ? "opacity-100" : "opacity-0"}`} />
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{board.name}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{board.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {boards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-600 w-6 h-2"
                  : "bg-slate-300 w-2 h-2 hover:bg-slate-400"
              }`}
              aria-label={`Go to board ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-slate-400 text-sm mt-3">
          {activeIndex + 1} / {boards.length}
        </p>

        {/* CTA */}
        <div className="text-center mt-16 p-10 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Don't see what you're looking for?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We specialize in custom boards tailored to your unique <br />
            style. Every surfer's dream deserves the perfect board.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Reach Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardGallery;
