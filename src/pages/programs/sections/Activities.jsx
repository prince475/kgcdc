// Activities.js
import SectionHeading from "@/components/texts/SectionHeading";
import { activitiesData } from '@/pages/programs/programsContent'; 

export const Activities = () => {
  return (
    <section className="">
      <SectionHeading className="py-4 text-left text-purple-800 lg:p-8 lg:px-10">
        2024 Planned Activities
      </SectionHeading>
    
      <ul>
        {activitiesData.map((activity, index) => (
          <li key={index}>{index +1}.{activity}</li>
        ))}
      </ul>
    </section>
  );
};
