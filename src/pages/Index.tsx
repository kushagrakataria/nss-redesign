
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NoticesSection from "@/components/NoticesSection";
import WelcomeSection from "@/components/WelcomeSection";
import MessagesSection from "@/components/MessagesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NoticesSection />
      <WelcomeSection />
      <MessagesSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;
