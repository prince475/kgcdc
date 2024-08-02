import SectionHeading from "@/components/texts/SectionHeading";
import { activitiesData } from '@/pages/programs/programsContent'; 

export const Activities = () => {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12 lg:px-20 lg:py-16">
      <SectionHeading className="text-left text-[#7030A0] mb-4 px-0 md:px-6 lg:px-10 lg:mb-6">
        2024 Planned Activities
      </SectionHeading>
    
      <ul className="  md:pl-8 lg:pl-10">
        {activitiesData.map((activity, index) => (
          <li key={index} className="font-montserrat text-base md:text-lg lg:text-xl text-gray-800">
            {index + 1}. {activity}
          </li>
        ))}
      </ul>
    </section>
  );
};
