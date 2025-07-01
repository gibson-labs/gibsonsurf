
import { Users, Award, Heart, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Family Business",
      description: "Three generations of surfboard craftsmanship passed down through our family."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Handcrafted",
      description: "Every board is shaped by hand using traditional techniques and premium materials."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Guaranteed",
      description: "We stand behind every board with our commitment to exceptional quality."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Passion Driven",
      description: "Our love for surfing and the ocean drives everything we create."
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Gibson Surf Boards
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Founded in 1985 by master shaper Mike Gibson, our family business has been creating 
              exceptional surfboards for nearly four decades. What started as a passion project 
              in a small garage has grown into a respected name in the surfing community.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Today, Mike works alongside his son Jake and daughter Sarah to continue the Gibson 
              tradition of excellence. Each board is shaped by hand, glassed in-house, and finished 
              with the care and attention that only comes from true craftsmanship.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">38+</div>
                <div className="text-sm text-slate-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-sm text-slate-600">Boards Crafted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-slate-600">Generations</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" 
              alt="Surfboard workshop"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold">"Every board tells a story"</p>
              <p className="text-sm opacity-90">- Mike Gibson, Founder</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Why Choose Gibson Surf Boards?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;