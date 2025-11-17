import { Zap, MessageSquare, Activity, Handshake } from "lucide-react";

const approaches = [
  {
    title: "Fast Response",
    description: "Quick turnaround and timely support when you need it most",
    icon: Zap,
    color: "bg-yellow-500"
  },
  {
    title: "Clear Communication",
    description: "Transparent updates and honest dialogue throughout every engagement",
    icon: MessageSquare,
    color: "bg-blue-600"
  },
  {
    title: "Engineering-First Analysis",
    description: "Data-driven solutions backed by technical expertise and field experience",
    icon: Activity,
    color: "bg-green-600"
  },
  {
    title: "Long-Term Partnerships",
    description: "Building lasting relationships focused on mutual success and growth",
    icon: Handshake,
    color: "bg-purple-600"
  }
];

export function OurApproach() {
  return (
    <section id="our-approach" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We operate on a performance-centric philosophy: fast response, clear communication, engineering-first analysis, and long-term customer partnerships
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 ${approach.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
