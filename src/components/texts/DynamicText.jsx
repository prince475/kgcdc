/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const DynamicText = ({ as: Tag = "p", className, ...props }) => {
  return (
    <Tag
      {...props}
      className={cn(
        "font-montserrat text-center text-xs text-[#393939] lg:text-base",
        className,
      )}
    >
      {props.children}
    </Tag>
  );
};

export default DynamicText;
