/* eslint-disable react/prop-types */
import DynamicText from "@/components/texts/DynamicText";
import StaffCard from "./StaffCard";
import { staffContent } from "./staffContent";
import { staffIntro } from "./staffContent"; // Import staffIntro
import SupportStaff from "./SupportStaff";

const StaffList = () => {
  return (
    <div className="flex flex-col gap-8">

      {/* staffIntro */}
      <div className="  text-left">
        <DynamicText as="p" className="text-sm font-montserrat text-left lg:text-base text-gray-700">
          {staffIntro[0].description} 
        </DynamicText>
      </div>

      {/* First card takes full width */}
       <div className="flex border border-[#393939] flex-col lg:flex-row gap-8 p-4">
         <img src={staffContent[0].image} alt={staffContent[0].name} 
          className="w-full lg:w-1/2 h-auto" />
  
         <div className="lg:w-1/2 mt-10 lg:mt-10 ">
           <DynamicText as="h2" className="text-xl font-montserrat text-purple-800 lg:text-2xl font-semibold">
            {staffContent[0].name}
           </DynamicText>
    
           <div className="flex flex-col  gap-4">
              <p className="lg:text-[16px] leading-normal font-montserrat text-black text-left mt-4">
                 Robi is the founder and Chief Executive officer of Kuria Girl Child Development Center. She is a Child rights Crusader and anti FGM/C Champion and she was recognized by the president of Kenya as a heroine in 2019 Mashujaa day due her work in children rights protection standing up against entrenched harmful practice of Female genital mutilation/cutting putting her life and those of her family and associates in danger.
              </p>
              <p className="lg:text-lg leading-normal font-montserrat  text-left mt-4">
                She is an educationist who exited public service and founded Kehancha Ravine academy to further her passion and dream of ending violence against children through Education and mentorship. She holds a bachelor of arts in Education. She spends her free time in Church supporting her husband who is a bishop with PEFA churches.
              </p>
           </div>
         </div>
        </div>


      {/* Remaining cards displayed in 2 per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {staffContent.slice(1).map((staff, index) => (
          <StaffCard key={index} staff={staff} />
        ))}
      </div>

      {/* supporting staff */}
       <SupportStaff />
    </div>
  );
};

export default StaffList;
