
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home', 'Notice', 'Events', 'Magazine', 'Adopted Villages', 
    'Volunteers', 'Alumni', 'Collaborator', 'UNDP Goals', 'About Us', 'NSS Team'
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with logos */}
      <div className="bg-nss-navy py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto">
            <img src="/nss-uploads/a7ccb185-30d1-4392-957b-6df1d901e7f3.png" alt="NSS Logo" className="h-8 w-8" />
            <span className="text-white text-xs font-medium whitespace-nowrap">NSS • My Bharat • YAS • Viksit Bharat • Digital India • NSUT</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/nss-uploads/a7ccb185-30d1-4392-957b-6df1d901e7f3.png" alt="NSS NSUT" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-nss-navy">NSS NSUT</h1>
              <p className="text-sm text-gray-600">Not Me, But You</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-nss-blue transition-colors duration-200 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-nss-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
