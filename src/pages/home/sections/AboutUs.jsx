import SectionHeading from "@/components/texts/SectionHeading";
import aboutImage from "@assets/images/homepage/about-us/about-image.svg";
import OurStory from "./OurStory";

const AboutUs = () => {
  return (
    <section className="p-4 md:p-6 lg:p-8 ">
      <SectionHeading className="py-4 text-left text-purple-800 lg:p-8 lg:px-10">
        About Us
      </SectionHeading>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
        <img src={aboutImage} alt="About Us" />

        <OurStory />
      </div>
    </section>
  );
};

export default AboutUs;
