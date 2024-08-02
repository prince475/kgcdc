import { programsData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";
import SectionHeading from "@/components/texts/SectionHeading";
import Button from "@/components/buttons/Button";

const OurPrograms = () => {
  return (
    <section className="bg-gray-50 px-2 py-4 md:px-10 md:py-4 lg:px-20 lg:py-4">
      <SectionHeading className="py-4 mb-4 text-left text-[#7030A0] px-2 lg:p-8 lg:px-1">
        Our Programs
      </SectionHeading>

      <div className="flex flex-col gap-12">
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

            <div className="lg:w-1/2 flex  flex-col justify-center">
              <DynamicText
                as="h1"
                className="text-xl font-bold text-purple-800 lg:text-3xl mb-4 font-montserrat"
              >
                {program.title}
              </DynamicText>
              {program.description.map((paragraph, idx) => (
                <DynamicText
                  key={idx}
                  as="p"
                  className="text-base leading-7 lg:text-lg text-left text-black mt-4"
                >
                  {paragraph}
                </DynamicText>
              ))}

              <div
                className={`flex flex-col justify-end items-center mt-10 gap-4 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <Button className="hover:bg-green-600 outline-green-600 text-green-700">
                  Join Us
                </Button>
                <Button className="bg-green-600 text-white outline-green-600 hover:bg-white hover:text-green-600">
                  Support Us
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
