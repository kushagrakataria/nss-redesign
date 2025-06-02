
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';

const NoticesSection = () => {
  const notices = [
    "Entries are Invited for Volunteerism during GLA Elections-2025, Facilitation",
    "Invitation to Participate in the Viksit Bharat Quiz Challenge",
    "Invitation to attend the NSS Orientation scheduled to be held in APJ-11",
    "NSS Credit Course Event-Work Hour List"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nss-navy mb-4">Recent Notices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest announcements and opportunities</p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-nss-navy text-white">
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Latest Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-2 h-2 bg-nss-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 flex-1">{notice}</p>
                  <ArrowRight className="h-4 w-4 text-gray-400 flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" className="border-nss-blue text-nss-blue hover:bg-nss-blue hover:text-white">
                View All Notices
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NoticesSection;
