
import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted");
  // };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 wave-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-6">
            Let's Talk
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="text-slate-800">Contact</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Ready to order your custom board? Have questions about our process? 
            We'd love to hear from you and help find the perfect board for your Atlantic adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-slate-800 mb-10">
              Send Us a Message
            </h3>
            
            <div className="space-y-8">
              {/* <div className="flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <MapPin className="w-8 h-8 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-lg mb-2">Location</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Rua das Ondas, 42<br />
                    2655-319 Ericeira<br />
                    Portugal
                  </p>
                </div>
              </div> */}

              <div className="flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-8 h-8 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-lg mb-2">Phone</h4>
                  <p className="text-slate-600">TBD</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="w-8 h-8 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-lg mb-2">Email</h4>
                  <p className="text-slate-600">hello@gibsonsurfboards.pt</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Clock className="w-8 h-8 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 text-lg mb-2">Hours</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Monday - Friday: 9am - 6pm<br />
                    Saturday: 9am - 5pm<br />
                    Sunday: Gone Surfing<br />
                    <span className="text-sm text-slate-500 italic">Closed during epic swells!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl border border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Custom Board Process</h4>
              <p className="text-slate-700 leading-relaxed">
                Custom boards typically take 4-6 weeks from design to completion. 
                We work with you at every step to ensure your board is perfect for 
                Portuguese waves and your unique surfing style.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {/* <h3 className="text-2xl font-bold text-slate-800 mb-8">Send Us a Message</h3> */}
            
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  required 
                  className="w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone (Optional)
                </label>
                <Input 
                  type="tel" 
                  className="w-full"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Board Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select board type</option>
                  <option value="longboard">Longboard</option>
                  <option value="shortboard">Shortboard</option>
                  <option value="funboard">Funboard</option>
                  <option value="fish">Fish</option>
                  <option value="gun">Gun</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea 
                  required 
                  className="w-full h-32"
                  placeholder="Tell us about your surfing style, preferred dimensions, or any specific requirements..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                Send Message
              </Button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;