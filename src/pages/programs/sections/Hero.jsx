
import { heroImg } from "@/pages/programs/programsContent";

const Hero = () => {

  console.log(heroImg[0].image)

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${heroImg[0].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        width: '100%'   // Adjust the width if necessary
      }}
      aria-label={heroImg[0].alt}
    >
      {/* Add content here if needed */}
    </div>
  );
};

export default Hero;
