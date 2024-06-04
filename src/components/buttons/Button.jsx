/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const Button = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "font-montserrat h-12 w-44 rounded-md bg-white font-bold outline outline-1 outline-purple-800 hover:bg-purple-800 hover:text-white hover:shadow-xl",
        className,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
