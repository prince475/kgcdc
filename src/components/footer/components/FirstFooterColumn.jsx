import logo from "@assets/logos/kgcdc-logo.svg";

const FirstFooterColumn = () => {
  return (
    <div className="font-montserrat flex flex-col gap-6 text-xs md:text-sm">
      <img src={logo} alt="Logo" className="size-12 lg:size-20" />
      <div className="flex flex-col gap-2">
        <p>+254 720 769 235</p>
        <p>+254 720 273 450</p>
      </div>

      <div className="flex flex-col gap-2">
        <p>P.O Box 198-40413</p>
        <p className="font-semibold">Kehancha</p>
        <a href="mailto:kuriagrlchildcenter@gmail.com">
          kuriagrlchildcenter@gmail.com
        </a>
      </div>

      <p>Reg No - OP.218/051/12-0219/8129</p>
    </div>
  );
};

export default FirstFooterColumn;
