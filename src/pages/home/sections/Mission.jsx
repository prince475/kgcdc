import { cardContents } from "./mission/cardContents";
import ReusableCard from "./mission/ReusableCard";

const Mission = () => {
  return (
    <section className="grid grid-cols-1 gap-4 bg-[#E3D8F6] p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3 lg:p-8">
      {cardContents.map((item, index) => (
        <ReusableCard cardDetails={item} key={index} />
      ))}
    </section>
  );
};

export default Mission;
