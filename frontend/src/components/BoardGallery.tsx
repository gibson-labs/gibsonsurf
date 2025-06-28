
import { useState } from "react";

const BoardGallery = () => {
  const boards = [
    {
      id: 1,
      name: "Classic Longboard",
      description: "Perfect for beginners and cruising. 9'6\" of pure elegance.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      specs: { length: "9'6\"", width: "23\"", thickness: "3\"" }
    },
    {
      id: 2,
      name: "Performance Shortboard",
      description: "High-performance board for advanced surfers. Quick and responsive.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      specs: { length: "6'2\"", width: "19\"", thickness: "2.5\"" }
    },
    {
      id: 3,
      name: "Hybrid Funboard",
      description: "Best of both worlds. Stability meets performance.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      specs: { length: "7'8\"", width: "21\"", thickness: "2.75\"" }
    },
    {
      id: 4,
      name: "Fish Twin Fin",
      description: "Retro-inspired design with modern performance.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      specs: { length: "6'8\"", width: "22\"", thickness: "2.5\"" }
    },
    {
      id: 5,
      name: "Gun Big Wave",
      description: "Built for serious waves. Maximum control and speed.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      specs: { length: "8'4\"", width: "18.5\"", thickness: "2.75\"" }
    },
    {
      id: 6,
      name: "Foam Beginner",
      description: "Safe and forgiving. Perfect for learning.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      specs: { length: "8'0\"", width: "22\"", thickness: "3.5\"" }
    }
  ];

  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <section id="boards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Boards
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each board is meticulously handcrafted using premium materials and decades of experience. 
            From classic longboards to high-performance shortboards, we shape boards for every surfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boards.map((board) => (
            <div 
              key={board.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedBoard(boards)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={board.image} 
                    alt={board.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{board.name}</h3>
                  <p className="text-slate-600 mb-4">{board.description}</p>
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>Length: {board.specs.length}</span>
                    <span>Width: {board.specs.width}</span>
                    <span>Thick: {board.specs.thickness}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600 mb-6">
            Don't see what you're looking for? We specialize in custom boards tailored to your style.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Request Custom Board
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoardGallery;