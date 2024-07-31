/* eslint-disable react/prop-types */
import DynamicText from "@/components/texts/DynamicText";
import { supportStaff } from "./staffContent"; 

const SupportStaff = () => {
  return (
    <div>
      <DynamicText as="h2" className="text-purple-800 text-left font-semibold text-2xl">
        Support Staff Members
      </DynamicText>
      
      <ul className="list-disc list-inside ml-4">
        {supportStaff.map((staff, index) => (
          <li key={index} className="text-gray-700">
            {staff.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportStaff;
