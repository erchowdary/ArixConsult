import { MapPin, Users, Handshake, Database } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const growthPlans = [
  {
    icon: MapPin,
    title: "India Expansion",
    description: "Expansion into India's semiconductor ecosystem",
    color: "bg-orange-600",
    gradient: "from-orange-50 to-red-50"
  },
  {
    icon: Users,
    title: "Manpower Growth",
    description: "Building a larger manpower pool for 200mm/300mm support",
    color: "bg-blue-600",
    gradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Strategic partnerships with OEMs, tool refurbishers, and parts suppliers",
    color: "bg-purple-600",
    gradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Database,
    title: "Digital Transformation",
    description: "Digitalisation of sourcing and engineering knowledge systems",
    color: "bg-green-600",
    gradient: "from-green-50 to-teal-50"
  }
];

export function FutureGrowth() {
  return (
    <section id="future-growth" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Future Growth Plans</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Building the future of semiconductor engineering and sourcing excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {growthPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className={`bg-gradient-to-br ${plan.gradient} rounded-xl p-6 mb-4`}>
                    <div className={`w-14 h-14 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-gray-900 text-center mb-2" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{plan.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
                    {plan.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-lg">
            <p className="text-gray-700 text-sm sm:text-base">
              Positioning for the next wave of semiconductor growth in Asia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
