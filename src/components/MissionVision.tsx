import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function MissionVision() {
  return (
    <section id="mission-vision" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-gray-900" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Our Mission</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  To deliver high-performance engineering solutions, strategic sourcing, and reliable technical manpower that enable semiconductor manufacturers to operate with world-class efficiency, service excellence, and cost competitiveness.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-gray-900" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Our Vision</h2>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  To be Asia's most trusted semiconductor engineering and sourcing partner—recognized for technical depth, operational agility, and a commitment to reducing total cost of ownership (TCO) across every fab we support.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Commitments 
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 mb-1 sm:mb-2">Faster</div>
              <div className="text-xs sm:text-sm text-gray-600">Tool Recovery</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 mb-1 sm:mb-2">Higher</div>
              <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 mb-1 sm:mb-2">Better</div>
              <div className="text-xs sm:text-sm text-gray-600">Yield</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-blue-600 mb-1 sm:mb-2">Lower</div>
              <div className="text-xs sm:text-sm text-gray-600">TCO</div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
