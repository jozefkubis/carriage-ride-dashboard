const buttonSizes = {
  small: "text-xs px-3 py-1 uppercase font-semibold",
  medium: "text-sm px-4 py-2 font-medium",
  large: "text-base px-6 py-3 font-medium",
};

const buttonVariants = {
  primary: "text-white bg-blue-600 hover:bg-blue-700",
  secondary:
    "text-gray-600 bg-gray-100 border border-gray-300 hover:bg-gray-200",
  danger: "text-white bg-red-600 hover:bg-red-700",
};

const Button = ({
  size = "medium",
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-md transition-colors duration-200 ${buttonSizes[size]} ${buttonVariants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
