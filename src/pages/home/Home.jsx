import AboutUs from "./sections/about-us/AboutUs";
import Gallery from "./sections/gallery/Gallery";
import HeroSection from "./sections/hero-section/HeroSection";
import Mission from "./sections/mission/Mission";
import WhereWeWork from "./sections/where-we-work/WhereWeWork";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Mission />
      <WhereWeWork />
      <Gallery />
    </div>
  );
};

export default Home;
