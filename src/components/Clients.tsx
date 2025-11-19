import tataLogo from "figma:asset/6cd0814decd4e03a43f363b1d9467d5013af892b.png";
import ssmcLogo from "figma:asset/1544acc375eeab48afe767a0c9b9c215d95d1d48.png";
import appliedMaterialsLogo from "figma:asset/c5607fad5afb11f2e24df7b2a0ae30a72fa35c69.png";
import dashingLogo from "figma:asset/521933943d78a15a10c97d6cd87cb704b4d383f2.png";
import onSemiconductorLogo from "figma:asset/4b4e54a0af33ca1b3cdb4f99934ad83633a88bfb.png";
import pivotalLogo from "figma:asset/602cf9647dfc5e3c6b2b5c963179ff73f938fe31.png";
import infineonLogo from "figma:asset/ad17ddf4d6a6cd2bba5b8dc198c793434503d318.png";
import micronLogo from "figma:asset/31cbc182a5df4fbf1ce21007e026a1b8e00266b6.png";
import stLogo from "figma:asset/297e20df920bb226000767ca4b9fc14238e7727a.png";
import fablogo from "figma:asset/fab.png";
import chineselogo from "figma:asset/Chinese1.png";
import ichorlogo from "figma:asset/ichor.png";
import kyoceralogo from "figma:asset/kyocera.png";
import silterraLogo from "figma:asset/siltera.png";
import soitecLogo from "figma:asset/soitec.png";
import ThermoquartzLogo from "figma:asset/ThermoQuartz.png";
import uctLogo from "figma:asset/uct.png";

export function Clients() {
  const clients = [
    { name: "Tata", logo: tataLogo },
    { name: "SSMC", logo: ssmcLogo },
    { name: "Applied Materials", logo: appliedMaterialsLogo },
    { name: "Dashing", logo: dashingLogo },
    { name: "ON Semiconductor", logo: onSemiconductorLogo },
    { name: "Pivotal Systems", logo: pivotalLogo },
    { name: "Infineon", logo: infineonLogo },
    { name: "Micron Technology", logo: micronLogo },
    { name: "FAB", logo: fablogo },
    { name: "Chinese Semiconductor", logo: chineselogo },
    { name: "Ichor Systems", logo: ichorlogo },
    { name: "Kyocera", logo: kyoceralogo },
    { name: "Silterra", logo: silterraLogo },
    { name: "Soitec", logo: soitecLogo },
    { name: "Thermoquartz", logo: ThermoquartzLogo },
    { name: "UCT", logo: uctLogo }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2rem", fontWeight: "bold" }}>Key Customers & Regions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg mb-8">
            We partner with leading semiconductor companies worldwide to deliver exceptional talent
          </p>
          
          {/* Regional Coverage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 text-left">
              <h3 className="text-gray-900 mb-2">Singapore</h3>
              <p className="text-gray-700 text-sm">
                200mm & 300mm fabs, IDMs, OSATs
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 text-left">
              <h3 className="text-gray-900 mb-2">Malaysia</h3>
              <p className="text-gray-700 text-sm">
                OSATs, process equipment users
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 text-left">
              <h3 className="text-gray-900 mb-2">India</h3>
              <p className="text-gray-700 text-sm">
                New fab developments and government-backed projects
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-6 md:gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 sm:p-3 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group bg-white"
            >
              {client.logo ? (
                <div className=" w-full flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              ) : (
                <>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 text-xl">
                      {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 text-sm mb-1">{client.name}</div>
                    {client.industry && (
                      <div className="text-gray-500 text-xs">{client.industry}</div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Join 150+ semiconductor companies that trust us with their talent needs
          </p>
        </div>
      </div>
    </section>
  );
}