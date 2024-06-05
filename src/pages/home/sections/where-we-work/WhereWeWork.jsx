import DynamicText from "@/components/texts/DynamicText";
import map from "@assets/images/homepage/where-we-work/map.svg";

const WhereWeWork = () => {
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:p-8">
      <div className="flex flex-col justify-center gap-4 p-4">
        <DynamicText
          as="h3"
          className="text-left text-2xl font-semibold text-purple-800 md:text-left md:text-2xl lg:text-2xl"
        >
          Where we work
        </DynamicText>
        <DynamicText className="text-left md:text-left">
          We work primarily within the southern part of Kenya, particularly in
          Kuria sub-county, which is situated within Migori county and parts of
          Narok County. The reason for focusing our efforts in this region is
          because it is where harmful practices such as Female Genital
          Mutilation (FGM/C), early marriages, and other detrimental cultural
          practices are prevalent.{" "}
        </DynamicText>
        <DynamicText className="text-left md:text-left">
          By working in this area, we aim to initiate, promote, and facilitate
          community-based development projects that focus on children&apos;s
          quality education, development, and protection against these harmful
          practices. Our goal is to empower families and communities to
          safeguard their children and create a safer, more supportive
          environment for them to thrive.
        </DynamicText>
      </div>
      <img src={map} alt="Map" className="w-full" />
    </div>
  );
};

export default WhereWeWork;
