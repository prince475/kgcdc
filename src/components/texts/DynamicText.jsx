/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const DynamicText = ({ as: Tag = "p", className, ...props }) => {
  return (
    <Tag
      {...props}
      className={cn(
        "font-montserrat text-center md:leading-7  leading-4  text-sm text-[#393939] lg:text-[18px]",
        className,
      )}
    >
      {props.children}
    </Tag>
  );
};

export default DynamicText;
