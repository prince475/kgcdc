import DynamicText from "@/components/texts/DynamicText";
import SectionHeading from "../../components/texts/SectionHeading";

import heroSectionImage from "@assets/images/homepage/hero-section/hero-section-image.svg";
import Button from "@/components/buttons/Button";

const Home = () => {
  return (
    <div className="relative">
      <img src={heroSectionImage} className="w-full" alt="Hero Section Image" />

      <div className="absolute -bottom-60 flex min-h-[50vh] w-full flex-col items-center justify-center gap-8 rounded-[160px] bg-[#E3D8F6] p-4">
        <SectionHeading className={""}>
          Kuria Girl Child Development Center
        </SectionHeading>
        <DynamicText as="h3" className="lg:text-[28px]">
          Empowering Girls, Transforming Communities
        </DynamicText>
        <DynamicText className={"lg:text-center lg:text-xl"}>
          Join us in our mission to empower girls and transform communities.
          Together, we&apos;re creating a world where every girl has the
          opportunity to thrive. Learn how you can make a difference today.
        </DynamicText>

        <div className="flex items-center gap-4">
          <Button className="bg-purple-800 text-white outline-purple-800 hover:bg-white hover:text-purple-800">
            Join Us
          </Button>
          <Button>Donate</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
