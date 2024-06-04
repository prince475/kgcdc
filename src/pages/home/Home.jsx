import SectionHeading from "../../components/texts/SectionHeading";

import heroSectionImage from "@assets/images/homepage/hero-section/hero-section-image.svg";

const Home = () => {
  return (
    <div className="relative">
      <img src={heroSectionImage} className="w-full" alt="Hero Section Image" />

      <div className="absolute -bottom-72 flex min-h-[50vh] w-full flex-col items-center justify-center rounded-[160px] bg-[#E3D8F6]">
        <SectionHeading className={""}>
          Kuria Girl Child Development Center
        </SectionHeading>
      </div>
    </div>
  );
};

export default Home;
