import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      title: "Deep Industry Knowledge",
      description: "15+ years exclusively serving the semiconductor industry with specialized recruiters who understand your technical needs."
    },
    {
      title: "Global Talent Network",
      description: "Access to a vetted database of 10,000+ semiconductor professionals across design, manufacturing, and R&D."
    },
    {
      title: "Fast Deployment",
      description: "Average placement time of 2 weeks with our extensive network and streamlined processes."
    },
    {
      title: "Quality Guaranteed",
      description: "Rigorous vetting process ensures only the top 5% of candidates with proven semiconductor expertise."
    },
    {
      title: "Technical Precision",
      description: "Understanding of advanced nodes, EDA tools, fab processes, and specialized semiconductor technologies."
    },
    {
      title: "Flexible Engagement",
      description: "Contract, contract-to-hire, or direct placement options to fit your project timelines and budget."
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Your trusted partner for semiconductor talent acquisition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm sm:text-base">Successful Placements</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 text-sm sm:text-base">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm sm:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}