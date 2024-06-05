import InputField from "@/components/inputs/InputField";
import { FaArrowRight } from "react-icons/fa";

const ThirdFooterColumn = () => {
  return (
    <div className="font-montserrat flex flex-col justify-center gap-6 text-xs md:text-sm">
      <p className="font-semibold">Subscribe</p>

      <form className="flex items-center">
        <InputField placeholder="Get news updates" type="text" />
        <button className="flex h-full w-12 items-center justify-center bg-[#002F5F] text-white">
          <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default ThirdFooterColumn;
