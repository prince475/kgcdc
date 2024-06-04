/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const SectionHeading = ({ className, ...props }) => {
  return (
    <h2 
      {...props}
      className={cn("text-2xl font-bold text-[#393939] lg:text-5xl", className)}
    >
      {props.children}
    </h2>
  );
};

export default SectionHeading;
