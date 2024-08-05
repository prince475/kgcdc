import { patnersData } from '@/pages/support-us/supportUsContent'; 
import DynamicText from "@/components/texts/DynamicText";

const OurPartners = () => {
  return (
    <section className="bg-[#E3D8F6] px-3 py-8 md:px-10 md:py-12 lg:px-24 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {patnersData.map((partner, index) => (
          <div
            className="flex flex-col items-center bg-white border border-[#7030A0] rounded-[16px] p-4"
            key={index}
          >
            <img src={partner.icon} alt={partner.name} className="w-[120px] h-[120px] mb-2" />
            <DynamicText as='h1' className="text-lg font-montserrat md:text-xl lg:text-2xl font-bold">
              {partner.name}
            </DynamicText>
            <DynamicText className="text-sm md:text-base lg:leading-6 lg:text-[16px] font-montserrat text-black mt-4">
              {partner.description}
            </DynamicText>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
