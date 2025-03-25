import clsx from "clsx";

const Tag = ({ type, children }) => {
  const colorClasses = {
    primary: "text-blue-700 bg-blue-100",
    secondary: "text-gray-700 bg-gray-100",
    success: "text-green-700 bg-green-100",
    danger: "text-red-700 bg-red-100",
    // warning: "text-yellow-700 bg-yellow-100",
  };

  return (
    <span
      className={clsx(
        "w-fit rounded-full px-2 py-1 text-[0.8rem] font-semibold uppercase",
        colorClasses[type] || "bg-gray-100 text-gray-700",
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
