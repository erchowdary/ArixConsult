import { Cpu, Factory } from "lucide-react";

const fabTypes = [
  { label: "200mm Fabs", color: "bg-blue-600" },
  { label: "300mm Fabs", color: "bg-indigo-600" }
];

const domains = [
  "Process",
  "Equipment",
  "Facilities",
  "Yield",
  "Industrial Engineering"
];

const equipment = [
  "Wet Clean",
  "Etch",
  "Diffusion",
  "Furnace",
  "Lithography",
  "CMP",
  "Metrology",
  "PVD",
  "CVD",
  "Implant",
  "FA Labs"
];

export function SemiconductorExpertise() {
  return (
    <section id="semiconductor-expertise" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Semiconductor Industry Expertise</h2>
          <p className="text-gray-700 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed">
            We support 200mm and 300mm fabs in Process, Equipment, Facilities, Yield, and Industrial Engineering domains. Our experience includes Wet Clean, Etch, Diffusion, Furnace, Lithography, CMP, Metrology, PVD, CVD, Implant, and FA Labs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Fab Types */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {fabTypes.map((fab, index) => (
              <div 
                key={index}
                className={`${fab.color} text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg`}
              >
                <Factory className="h-5 w-5" />
                <span>{fab.label}</span>
              </div>
            ))}
          </div>

          {/* Domains */}
          <div className="mb-10">
            <h3 className="text-gray-900 text-center mb-6">Engineering Domains</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {domains.map((domain, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-900 px-4 py-2 rounded-lg shadow-sm"
                >
                  {domain}
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-gray-900 text-center mb-6">Equipment Experience</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {equipment.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-center shadow-sm hover:shadow-md hover:border-blue-400 transition-all text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
