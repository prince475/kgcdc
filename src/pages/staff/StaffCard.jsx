/* eslint-disable react/prop-types */
import DynamicText from "@/components/texts/DynamicText";

const StaffCard = ({ staff }) => {
  const { image, name, description } = staff;
  return (
    <div className="flex flex-col  items-center gap-4 p-4 border border-gray-500">
      <img src={image} alt={name} className="w-full h-auto  lg:w-[563px] lg:h-auto" />
      <div className="lg:w lg:pl p-3">
        <DynamicText as="h4" className="text-xl text-left text-purple-800 lg:text-2xl font-semibold">{name}</DynamicText>
        <DynamicText className="text- lg:text-[16px] leading-normal text-left  text-black mt-4">{description}</DynamicText>
      </div>
    </div>
  );
};

export default StaffCard;
