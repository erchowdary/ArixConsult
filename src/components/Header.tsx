import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/22ad7292bd829158e82abf6b247017ce09519674.png";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="ARIX Consultancy"
              className="h-12 sm:h-14 md:h-16"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() =>
                scrollToSection("services-portfolio")
              }
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("our-approach")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("leadership")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("future-growth")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Future Growth
            </button>
            <button
              onClick={() => scrollToSection("core-values")}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Core Values
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <button
              onClick={() => scrollToSection("overview")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() =>
                scrollToSection("services-portfolio")
              }
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("our-approach")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("leadership")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("future-growth")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Future Growth
            </button>
            <button
              onClick={() => scrollToSection("core-values")}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
             Core Values
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}