
import { Users, Award, Heart, Wrench } from "lucide-react";
import lachlanorangeboard from "../assets/images/lachlanorangeboard.jpg";

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
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50 wave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
                <span>Gibson</span>
                <br />
                <span className="text-3xl md:text-4xl font-light text-slate-600">Surf Boards</span>
              </h2>
            </div>
            
           
            <p className="text-lg text-slate-600 mb-6">
              Founded in 2022 by master shaper John Gibson Jr. and his son Lachlan Gibson, our family has been creating 
              exceptional surfboards for three generations. What started as a family passion project in the 70s
              in a small garage in Southern California has grown into an exceptional local business based out of the beautiful Algarve, Portugal.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Today, John works alongside his son Lachlan to continue the Gibson 
              tradition of excellence. Each board is shaped by hand, glassed in-house, and finished 
              with the care and attention that only comes from true craftsmanship.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">38+</div>
                <div className="text-sm text-slate-600">Years of Family Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
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
              src={lachlanorangeboard} 
              alt="Surfboard workshop"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold">"Every board tells a story"</p>
              <p className="text-sm opacity-90">- John Gibson Jr., Founder</p>
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