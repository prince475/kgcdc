import Button from "@/components/buttons/Button";
import DynamicText from "@/components/texts/DynamicText";

const OurStory = () => {
  return (
    <section className="flex flex-col justify-center gap-4">
      <DynamicText
        as="h3"
        className="text-center text-2xl text-purple-800 lg:text-4xl"
      >
        Our Story
      </DynamicText>

      <div className="flex flex-col gap-4">
        <DynamicText className="lg: text-left">
          Kuria Girl Child Development Centre (KGCDC) stands as a beacon of hope
          and change, driven by the unwavering commitment of its founder, Robi
          Marwa, to dismantle harmful cultural practices and empower girls and
          women in her community.
        </DynamicText>

        <DynamicText className="lg: text-left">
          Robi&apos;s journey began in 1974 when she defied tradition and
          refused to undergo female genital cutting, sparking a courageous path
          that inspired her siblings and earned her national recognition as a
          heroine and warrior.
        </DynamicText>

        <DynamicText className="lg: text-left">
          {" "}
          Founded in 2012, KGCDC is dedicated to accelerating efforts to end
          Female Genital Mutilation/Cutting (FGM/C), child marriages, teen
          pregnancies, and inequalities perpetuated by poverty, aligning with
          international commitments and legal provisions aimed at eradicating
          violence and discrimination.
        </DynamicText>

        <DynamicText className="lg: text-left">
          Through advocacy, education, rescue efforts, and community
          sensitization, KGCDC strives to transform social norms and provide
          girls with opportunities for education and empowerment, confronting
          the entrenched practices that hinder their futures. In the face of
          staggering statistics and cultural barriers, KGCDC remains steadfast
          in its mission to protect the rights and dignity of girls and women,
          paving the way for a brighter and more equitable future for all.
        </DynamicText>

        <Button className="self-end bg-[#60A030] text-white outline-0">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default OurStory;
