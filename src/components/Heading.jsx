const Heading = ({ type, children }) => {
  const baseStyles = "leading-tight";

  const typeStyles = {
    h1: "text-3xl font-semibold text-gray-700",
    h2: "text-2xl font-semibold text-gray-700",
    h3: "text-2xl font-medium text-gray-700",
    h4: "text-3xl font-semibold text-center text-gray-700",
  };

  const className = `${baseStyles} ${typeStyles[type]}`;

  return <div className={className}>{children}</div>;
};

export default Heading;
