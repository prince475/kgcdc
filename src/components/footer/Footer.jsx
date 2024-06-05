import FirstFooterColumn from "./components/FirstFooterColumn";
import SecondFooterColumn from "./components/SecondFooterColumn";
import ThirdFooterColumn from "./components/ThirdFooterColumn";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <FirstFooterColumn />
        <SecondFooterColumn />
        <ThirdFooterColumn />
      </div>

      <p className="font-montserrat py-4 text-center text-sm">
        © {new Date().getFullYear()} KuriaGirlChildDevelopmentCenter. All
        rights reserved
      </p>
    </footer>
  );
};

export default Footer;
