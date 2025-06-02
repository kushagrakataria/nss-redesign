
const WelcomeSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nss-navy mb-4 md:mb-6">
            Welcome to NSS NSUT
          </h2>
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 md:space-y-6 text-left md:text-center">
            <p>
              We are thrilled to welcome you to the official website of the National Service Scheme (NSS) 
              at Netaji Subhas University of Technology. Our mission is to empower students through meaningful 
              community service, fostering a spirit of social responsibility and leadership.
            </p>
            <p>
              At NSS, we live by the motto <span className="font-semibold text-nss-blue">"Not Me, But You"</span>, 
              believing in the power of volunteerism to create positive change in society. Whether you're a current 
              volunteer, a prospective member, or simply someone interested in learning more about our initiatives, 
              we invite you to explore our site and discover numerous opportunities for involvement.
            </p>
            <p>
              Join us in our journey of service, growth, and excellence as we strive to make a difference in 
              our community and beyond. Together, let's cultivate compassion, drive change, and inspire one 
              another to reach greater heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
