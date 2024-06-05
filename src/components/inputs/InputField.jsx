const InputField = ({ ...props }) => {
  return (
    <input
      {...props}
      className="cursor-pointer border-2 border-[#3e3e3e] px-6 py-3 text-base text-white transition hover:border-[#fff]"
    />
  );
};

export default InputField;
