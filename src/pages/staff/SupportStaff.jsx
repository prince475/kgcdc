/* eslint-disable react/prop-types */
import DynamicText from "@/components/texts/DynamicText";
import { supportStaff } from "./staffContent"; 

const SupportStaff = () => {
  return (
    <section className="py-10">
       <DynamicText as="h4" className="text-xl font-montserrat text-left text-purple-800 lg:text-2xl font-semibold">
          Support Staff Members
        </DynamicText>

      <ul className="list-disc  list-inside ml-4">
        {supportStaff.map((staff, index) => (
          <li key={index} className="text-[#393939] font-montserrat">
            {staff.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SupportStaff;
