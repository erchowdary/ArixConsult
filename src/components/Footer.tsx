import { Linkedin, Mail } from "lucide-react";
import logo from "figma:asset/22ad7292bd829158e82abf6b247017ce09519674.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="ARIX Consultancy" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed">
              Leading semiconductor talent solutions provider, connecting exceptional professionals with industry pioneers.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services-portfolio" className="hover:text-white transition-colors">Contract Staffing</a></li>
              <li><a href="#services-portfolio" className="hover:text-white transition-colors">Direct Hire</a></li>
              <li><a href="#services-portfolio" className="hover:text-white transition-colors">Project Consulting</a></li>
              {/* <li><a href="#services-portfolio" className="hover:text-white transition-colors">Executive Search</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Expertise</h4>
            <ul className="space-y-2 text-sm">
            {/*  <li><a href="#expertise" className="hover:text-white transition-colors">IC Design</a></li>  */}
              <li><a href="#semiconductor-expertise" className="hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="#semiconductor-expertise" className="hover:text-white transition-colors">Process Engineering</a></li>
              <li><a href="#semiconductor-expertise" className="hover:text-white transition-colors">Equipment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>sales@arixconsult.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; 2024 Arixconsult. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}