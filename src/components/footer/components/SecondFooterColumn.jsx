import { navLinks } from "@/components/navbar/navlinks";
import { Link } from "react-router-dom";

const SecondFooterColumn = () => {
  return (
    <div className="font-montserrat flex flex-col justify-end gap-6 text-xs md:text-sm">
      <p className="font-semibold">Quick Links</p>

      <div className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SecondFooterColumn;
