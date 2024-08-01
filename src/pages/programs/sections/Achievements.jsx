
import { achievementData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";
import SectionHeading from "@/components/texts/SectionHeading";

const OurAchievements = () => {
  return (
    <section className="px-4">

      <SectionHeading className="py-4 text-left text-purple-800 lg:p-8 lg:px-10">
        Achievements
      </SectionHeading>


    <div className="flex w-full py-10 bg-purple-950 p-4 gap-4">
      {/* Left Section: Description */}
      <div className="w-full lg:w-1/3">
        <DynamicText as="p" className="text-base border border-l-0 border-y-0 px-10  text-start lg:text-lg text-white">
          {achievementData[0].description}
        </DynamicText>
      </div>

      {/* Right Section: Stats */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {achievementData.slice(1).map((achievement, index) => (
          <div key={index} className="flex flex-col borde justify-center  ">
            <DynamicText as="h3" className="lg:text-[32px] font-montserrat  font-semibold text-white mb-4">
              {achievement.stats}
            </DynamicText>
            <DynamicText as="p" className="lg:text-[16px] text-white">
              {achievement.about}
            </DynamicText>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default OurAchievements;
