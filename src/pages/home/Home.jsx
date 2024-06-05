import AboutUs from "./sections/about-us/AboutUs";
import HeroSection from "./sections/hero-section/HeroSection";
import Mission from "./sections/mission/Mission";

const Home = () => {
  return (
    <div>
      <HeroSection />
			<AboutUs />
			<Mission/>
    </div>
  );
};

export default Home;
