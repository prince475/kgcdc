
import { ourApproachData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";


export const OurApproach = () => {

  const { name, description } = ourApproachData[0];

  return (
    <section className="bg-gray-50 pt-20 px-10 -mt-24 rounded-t-[120px] z-40 ">
      <DynamicText as="h2" className="text-2xl font-bold text-purple-800">
        {name} 
      </DynamicText>
      <DynamicText as="p" className="text-base text-gray-700 mt-4">
        {description}
      </DynamicText>
    </section>
  )
}


