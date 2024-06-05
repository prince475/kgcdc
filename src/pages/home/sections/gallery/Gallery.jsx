import DynamicText from "@/components/texts/DynamicText";
import { galleryItems } from "./galleryItems";

const Gallery = () => {
  return (
    <section>
      <DynamicText
        as="h3"
        className="p-4 text-left text-2xl font-semibold text-purple-800 md:text-left md:text-2xl lg:p-8 lg:text-2xl"
      >
        Gallery
      </DynamicText>
      <section className="carousel carousel-center bg-neutral rounded-box w-screen space-x-4 p-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} className="rounded-box" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Gallery;
