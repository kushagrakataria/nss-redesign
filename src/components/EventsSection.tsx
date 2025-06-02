
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const events = [
    {
      title: "World Environment Day",
      image: "/nss-uploads/59f73524-d4e8-4a85-8f54-310ea2e45ec9.png",
      description: "Collaboration with Noble Citizen Foundation, Suez India, and Municipal Corporation of Gurugram for environmental awareness"
    },
    {
      title: "Fake News Awareness",
      image: "/nss-uploads/06e4f484-09f8-459d-a993-0b1b207caaa6.png",
      description: "Webinar on debunking and detection of fake news in collaboration with Pathway Global Alliance and Sputnik India"
    },
    {
      title: "Mock Drill Session",
      image: "/nss-uploads/cb86490d-7271-4855-917e-f8306e413497.png",
      description: "Emergency preparedness training and disaster management mock drill session organized by NSS NSUT Cell"
    },
    {
      title: "Water Treatment Session",
      image: "/nss-uploads/6f3d619e-f562-4f0c-9dcc-e640b0d3e2cb.png",
      description: "Participation in water treatment session to learn about water purification and conservation techniques"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nss-navy mb-4">Recent Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our latest community service initiatives and activities</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-nss-navy">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-nss-blue text-nss-blue hover:bg-nss-blue hover:text-white">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
