
import SectionHeading from "@/components/texts/SectionHeading";

import StaffList from "./StaffList";

const Staff = () => {
  return (

    <section className="container mx-ato p-4 lg:px-32 ">


      <SectionHeading className=" font-montserrat text-left text-purple-800 lg:py-4 lg:px-0">
        Our Staff
      </SectionHeading>
       

      <StaffList />

    </section>
  );
};

export default Staff;
