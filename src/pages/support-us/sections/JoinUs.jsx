import { JoinUsData } from '@/pages/support-us/supportUsContent'; 
import DynamicText from "@/components/texts/DynamicText";
import Button from "@/components/buttons/Button";
import SectionHeading from "@/components/texts/SectionHeading";

// eslint-disable-next-line react/prop-types
const JoinUs = ({ onShowVolunteer, onShowSponsorChild }) => {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12 lg:px-20 lg:py-16">
      <SectionHeading className="py-4 mb-4 text-left text-[#7030A0] px-2 lg:p-8 lg:px-1">
        Join Us Today
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-20 gap-6">
        {JoinUsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border border-black p-6"
          >
            <DynamicText as='h3' className="text-lg text-left font-montserrat md:text-xl lg:text-2xl font-bold">
              {item.name}
            </DynamicText>

            <DynamicText className="text-left  mt-4">
              {item.description}
            </DynamicText>

            <div className="flex lg:justify-end">
              <Button
                className="bg-[#7030A0] text-white mt-4 py-2 px-4 rounded-md hover:bg-purple-900 transition"
                onClick={() => {
                  if (item.name === 'Volunteer:') {
                    onShowVolunteer();
                  } else if (item.name === 'Sponsor a Child:') {
                    onShowSponsorChild();
                  }
                }}
              >
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
