const Select = ({ type = "default", children, ...props }) => {
  return (
    <select
      className={`rounded-md border p-3 text-[1.4rem] font-medium shadow-sm ${type === "white" ? "border-gray-200" : "border-gray-400"} bg-white`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
