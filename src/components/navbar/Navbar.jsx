import logo from "@assets/logos/kgcdc-logo.svg";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 lg:px-24">
      <img src={logo} className="size-10 lg:size-20" alt="Page Logo" />
      <DesktopMenu />
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
