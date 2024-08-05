import  { useState } from "react";
import JoinUs from "./sections/JoinUs";
import OurPatners from "./sections/OurPatners";
import SectionHeading from "@/components/texts/SectionHeading";
import Volunteer from "./sections/Volunteer";
import SponsorChild from "./sections/SponsorChild";
import LoadingSpinner from "./sections/LoadingSpinner";

const SupportUs = () => {
  const [activeSection, setActiveSection] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  const handleShowVolunteer = () => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveSection('volunteer');
      setIsLoading(false);
    }, 1000); 
  };

  const handleShowSponsorChild = () => {
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveSection('sponsorChild');
      setIsLoading(false);
    }, 1000); 
  };

  return (
    <section>
      {isLoading ? (
        <LoadingSpinner /> 
      ) : (
        <>
          {activeSection === 'default' && (
            <>
              <SectionHeading className="font-montserrat text-left text-purple-800 px-3 lg:py-10 lg:px-24">
                Our Partners
              </SectionHeading>
              <OurPatners />
              <JoinUs onShowVolunteer={handleShowVolunteer} onShowSponsorChild={handleShowSponsorChild} />
            </>
          )}
          {activeSection === 'volunteer' && <Volunteer />}
          {activeSection === 'sponsorChild' && <SponsorChild />}
        </>
      )}
    </section>
  );
};

export default SupportUs;
