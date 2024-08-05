import { ourApproachData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";
import SectionHeading from "@/components/texts/SectionHeading";

export const OurApproach = () => {

  const { name, description } = ourApproachData[0];

  return (
    <section className="bg-gray-50 px-6 py-8 md:px-10 md:py-12 lg:px-24 lg:pt-20 lg:-mt-[112px] -mt-40 rounded-t-[70px] lg:rounded-t-[120px] z-40">
      <SectionHeading className="text-left text-purple-800">
        {name}
      </SectionHeading>
      <DynamicText as="p" className="text-base leading-6 font-montserrat text-left text-black mt-10 md:text-lg lg:text-xl md:leading-7 lg:leading-8">
        {description}
      </DynamicText>
    </section>
  );
};
