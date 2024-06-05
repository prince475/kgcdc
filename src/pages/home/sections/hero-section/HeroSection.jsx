import DynamicText from "@/components/texts/DynamicText";
import heroSectionImage from "@assets/images/homepage/hero-section/hero-section-image.svg";
import Button from "@/components/buttons/Button";
import SectionHeading from "@/components/texts/SectionHeading";
const HeroSection = () => {
  return (
    <div>
      <img src={heroSectionImage} className="w-full" alt="Hero Section Image" />

      <div className="relative z-10 -mt-10 flex min-h-[50vh] w-full flex-col items-center justify-center gap-2 rounded-[40px] bg-[#E3D8F6] p-5 lg:-mt-52 lg:gap-8 lg:rounded-[160px] lg:px-56">
        <SectionHeading className={""}>
          Kuria Girl Child Development Center
        </SectionHeading>
        <DynamicText as="h3" className="text-sm lg:text-[28px]">
          Empowering Girls, Transforming Communities
        </DynamicText>
        <DynamicText className={"lg:text-xl"}>
          Join us in our mission to empower girls and transform communities.
          Together, we&apos;re creating a world where every girl has the
          opportunity to thrive. Learn how you can make a difference today.
        </DynamicText>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button className="bg-purple-800 text-white outline-purple-800 hover:bg-white hover:text-purple-800">
            Join Us
          </Button>
          <Button>Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
