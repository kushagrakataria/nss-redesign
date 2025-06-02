
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/nss-uploads/c5a96950-fe43-4997-a7df-cc09e6c08079.png')`
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 md:mb-6">
            <br />
            <br />
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-white/90 font-semibold animate-fade-in">
            <span className="text-lg md:text-xl lg:text-2xl font-normal">
              Empowering Students Through Community Service
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-fade-in max-w-md mx-auto sm:max-w-none">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto"
            >
              Join Our Mission
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-nss-navy font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto bg-transparent"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
