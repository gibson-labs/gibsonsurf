
import { useState } from "react";
import spaceboard from "../assets/images/spaceboard.jpg";
import TyeDyeFire from "../assets/images/TyeDyeFire.jpg";


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
      name: "StarBoard",
      description: "surf to the moon and back. (this is an example of how to set pictures for lachy to change later)",
      image: spaceboard,
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
      image: TyeDyeFire,
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
    <section id="boards" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
            Our Creations
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
            <span className="text-slate-800">Handcrafted</span>
            <br />
            <span className="text-3xl md:text-4xl font-light">Boards</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each board is meticulously handcrafted using premium materials and decades of experience. 
            From classic longboards to high-performance shortboards, we shape boards for every surfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {boards.map((board, index) => (
            <div 
              key={board.id}
              className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedBoard(board)}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:border-blue-200 transition-all duration-300">
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={board.image} 
                    alt={board.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Price badge */}
                  {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-800 px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {board.price}
                  </div> */}
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-1">{board.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{board.description}</p>
                  
                  <div className="flex justify-between text-sm bg-slate-50 p-4 rounded-2xl">
                    <div className="text-center">
                      <div className="font-semibold text-slate-800">Length</div>
                      <div className="text-slate-600">{board.specs.length}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-slate-800">Width</div>
                      <div className="text-slate-600">{board.specs.width}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-slate-800">Thickness</div>
                      <div className="text-slate-600">{board.specs.thickness}</div>
                    </div>
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