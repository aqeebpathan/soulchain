const RadioOption = ({
  value,
  selectedOption,
  setSelectedOption,
  children,
}) => {
  const handleChange = () => {
    setSelectedOption(value);
  };

  return (
    <label
      className={`radio-option ${
        selectedOption === value
          ? "bg-[#6816b9] text-white border-2"
          : "bg-[#2f3031] text-white"
      } text-[18px] sm:text-[20px] sm:w-full w-[300px] p-[16px] sm:p-6 rounded-[16px] text-center cursor-pointer `}
    >
      <input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={handleChange}
        className="hidden "
      />
      {children}
    </label>
  );
};

export default RadioOption;
