import logo from "@assets/logos/kgcdc-logo.svg";
import { navLinks } from "./navlinks";
import Link from "./Link";
const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 lg:px-24">
      <img src={logo} className="size-20" alt="Page Logo" />

      <div className="flex items-center gap-4 p-4">
        {navLinks.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
