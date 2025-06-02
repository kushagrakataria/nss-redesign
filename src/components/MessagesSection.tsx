
import { Card, CardContent } from "@/components/ui/card";

const MessagesSection = () => {
  const messages = [
    {
      title: "Vice Chancellor",
      name: "Prof. Anand Srivastava",
      image: "/nss-uploads/63127fe1-579d-4843-94ea-d4112d95e109.png",
      message: "It is with great pride that I greet all members and supporters of the National Service Scheme (NSS) at Netaji Subhas University of Technology. NSS plays a vital role in shaping our students' character by fostering social responsibility and community service. NSS volunteers exemplify compassion, leadership, and selflessness through their dedication to various social initiatives."
    },
    {
      title: "Program Coordinator",
      name: "Dr. Praveen Saroha",
      image: "/nss-uploads/d285e192-589f-41de-b436-5b2376202dc3.png",
      message: "Welcome to the NSS NSUT Cell! It is an honor to serve as your Program Coordinator and work with such passionate individuals dedicated to making a positive impact. NSS is more than a program; it's a movement empowering students to tackle real-world challenges through initiatives in environmental conservation and education."
    }
  ];

  return (
    <section className="py-16 bg-nss-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-nss-navy mb-4">Leadership Messages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Inspiring words from our dedicated leaders</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {messages.map((msg, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={msg.image} 
                    alt={msg.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-nss-blue"
                  />
                  <div>
                    <h3 className="font-bold text-nss-navy">{msg.title}</h3>
                    <p className="text-sm text-gray-600">{msg.name}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{msg.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
