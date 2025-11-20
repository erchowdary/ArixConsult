import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const serviceCategories = [
  {
    title: "Installation & Relocation",
    items: [
      "Tool installation, relocation, and decommissioning",
    ],
  },
  {
    title: "Equipment Sourcing",
    items: ["Refurbished tool sourcing (8'' & 12'' fabs)"],
  },
  {
    title: "Critical Parts",
    items: [
      "Quartzware, o-rings, ceramics",
      "ESCs, valves, MFCs",
      "Design to built gas Weldment solutions",
      "IGS gas panels",
    ],
  },
  {
    title: "Parts Programs",
    items: [
      "Swap kits for Etch, PVD, Furnace",
      "Parts cleaning programs",
    ],
  },
  {
    title: "Manpower Support",
    items: ["Onsite manpower support", "Contract engineering"],
  },
  {
    title: "Consulting & Optimization",
    items: ["OEE and cost reduction consulting"],
  },
  {
    title: "Equipment Transactions",
    items: [
      "Used tools buy/sell transactions",
      "Technical inspections",
    ],
  },
  {
    title: "Repair & Service",
    items: [
      "Maximizing tool uptime with specialized component repair and refurbishment",
      "DI water system repair",
      "Gas Box Repair & Fabrication",
      "Critical Value Overhaul",
      "Consumables Sourcing (High Purity Quartzware & Ceramics)",
    ],
  },
  {
    title: "200mm Equipment",
    items: [
      "Reliable sourcing and delivery of legacy 200mm tools and modules",
      "Module-Based Tool Sales",
      "Used Tool Refurbishment",
      "System Integration & Testing",
      "Warranty and Post-Sale Support",
    ],
  },
  {
    title: "300mm Equipment",
    items: [
      "Providing cost-effective, high-quality 300mm solutions with full turnkey options",
      "Full Turnkey Solutions",
      "Advanced Tool Sourcing",
      "Comprehensive System Refurbishment",
      "Capacity Expansion Support",
    ],
  },
];

export function ServicesPortfolio() {
  return (
    <section
      id="services-portfolio"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Our Services & Expertise
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Comprehensive semiconductor support services
            tailored to your fab's needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all bg-white"
            >
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}