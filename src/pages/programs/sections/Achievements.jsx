import { achievementData } from "@/pages/programs/programsContent";
import DynamicText from "@/components/texts/DynamicText";
import SectionHeading from "@/components/texts/SectionHeading";

const OurAchievements = () => {
  return (
    <section className=" py-8  md:py-12 lg:py-20">

      <SectionHeading className="py-4 text-left text-[#7030A0] md:py-6 lg:py-8 lg:px-20">
        Achievements
      </SectionHeading>

      <div className="flex flex-col lg:flex-row w-full py-10 bg-[#402E71] gap-4">
        {/* Left Section: Description */}
        <div className="w-full lg:w-1/3 mb-6 lg:px-8  md:px-4 px-0 lg:mb-0">
          <DynamicText as="p" 
          className="text-base  px-6 md:px-10 text-start lg:text-lg text-white">
            {achievementData[0].description} 
          </DynamicText>
        </div>
        {/* border line: horizontal on mobile and vertical on desktop */}
        <div className="border mx-4 font-montserrat lg:border-l-0 lg:border-r-2 lg:border-y-0  border-x-0 border-t-0">

        </div>

        {/* Right Section: Stats */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          {achievementData.slice(1).map((achievement, index) => (
            <div key={index} className="flex flex-col justify-center p-4   rounded-md">
              <DynamicText as="h3" className="text-xl md:text-2xl lg:text-[32px] mb-2 md:mb-4 lg:mb-6 font-montserrat font-semibold text-white">
                {achievement.stats}
              </DynamicText>
              <DynamicText as="p" className="text-sm md:text-base lg:text-[16px] font-montserrat text-white">
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
