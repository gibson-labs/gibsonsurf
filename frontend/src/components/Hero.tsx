import { Button } from '@/components/ui/button';


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <div className="mb-4 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
          🇵🇹 Handcrafted in Portugal since 1985
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-white">Gibson</span>
          <br />
          <span className="text-4xl md:text-6xl font-light">Surf Boards</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in animation-delay-300">
          Handcrafted with passion. Shaped for perfection. 
          <br />
          Custom surfboards made by our family for yours.
        </p>
        <div className="space-x-4 animate-fade-in animation-delay-500">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('boards')}
             className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Our Boards
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;