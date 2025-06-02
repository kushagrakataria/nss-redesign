
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: 'https://x.com/nssnsutcell?lang=en' },
    { name: 'Instagram', url: 'https://www.instagram.com/nssnsutcell/?hl=en' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/nss-nsut-delhi/?originalSubdomain=in' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCZRtEXP1DKBS4RHyxkXlRuQ' }
  ];

  const quickLinks = [
    { name: 'NSUT', url: '#' },
    { name: 'NSS', url: '#' },
    { name: 'Government of India', url: '#' },
    { name: 'Ministry of Youth Affairs and Sports', url: '#' }
  ];

  return (
    <footer className="bg-nss-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Email:</strong> nsscoordinator.nsut@gmail.com
              </p>
              <p>
                <strong>Address:</strong> NSS Office, Student Activity Centre, NSUT, 
                Azad Hind Fauj Marg, Dwarka Sector-3, Delhi-110078
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media for updates and events
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="border-gray-400 text-gray-300 hover:bg-white hover:text-nss-navy"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/nss-uploads/a7ccb185-30d1-4392-957b-6df1d901e7f3.png" alt="NSS Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold">NSS NSUT CELL</span>
          </div>
          <p className="text-gray-400">
            © 2024 NSS-NSUT CELL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
