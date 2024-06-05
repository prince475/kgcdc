/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const DynamicText = ({ as: Tag = "p", className, ...props }) => {
  return (
    <Tag
      {...props}
      className={cn(
        "font-montserrat text-xs font-bold text-[#393939] text-center lg:text-base",
        className,
      )}
    >
      {props.children}
    </Tag>
  );
};

export default DynamicText;
