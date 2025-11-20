import { MapPin, Zap, TrendingUp, DollarSign } from "lucide-react";

const regions = [
  "Singapore",
  "Malaysia",
  "China",
  "Taiwan",
  "India"
];

const competitiveEdges = [
  {
    title: "Speed",
    description: "Fast response and quick deployment",
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    title: "Engineering Depth",
    description: "Deep technical expertise and field experience",
    icon: TrendingUp,
    color: "bg-blue-600"
  },
  {
    title: "Cost Transparency",
    description: "Clear pricing and value optimization",
    icon: DollarSign,
    color: "bg-green-600"
  }
];

export function MarketPositioning() {
  return (
    <section id="market-positioning" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Market Positioning</h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            Arix Consultancy positions itself as a high-reliability partner with strong regional supply chain access in Singapore, Malaysia, China, Taiwan, and India. Our competitive edge lies in speed, engineering depth, and cost transparency.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Regional Coverage */}
          <div className="mb-12">
            <h3 className="text-gray-900 text-center mb-6" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Regional Supply Chain Access</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {regions.map((region, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-blue-600 text-blue-900 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  <span>{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Edge */}
          <div>
            <h3 className="text-gray-900 text-center mb-8" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Our Competitive Edge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {competitiveEdges.map((edge, index) => {
                const Icon = edge.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-16 h-16 ${edge.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{edge.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {edge.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
