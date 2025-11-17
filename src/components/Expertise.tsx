import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Zap, Microscope, Factory, Wrench, ChartBar } from "lucide-react";
import image1 from "figma:asset/a5d72cb3c886afe8814d57d93f2c3f5a09d562f6.png";
import image2 from "figma:asset/124cb9aabc271ec1dd685e7672f8c16e4568988d.png";

export function Expertise() {
  const areas = [
    { icon: Cpu, text: "IC Design & Verification" },
    { icon: Zap, text: "Process Engineering" },
    { icon: Microscope, text: "R&D & Innovation" },
    { icon: Factory, text: "Manufacturing & Fab" },
    { icon: Wrench, text: "Equipment & Tooling" },
    { icon: ChartBar, text: "Yield & Quality" }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Expertise Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Specialized talent across the entire semiconductor value chain
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <area.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-gray-900 text-sm sm:text-base">{area.text}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image1}
              alt="Semiconductor precision equipment"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={image2}
              alt="Automated semiconductor manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}