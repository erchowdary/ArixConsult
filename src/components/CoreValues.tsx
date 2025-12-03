import { Award, DollarSign, Shield, Zap, Handshake, CheckCircle, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  {
    number: "",
    title: "Engineering Excellence",
    description: "We deliver solutions grounded in deep technical knowledge, practical field experience, and proven best practices across 200mm and 300mm fabs.",
    icon: Award,
    color: "blue"
  },
  {
    number: "",
    title: "Cost Competitiveness",
    description: "We help customers achieve maximum value through optimized sourcing, lifecycle cost analysis, smart refurbish-vs-replace strategies, and transparent pricing.",
    icon: DollarSign,
    color: "green"
  },
  {
    number: "",
    title: "Reliability & Accountability",
    description: "We stand by our commitments—ensuring uptime, timely delivery, and predictable service quality that customers can rely on.",
    icon: Shield,
    color: "indigo"
  },
  {
    number: "",
    title: "Agility & Problem-Solving",
    description: "We respond quickly, adapt to dynamic market conditions, and provide solutions that minimize downtime, risks, and operational disruptions.",
    icon: Zap,
    color: "yellow"
  },
  {
    number: "",
    title: "Partnership & Trust",
    description: "We build long-term relationships by listening, understanding customer goals, and offering solutions aligned with each fab's operational and commercial needs.",
    icon: Handshake,
    color: "purple"
  },
  {
    number: "",
    title: "Integrity & Professionalism",
    description: "We operate with honesty, respect, and professional ethics in all interactions—with customers, suppliers, and engineering partners.",
    icon: CheckCircle,
    color: "teal"
  },
  {
    number: "",
    title: "Talent Development",
    description: "We cultivate skilled engineering manpower and provide continuous training to ensure our team remains future-ready in a fast-evolving semiconductor ecosystem.",
    icon: GraduationCap,
    color: "orange"
  }
];

const colorClasses = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  indigo: "bg-indigo-600",
  yellow: "bg-yellow-500",
  purple: "bg-purple-600",
  teal: "bg-teal-600",
  orange: "bg-orange-600"
};

export function CoreValues() {
  return (
    <section id="core-values" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Core Values</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Our values guide every decision we make and every solution we deliver
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${colorClasses[value.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">{value.number}</div>
                      <h3 className="text-gray-900" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{value.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
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
