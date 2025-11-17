import { Users, Target, Clock, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for short-term and long-term semiconductor projects with top-tier engineers."
    },
    {
      icon: Target,
      title: "Direct Hire",
      description: "Permanent placement of specialized semiconductor professionals tailored to your organization's needs."
    },
    {
      icon: Clock,
      title: "Project Consulting",
      description: "Expert consulting teams for critical semiconductor development, design, and manufacturing initiatives."
    },
    {
      icon: Award,
      title: "Executive Search",
      description: "Leadership recruitment for senior semiconductor positions requiring deep technical and industry expertise."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Comprehensive manpower solutions designed specifically for the semiconductor industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}