
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to order your custom board? Have questions about our process? 
            We'd love to hear from you and help you find the perfect board.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Send Us a Message</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {/* <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Address</h4>
                  <p className="text-slate-600">
                    123 Surf Street<br />
                    Huntington Beach, CA 92648
                  </p>
                </div> */}
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <p className="text-slate-600">(714) 555-SURF</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">info@gibsonsurfboards.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 9AM - 5PM<br />
                    Sunday: 11AM - 4PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-2">Custom Board Process</h4>
              <p className="text-slate-600 text-sm">
                Custom boards typically take 4-6 weeks from design to completion. 
                We'll work with you every step of the way to ensure your board is perfect.
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