const Heading = ({ type, children }) => {
  const baseStyles = "leading-tight";

  const typeStyles = {
    h1: "text-3xl font-semibold",
    h2: "text-2xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-3xl font-semibold text-center",
  };

  const className = `${baseStyles} ${typeStyles[type]}`;

  return <div className={className}>{children}</div>;
};

export default Heading;
