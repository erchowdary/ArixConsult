import { Wrench, ShoppingCart, Users, TrendingDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const segments = [
  {
    title: "Engineering Solutions",
    description: "Tool installation, startup, refurbishment, PM, troubleshooting, and cost-effective recovery packages.",
    icon: Wrench,
    color: "bg-blue-600"
  },
  {
    title: "Strategic Sourcing",
    description: "Procurement of new, used, and refurbished semiconductor equipment; spare parts sourcing; supplier development.",
    icon: ShoppingCart,
    color: "bg-indigo-600"
  },
  {
    title: "Technical Manpower",
    description: "Deployment of trained engineers and technicians for fab operations, maintenance, and expansion projects.",
    icon: Users,
    color: "bg-purple-600"
  },
  {
    title: "Cost Competitiveness Programs",
    description: "Lifecycle cost optimisation, swap kits programs, supply chain rationalisation, and risk mitigation.",
    icon: TrendingDown,
    color: "bg-green-600"
  }
];

export function KeyBusinessSegments() {
  return (
    <section id="business-segments" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Key Business Segments</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Comprehensive solutions for semiconductor manufacturing excellence
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${segment.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{segment.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {segment.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
