import JoinUs from "./sections/JoinUs";
import OurPatners from "./sections/OurPatners";
import SectionHeading from "@/components/texts/SectionHeading";
const SupportUs = () => {
  return (

    <section >
       <SectionHeading className=" font-montserrat text-left text-purple-800 px-3 lg:py-10 lg:px-24">
        Our Patners
      </SectionHeading>

      <OurPatners />
      <JoinUs />
    </section>
  )
};

export default SupportUs;
