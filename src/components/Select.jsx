const StyledSelect = ({ type = "default", children, ...props }) => {
  return (
    <select
      className={`rounded-md border px-3 py-2 text-[1rem] font-medium shadow-sm ${type === "white" ? "border-gray-200" : "border-gray-400"} bg-white`}
      {...props}
    >
      {children}
    </select>
  );
};

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          selected={option.value === value}
        >
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
