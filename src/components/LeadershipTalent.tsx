import { Users, Award, Shield, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Experienced Leadership",
    description: "Engineers and supply-chain specialists with deep fab experience",
    color: "bg-blue-600"
  },
  {
    icon: Award,
    title: "Continuous Training",
    description: "Ongoing skill development and knowledge enhancement programs",
    color: "bg-indigo-600"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strong emphasis on workplace safety and compliance standards",
    color: "bg-green-600"
  },
  {
    icon: TrendingUp,
    title: "Process Discipline",
    description: "Rigorous adherence to best practices and operational excellence",
    color: "bg-purple-600"
  }
];

export function LeadershipTalent() {
  return (
    <section id="leadership" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Leadership & Talent</h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            Our leadership team consists of engineers and supply-chain specialists with deep fab experience across Asia. We emphasise continuous training, safety, and process discipline.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
