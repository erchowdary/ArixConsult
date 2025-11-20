import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to build your semiconductor team? Let's discuss your talent needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Email</h3>
              <p className="text-gray-600 text-sm sm:text-base break-words">sales@arixconsult.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Phone</h3>
              <p className="text-gray-600 text-sm sm:text-base">+65 6931 7027</p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Location</h3>
              <p className="text-gray-600 text-sm sm:text-base">12 New Industrial Road, #02-01B Morningstar Center, Singapore 536202</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <CardContent className="pt-6 px-4 sm:px-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your talent needs..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Visit Our Office</h3>
            <p className="text-gray-600 text-sm sm:text-base px-4">
              12 New Industrial Road, #02-01B Morningstar Center, Singapore 536202
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7644687994386!2d103.84442607584995!3d1.3139399986499738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da176f1d9f6b7b%3A0x7e3a6e5f5c8c5f7a!2s12%20New%20Industrial%20Rd%2C%20%2302-01B%20Morningstar%20Centre%2C%20Singapore%20536202!5e0!3m2!1sen!2ssg!4v1647890123456!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}