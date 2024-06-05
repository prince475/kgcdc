import { navLinks } from "./navlinks";
import Link from "./Link";
const DesktopMenu = () => {
  return (
    <div className="hidden items-center gap-4 p-4 lg:flex">
      {navLinks.map((link, index) => (
        <Link key={index} link={link} />
      ))}
    </div>
  );
};

export default DesktopMenu;
