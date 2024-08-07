import AboutUs from "./sections/AboutUs";
import Gallery from "./sections/Gallery";
import HeroSection from "./sections/hero-section/HeroSection";
import Mission from "./sections/Mission";
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
