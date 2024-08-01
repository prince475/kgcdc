
import { programsData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";

const OurPrograms = () => {
  return (
    <div className="flex flex-col px-10 gap-12">
      {programsData.map((program, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-8 p-4 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <img
            src={program.image}
            alt={program.title}
            className="w-full lg:w-1/2 h-auto rounded-lg"
          />
          <div className="lg:w-1/2 flex flex-col justify-center">
            <DynamicText as="h2" className="text-2xl font-semibold text-purple-800">
              {program.title}
            </DynamicText>
            <DynamicText as="p" className="text-base text-gray-700 mt-4">
              {program.description}
            </DynamicText>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurPrograms;
