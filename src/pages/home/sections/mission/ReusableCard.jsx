/* eslint-disable react/prop-types */
import DynamicText from "@/components/texts/DynamicText";

const ReusableCard = ({ cardDetails }) => {
  const { title, description } = cardDetails;
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-4 py-8 lg:py-12">
      <cardDetails.icon className="size-16 text-purple-800" />
      <DynamicText as="h3" className={" text-xl lg:text-2xl font-semibold"}>{title}</DynamicText>
      <DynamicText>{description}</DynamicText>
    </div>
  );
};

export default ReusableCard;
